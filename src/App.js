import {BrowserRouter,  Route, Switch} from 'react-router-dom';
import Home from './Components/Home'
import About from './Components/About'
import SinglePost from './Components/SinglePost'
import NavBar from './Components/NavBar'
import Post from './Components/Post'
import Projects from './Components/Projects'

function App() {
  return (
    <BrowserRouter>
    <NavBar />
  <Switch>
    <Route path = '/' exact component = {Home} />
    <Route path = '/about'  component = {About} />
    <Route component={SinglePost} path='/post/:slug' />
    <Route path = '/post'  component = {Post} />
    <Route path = '/project'  component = {Projects} />

  </Switch>

    </BrowserRouter>
 
  );
}

export default App;
