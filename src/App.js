import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import {Route, BrowserRouter} from 'react-router-dom'
function App() {
return(
  <BrowserRouter>
    <Route exact path='/' component={HomePage}/>
    <Route exact path='/register' component={RegisterPage}/>
    <Route exact path='/login' component={LoginPage}/>
  </BrowserRouter>
)
}
export default App;