import './App.css';
import {Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import About from './pages/about/about.component';
import Gallery from './pages/gallery/gallery.component';
import Artwork from './pages/artwork/artwork.component'
import Contact from './pages/contact/contact.component';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/gallery' component={Gallery}/>
        <Route exact path='/contact' component={Contact}/>
        <Route path='/gallery/:categoryName/:itemId' component={Artwork}/> 
      </Switch>
    </div>
  );
}

export default App;
