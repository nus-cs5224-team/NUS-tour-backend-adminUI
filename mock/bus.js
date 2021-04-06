const data = [
    {"id":8,"name":"A1"},
    {"id":3,"name":"A2"},
    {"id":10,"name":"B1"},
    {"id":2,"name":"B2"},
    {"id":1,"name":"BTC1"},
    {"id":4,"name":"BTC2"},
    {"id":7,"name":"C1"},
    {"id":6,"name":"D1"},
    {"id":9,"name":"D2"},
    {"id":5,"name":"LUNCH SHUTTLE"}
]

module.exports = [
    {
      url: '/vue-admin-template/buses',
      type: 'get',
      response: config => {
        return {
          code: 20000,
          data: data
        }
      }
    }
  ]
  