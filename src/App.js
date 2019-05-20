import * as React from 'react';
import './css/App.css';
import HeaderApp from './components/Header'
import BodyApp from './components/Body'
import FooterApp from './components/Footer'
import TodoStore from './stores/TodoStore'

class App extends React.Component {
  constructor () {
    super()
    this.store = new TodoStore()
  }
  render () {
    return (
      <div className="container">
        <HeaderApp store={this.store} />
        <BodyApp store={this.store}/>
        <FooterApp store={this.store}/>
      </div>
    );
  }
}

export default App;
