import { useNotification } from "../hooks/useNotification"

const NotificationButton: React.FC = () => {
  const { showNotification } = useNotification()

  return (
    <button onClick={() => showNotification("✅ Transacción exitosa")}>
      Confirmar Transacción
    </button>
  )
}

export { NotificationButton }