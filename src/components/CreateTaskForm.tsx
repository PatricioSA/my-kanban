import { PlusIcon } from "@radix-ui/react-icons";
import { Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes";

export default function CreateTaskForm() {

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>
                    <PlusIcon /> Nova Tarefa
                </Button>
            </Dialog.Trigger>

            <Dialog.Content >
                <Dialog.Title mb="6">Nova Tarefa</Dialog.Title>

                <form>
                    <section className="mb-3">
                        <Text as="label" htmlFor="title">Título</Text>
                        <TextField.Root placeholder="Nova Tarefa" name="title" id="title" autoFocus required />
                    </section>

                    <section className="mb-3">
                        <Text as="label" htmlFor="description">Descrição</Text>
                        <TextArea placeholder="Descreva a tarefa" name="description" id="desription" autoFocus required />
                    </section>

                    <Flex>
                        <Box>
                            <Text>Situação</Text>
                            <RadioGroup.Root name="status" defaultValue="todo">
                                <RadioGroup.Item value="todo">
                                    À Fazer
                                </RadioGroup.Item>
                                <RadioGroup.Item value="doing">
                                    Em Progresso
                                </RadioGroup.Item>
                                <RadioGroup.Item value="done">
                                    Concluída
                                </RadioGroup.Item>
                            </RadioGroup.Root>
                        </Box>

                        <Box>
                            <Text>Prioridade</Text>
                            <RadioGroup.Root name="priority" defaultValue="low">
                                <RadioGroup.Item value="low">
                                    Baixa
                                </RadioGroup.Item>
                                <RadioGroup.Item value="medium">
                                    Média
                                </RadioGroup.Item>
                                <RadioGroup.Item value="high">
                                    Alta
                                </RadioGroup.Item>
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