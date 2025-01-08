import { UseState } from "./components/UseState/"
import { ClassState } from "./components/ClassState"

const App = () => {
  return(
    <div>
      <UseState name="UseState"/>
      <ClassState name="ClassState"/>
    </div>
  )
}

export { App }
