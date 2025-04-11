import { useAppStore } from "../stores/useAppStore"


export default function IndexPage() {
  useAppStore()
  return (
    <>
        <h1>Inicio</h1>
    </>
  )
}
