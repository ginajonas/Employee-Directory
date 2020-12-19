import React, { Component } from 'react'
import Card from '../components/Card'
import API from '../utils/Api'

export default class Employees extends Component {
  state = {
    employees: [],
  }
  componentDidMount() {
    console.log('running')
    API.getEmployees().then((result) => {
      this.setState({ employees: result.data.results })
    })
  }

  render() {
    console.log(this.props.searchText)
    const filterFunction = (employee) => {
      let searchText = this.props.searchText.toLowerCase()
      let employee_name = (
        employee.name.first +
        ' ' +
        employee.name.last
      ).toLowerCase()
      return employee_name.includes(searchText)
    }
    return (
      <>
        {this.state.employees &&
          this.state.employees
            .filter(filterFunction)
            .map((employee) => (
              <Card key={employee.login.uuid} employee={employee} />
            ))}
      </>
    )
  }
}
