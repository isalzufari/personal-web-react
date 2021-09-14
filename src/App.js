import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Blog from './pages/Blog';
import Film from './pages/Film';
import Contact from './pages/Contact';

function App() {

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/film' component={Film} />
          <Route exact path='/contact' component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
