import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes"
import { Task } from "../entities/Task"
import TaskCard from "./TaskCard"

export default function TaskBoard() {

    const tasksTodo: Task[] = [
        {
            "id": 2,
            "title": "Criar apresentação",
            "description": "Preparar os slides para a reunião com os investidores.",
            "status": "todo",
            "priority": "high"
        },
    ]
    const tasksInProgress: Task[] = [
        {
            "id": 1,
            "title": "Responder emails pendentes",
            "description": "Verificar e responder emails importantes da caixa de entrada.",
            "status": "doing",
            "priority": "high"
        },
    ]
    const tasksDone: Task[] = [
        {
            "id": 3,
            "title": "Backup do sistema",
            "description": "Realizar backup dos arquivos e banco de dados do sistema.",
            "status": "done",
            "priority": "medium"
        },
    ]

    return (
        <ScrollArea scrollbars="horizontal">
            <Grid columns="3" gap="4" minWidth="64rem">
                <Flex direction="column" gap="4">
                    <Badge size="3" color="gray">
                        A Fazer
                    </Badge>

                    {tasksTodo.map((task) => <TaskCard key={task.id} task={task} />)}
                </Flex>
                <Flex direction="column" gap="4">
                    <Badge size="3" color="yellow">
                        Em Progresso
                    </Badge>

                    {tasksInProgress.map((task) => <TaskCard key={task.id} task={task} />)}
                </Flex>
                <Flex direction="column" gap="4">
                    <Badge size="3" color="green">
                        Concluídas
                    </Badge>

                    {tasksDone.map((task) => <TaskCard key={task.id} task={task} />)}
                </Flex>
            </Grid>
        </ScrollArea>
    )
}