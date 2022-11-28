import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sing-in.componetn';
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
        <Route path='signIn' element={ <SignIn /> }/>
      </Route>
    </Routes>
  ) 
}

export default App;
