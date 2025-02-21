import { PlusIcon } from "@radix-ui/react-icons";
import { Badge, Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes";
import { FormEventHandler } from "react";
import { z } from "zod";

const CreateTaskSchema = z.object({
    title: z.string(),
    description: z.string(),
    status: z.enum(["todo", "doing", "done"]),
    priority: z.enum(["low", "medium", "high"]),
})

export default function CreateTaskForm() {
    const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        const title = formData.get("title")
        const description = formData.get("description")
        const status = formData.get("status")
        const priority = formData.get("priority")

        e.currentTarget.reset()

        const taskData = CreateTaskSchema.parse({ title, description, status, priority })

        alert(JSON.stringify(taskData))
    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <PlusIcon /> Nova Tarefa
                </Button>
            </Dialog.Trigger>

            <Dialog.Content >
                <Dialog.Title mb="6">Nova Tarefa</Dialog.Title>

                <form onSubmit={handleSubmit}>
                    <section className="mb-3">
                        <Text as="label" htmlFor="title">Título</Text>
                        <TextField.Root placeholder="Nova Tarefa" name="title" id="title" autoFocus required />
                    </section>

                    <section className="mb-3">
                        <Text as="label" htmlFor="description">Descrição</Text>
                        <TextArea placeholder="Descreva a tarefa" name="description" id="desription" autoFocus required />
                    </section>

                    <Flex gap="8">
                        <Box>
                            <Text>Situação</Text>
                            <RadioGroup.Root name="status" defaultValue="todo">
                                <Badge color="gray">
                                    <RadioGroup.Item value="todo">
                                        À Fazer
                                    </RadioGroup.Item>
                                </Badge>
                                <Badge color="yellow">
                                    <RadioGroup.Item value="doing">
                                        Em Progresso
                                    </RadioGroup.Item>
                                </Badge>
                                <Badge color="green">
                                    <RadioGroup.Item value="done">
                                        Concluída
                                    </RadioGroup.Item>
                                </Badge>
                            </RadioGroup.Root>
                        </Box>

                        <Box>
                            <Text>Prioridade</Text>
                            <RadioGroup.Root name="priority" defaultValue="low">
                                <Badge color="sky">
                                    <RadioGroup.Item value="low">
                                        Baixa
                                    </RadioGroup.Item>
                                </Badge>
                                <Badge color="amber">
                                    <RadioGroup.Item value="medium">
                                        Média
                                    </RadioGroup.Item>
                                </Badge>
                                <Badge color="tomato">
                                    <RadioGroup.Item value="high">
                                        Alta
                                    </RadioGroup.Item>
                                </Badge>
                            </RadioGroup.Root>
                        </Box>
                    </Flex>

                    <Flex justify="end" gap="2">
                        <Dialog.Close>
                            <Button color="gray" variant="soft">Cancelar</Button>
                        </Dialog.Close>
                        <Button type="submit">Criar Tarefa</Button>
                    </Flex>
                </form>
            </Dialog.Content>
        </Dialog.Root>
    )
}