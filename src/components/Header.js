/* eslint-disable no-useless-constructor */
import * as React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className="mt-4">
        <h1>Todolist React</h1>
        <hr/>
        <input type="text" className="form-control" placeholder="Nouvelle todo" />
        <div className="mt-3 d-flex justify-content-center align-items-center">
          <button className="btn btn-outline-primary mx-2 active">Toutes</button>
          <button className="btn btn-outline-primary mx-2">Terminées</button>
          <button className="btn btn-outline-primary mx-2">Non-terminées</button>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
            <label className="form-check-label" htmlFor="defaultCheck1">
              Toggle toutes les todos
            </label>
          </div>
        </div>
        <hr/>
      </div>
    )
  }
}

export default Header