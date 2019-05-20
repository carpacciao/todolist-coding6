/* eslint-disable no-useless-constructor */
import * as React from 'react'

class Body extends React.Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div>
        <ul className="list-group">
          <li className="list-group-item d-flex align-items-center justify-content-between">
            <input type="checkbox" />
            <span>Cras justo odio</span>
            <button className="btn btn-danger btn-sm">x</button>
          </li>
          <li className="list-group-item d-flex align-items-center bg-success justify-content-between">
            <input type="checkbox"/>
            <span>Cras justo odio</span>
            <button className="btn btn-danger btn-sm">x</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Body