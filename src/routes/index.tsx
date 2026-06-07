import { createFileRoute } from '@tanstack/react-router'
import { ButtonEditor } from "../components/index/ButtonEditor"

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <main>
      <ButtonEditor />
    </main>
  )
}
