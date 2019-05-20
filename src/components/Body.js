import * as React from 'react'

class Body extends React.Component {
  render () {
    return (
      <div>
        <ul class="list-group">
          <li class="list-group-item d-flex align-items-center justify-content-between">
            <input type="checkbox" />
            <span>Cras justo odio</span>
            <button className="btn btn-danger btn-sm">x</button>
          </li>
          <li class="list-group-item d-flex align-items-center bg-success justify-content-between">
            <input type="checkbox" checked/>
            <span>Cras justo odio</span>
            <button className="btn btn-danger btn-sm">x</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default Body