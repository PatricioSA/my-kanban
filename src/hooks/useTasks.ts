import { useContext } from "react"
import { TasksContext } from "../context/TasksContext"

export const useTasks = () => {
    return useContext(TasksContext)
}