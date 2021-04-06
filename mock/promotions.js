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

const data = [{
  "id":1,
  "abstracts":"Free PC",
  "details":"Spend $10000 and a get a free PC",
  "starttime":"2021-01-01T00:00:00",
  "endtime":"2021-01-05T00:00:00",
  "buildingId":1,
  "building": {"id":1,
    "name":"Office of Admissions",
    "location":"2 College Avenue West, University Town #01-03 (S) 138607",
    "area":"University Town",
    "tel":"+65 6516 1010",
    "fax":"+65 6778 7570",
    "imageUrl":"https://nus-tour-s3.s3.amazonaws.com/building/image/Office+of+Admissions.jpg",
    "locationUrl":"https://nus-tour-s3.s3.amazonaws.com/building/location/Office+of+Admissions.png"
  }
},{
  "id":2,
  "abstracts":"Free Mala Hotpot",
  "details":"Spend $1000 and a get a free mala hotpot",
  "starttime":"2021-01-03T00:00:00",
  "endtime":"2021-01-07T00:00:00",
  "buildingId":1,
  "building":{
    "id":1,
    "name":"Office of Admissions",
    "location":"2 College Avenue West, University Town #01-03 (S) 138607",
    "area":"University Town",
    "tel":"+65 6516 1010",
    "fax":"+65 6778 7570",
    "imageUrl":"https://nus-tour-s3.s3.amazonaws.com/building/image/Office+of+Admissions.jpg",
    "locationUrl":"https://nus-tour-s3.s3.amazonaws.com/building/location/Office+of+Admissions.png"
  }
}]


module.exports = [
  {
    url: '/vue-admin-template/promotions',
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
