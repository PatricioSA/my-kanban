import { createContext, ReactNode, useEffect, useState } from "react";
import { Task } from "../entities/Task";
import { taskService } from "../services/api";

interface TasksContextData {
    tasks: Task[],
    createTask: (attributes: Omit<Task, "id">) => Promise<void>,
    updateTask: (id: string, attributes: Partial<Omit<Task, 'id'>>) => Promise<void>,
    deleteTask: (id: string) => Promise<void>
}

export const TasksContext = createContext({} as TasksContextData)

interface TasksContextProviderProps {
    children: ReactNode
}

export default function TasksContextProvider({ children }: TasksContextProviderProps) {
    const [tasks, setTasks] = useState<Task[]>([])

    useEffect(() => {
        taskService.fetchTasks().then((data) => setTasks(data))
    }, [])

    const createTask = async (attributes: Omit<Task, "id">) => {
        const newTask = await taskService.createTask(attributes)
        setTasks((currentState) => [...currentState, newTask])
    }

    const updateTask = async (id: string, attributes: Partial<Omit<Task, "id">>) => {
        await taskService.updateTask(id, attributes)
        setTasks((currentState) => {
            const updatedTasks = [...currentState]
            const taskIndex = updatedTasks.findIndex((task) => task.id === id)
            Object.assign(updatedTasks[taskIndex], attributes)
            return updatedTasks
        })
    }

    const deleteTask = async (id: string) => {
        await taskService.deleteTask(id)
        setTasks((currentState) => currentState.filter((task) => task.id !== id))
    }

    return (
        <TasksContext.Provider value={{ tasks, createTask, updateTask, deleteTask }}>
            {children}
        </TasksContext.Provider>
    )
}