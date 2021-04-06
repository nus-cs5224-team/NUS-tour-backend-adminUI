const Mock = require('mockjs')

// const data = Mock.mock({
//   'items|30': [{
//     id: '@id',
//     title: '@sentence(10, 20)',
//     'status|1': ['published', 'draft', 'deleted'],
//     author: 'name',
//     display_time: '@datetime',
//     pageviews: '@integer(300, 5000)'
//   }]
// })

const data = [
    {"id":1,"username":"John_nus","email":"john.n@e.nus.edu"},
    {"id":2,"username":"Mark_nus","email":"mark.n@e.nus.edu"},
    {"id":3,"username":"Sakishi_nus","email":"Sakishi.n@e.nus.edu"}
]


module.exports = [
  {
    url: '/vue-admin-template/users',
    type: 'get',
    response: config => {
      console.log(data)
      return {
        code: 20000,
        data: data
      }
    }
  }
]
