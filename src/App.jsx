import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.componetn';
import Home from "./routes/home/home.component";


const Shop = () =>{
  return <h1>I am the shop</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={ <Home /> }/> {/* Index ubacuje home u outlet glavnog dira */}
        <Route path='shop' element={ <Shop /> }/>
        <Route path='auth' element={ <Authentication /> }/>
      </Route>
    </Routes>
  ) 
}

export default App;
