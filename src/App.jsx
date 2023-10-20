import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useStore } from './global'

const REPLACE_REDUX_WITH_HOOK = "https://letritam54.notion.site/23-Replace-Redux-with-Hooks-3df88caf71954ffbbe102dde5ed2ea05?pvs=4"

function App() {
  
  const [state, dispatch] = useStore()

  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <div className='flex gap-2'>
        <a href="https://vitejs.dev" target="">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card flex flex-col gap-6 w-full justify-center items-center">
        <div className='flex gap-4'>
        <button onClick={()=>dispatch('SUB', 1)}>
          -1
        </button>
        <h2 className='font-bold text-xl'>count is {state.counter}</h2>
        <button onClick={()=>dispatch('ADD', 1)}>
          +1
        </button>
          </div>
        <p>
          The button above using custom-hook store! No REDUX
        </p>
        <p>
          Want to know more? Click 
          <span className='cursor-pointer'>
            <a href={REPLACE_REDUX_WITH_HOOK}> hear</a> !
          </span>
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
