import Mock from 'mockjs'
Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id |1-3": 0,
    "username": "@cname", // @name 随机产生英文名，@cname 随机产生中文名
    "email": "admin@51purse.com",
    "phone": null,
    "role":0,
    "createTime": 42323423,
    "updateTime": 64643
  }
})