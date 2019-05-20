import * as React from 'react'

class Footer extends React.Component {
  render () {
    return (
      <div>
        <hr/>
        <div className="d-flex align-items-center justify-content-between">
          <span>0 todo(s) restante(s).</span>
          <button className="btn btn-sm btn-danger">Supprimer toutes les todos terminées</button>
        </div>
      </div>
    )
  }
}

export default Footer