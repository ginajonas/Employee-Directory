import './App.css'
import Employees from './pages/Employees'
import Navbar from './components/Navbar'
import React from 'react'

class App extends React.Component {
  state = {
    searchText: '',
  }

  onSearchChange = (searchText) => {
    this.setState({ searchText: searchText })
  }

  render() {
    return (
      <div className="container">
        <Navbar onSearchChange={this.onSearchChange} />
        <div className="row">
          <Employees searchText={this.state.searchText} />
        </div>
      </div>
    )
  }
}

export default App
