import Todos from "./components/Todos"
import ColorModeContainer from "./components/ColorModeContainer"
import {DarkModeContext} from './context/DarkModeContext'
import {useDarkmode} from './context/DarkModeContext'


function App() {
const darkMode = useDarkmodeContext()
  return (
    <DarkModeContext>

    <ColorModeContainer >
      <div className="container my-4">
        <h1 className="text-center">ToDos App</h1>
        <Todos />
      </div>
    </ColorModeContainer>

    </DarkModeContext>
  )
}

export default App
