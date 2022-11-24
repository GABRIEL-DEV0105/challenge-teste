import GlobalStyle from './global-styled'
import {  Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div>
      <BrowserRouter>
        <GlobalStyle/>
        <Router/>
      </BrowserRouter> 
    </div>
  )
}

export default App
