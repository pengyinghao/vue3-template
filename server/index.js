const express = require('express')
const Mock = require('mockjs')

const app = express()

const Random = Mock.Random

const users = []
for (let i = 0; i < 20; i++) {
    users.push({
        id: Random.id(),
        name: Random.cname(),
        age: Random.integer(20, 50),
        asset: Random.float(200, 500000, 1, 6),
        married: Random.boolean(),
        birth: Random.datetime('yyyy-MM-dd HH:mm:ss'),
        addr: `${Random.province()}-${Random.city()}-${Random.county()}`,
        email: Random.email('qq.com')
    })
}

app.get('/api/v1/user', (req, res) => {
    res.send({
        code: 1,
        data: {
            list: users,
            total: 200
        },
        success: true
    })
})

app.listen(3000, () => {
    console.log('server listen on  3000')
})
