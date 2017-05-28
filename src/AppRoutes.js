import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import App from './App'
import W8BenForm from './Components/W8BenForm'

const AppRoutes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App}></Route>
      <Route path="/reports/w8ben" component={W8BenForm}/>
    </div>
  </Router>
)
export default AppRoutes