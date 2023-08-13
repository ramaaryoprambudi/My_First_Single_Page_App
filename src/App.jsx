import './App.css'
import {router} from'./router'
import { RouterProvider } from 'react-router-dom'
import {GlobalContext} from './context/index'
function App() {
const user ={
  username:"Rama Aryo P"
}
  return(
    <div className='App'>
   <>
   <GlobalContext.Provider value={user}>
   <RouterProvider router={router} />
   </GlobalContext.Provider>
   </>
  </div>
  )
}

export default App
