import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Flex, Heading } from "@radix-ui/themes"

function App() {

  return (
    <Box maxWidth="80rem" mx="auto">
      <section style={{height: "4rem"}}>
        <Flex align="center" gap="4" height="100%">
          <Heading size="8" weight="light">My Kanban</Heading>
          <Button>
            <PlusIcon/> Nova Tarefa
          </Button>
        </Flex>
      </section>

      <section>
        <Heading as="h2">Quadro de tarefas</Heading>
      </section>
    </Box>
  )
}

export default App
