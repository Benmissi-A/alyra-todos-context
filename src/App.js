
import Todos from "./components/Todos"
import Home from "./pages/Home"
import Loin from "./pages/Login"
import ColorModeContainer from "./components/ColorModeContainer"
import { DarkModeContextProvider } from "../src/context/DarkModeContext"
function App() {

  return (
    <DarkModeContextProvider>
      <ColorModeContainer>
        <div className="container my-4">
          <h1 className="text-center">ToDos App</h1>
          <Todos />
        </div>
      </ColorModeContainer>
    </DarkModeContextProvider>
  )
}

export default App