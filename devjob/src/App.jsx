import Header from './components/header'
import Searchbar from './components/searchbar'
import Gridcontainer from './components/gridcontainer'
import Button from './components/button'
import Jobdetails from './components/jobdetails'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Jobheader from './components/jobheader'
import Home from './pages/home'
import Job from './pages/job'

function App() {

  return (
    <div className=' bg-light-grey flex flex-col justify-center items-center pt-[25vh] pb-[2%]'>
     
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
              <Home></Home>
          </Route>
          <Route exact path='/:id'>
               <Job></Job>
          </Route>   
        </Switch>        
      </BrowserRouter>

    </div>
  )
}

export default App
