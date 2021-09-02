import { Route, Switch } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Howdy</h1>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route exact path='/roasts' component={} />
          <Route exact path='/shop' component={} />
          <Route exact path='/aboutus' component={} /> */}
        </Switch>
      </main>
    </div>
  )
}

export default App
