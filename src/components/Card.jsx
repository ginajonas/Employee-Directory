import React from 'react'

export default function Card({ employee }) {
  return (
    <div className="col-md-3">
      <div className="card">
        <img
          className="card-img-top"
          alt="Card cap"
          src={employee.picture.medium}
        />
        <div className="card-body">
          <h5 className="card-title">
            {employee.name.title}. {employee.name.first} {employee.name.last}
          </h5>
          <p className="card-text">
            <b>Age:</b> {employee.dob.age} <br />
            <b>Email:</b> {employee.email} <br />
            <b>Cell:</b> {employee.cell}
          </p>
        </div>
      </div>
    </div>
  )
}
