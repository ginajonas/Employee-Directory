import axios from 'axios'

// Export an object containing methods we'll use for accessing the rendom employee name API

const API = {
  getEmployees: function () {
    return axios.get('https://randomuser.me/api/?results=50')
  },
}

export default API
