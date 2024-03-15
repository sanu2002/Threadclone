import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Feed } from './pages/Feed'
import Authprovider from './Context/Authcontext'
import Privateroutes from './Routes/Privateroutes'
import Login from './Context/Login'

function App() {

  return (
    <>
    <Router>
        <Authprovider>
            <Routes>
                
                 <Route path='/' element={<Privateroutes component={Feed} />} />

                <Route path='/login/' element={<Login />} />
              
            </Routes>



        </Authprovider>

    
      
    </Router>

    
     
    </>
  )
}

export default App
