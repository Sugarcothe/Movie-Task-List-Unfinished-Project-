import React, { Component } from 'react'

export class table extends Component {
  render() {
    return (
      <div>
        <table className="table bg-dark">
          <thead>
            <tr className="text-white mt-5">
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
        </table>
      </div>
    )
  }
}

export default table
