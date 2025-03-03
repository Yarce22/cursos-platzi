import { Notification } from "./components/Notification"
import { NotificationButton } from "./components/NotificationButton"
import { NotificationProvider } from "./context/NotificationContext"

function App() {

  return (
    <NotificationProvider>
      <h1>Transacción casi lista</h1>
      <p>¿Estas seguro de que deseas completar esta transacción?</p>
      <NotificationButton />
      <Notification />
    </NotificationProvider>
  )
}

export default App
