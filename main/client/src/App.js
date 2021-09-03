import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Roasts from './pages/Roasts'
import Shop from './pages/Shop'
import AboutUs from './pages/AboutUs'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/roasts" component={Roasts} />
          <Route path="/shop" component={Shop} />
          <Route path="/aboutus" component={AboutUs} />
        </Switch>
      </main>
    </div>
  )
}

export default App
