import Header from './components/header'
import Searchbar from './components/searchbar'
import Gridcontainer from './components/gridcontainer'
import Button from './components/button'
import Jobdetails from './components/jobdetails'
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Jobheader from './components/jobheader'
import Home from './pages/home'
import Job from './pages/job'
import { useState } from 'react'
import themecontex from './contex/contex'
function App() {

 const [theme, setTheme]=useState('dark')

 const [multiplesearchterm, setmultiple]=useState('')
 const [locationsearchterm, setlocation]=useState('')
 const [fulltimesearchterm, setfulltime]=useState(false)

 const searchtems={multiplesearchterm, locationsearchterm, fulltimesearchterm}

  return (
     <themecontex.Provider value={{theme, setTheme,multiplesearchterm, setmultiple,locationsearchterm, setlocation,fulltimesearchterm, setfulltime}}>
        <div className=' bg-light-grey flex flex-col justify-center items-center pt-[25vh] pb-[2%] dark:bg-midnight'>
        
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
    </themecontex.Provider>
  )
}

export default App
