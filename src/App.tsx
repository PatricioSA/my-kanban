import { Box, Flex, Heading } from "@radix-ui/themes"
import CreateTaskForm from "./components/CreateTaskForm"
import TaskBoard from "./components/TaskBoard"

function App() {

  return (
    <Box maxWidth="80rem" mx="auto">
      <section style={{height: "4rem"}}>
        <Flex align="center" gap="4" height="100%">
          <Heading size="8" weight="light">My Kanban</Heading>
          <CreateTaskForm/>
        </Flex>
      </section>

      <section>
        <Heading as="h2" mb="4">Quadro de tarefas</Heading>
        <TaskBoard/>
      </section>
    </Box>
  )
}

export default App
