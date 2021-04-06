const data = {
    "A1": ["LT13", "Ventus", "LT27", "UTown"],
    "A2": ["LT13", "Ventus", "LT27", "UTown"],
    "B1": ["LT13", "Ventus", "LT27", "UTown"],
    "B2": ["LT13", "Ventus", "LT27", "UTown"],
    "BTC1": ["LT13", "Ventus", "LT27", "UTown"],
    "BTC2": ["LT13", "Ventus", "LT27", "UTown"],
    "C1": ["LT13", "Ventus", "LT27", "UTown"],
    "D1": ["LT13", "Ventus", "LT27", "UTown"],
    "D2": ["LT13", "Ventus", "LT27", "UTown"],
    "LUNCH SHUTTLE": ["LT13", "Ventus", "LT27", "UTown"],
}

module.exports = [
    {
      url: '/vue-admin-template/bus',
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
  