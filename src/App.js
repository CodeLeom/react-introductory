import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header"
import ReviewStats from './components/ReviewStats'
import ReviewList from "./components/ReviewList"
import ReviewForm from './components/ReviewForm'
import { ReviewProvider } from './context/ReviewContext'
import About from './components/pages/About'
import AboutLink from './components/AboutLink'


function App(){
    return ( 
      <ReviewProvider>
          <Router>
              <Header />
                <div className="container">
                  <Routes>
                        <Route exact path='/' element = {
                            <>
                              <ReviewForm />
                              <ReviewStats />
                              <ReviewList />
                              <AboutLink />
                            </>
                              }
                        ></Route>
                        
                        
                        <Route path='/about' element={<About />} />
                  </Routes>
                  
                </div>
          </Router>
      </ReviewProvider>
    )
}


export default App




