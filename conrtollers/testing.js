const testingRouter = require('express').Router()
const Blog = require('../moduls/blog')
const User = require('../moduls/user')

testingRouter.post('/reset', async (request, response) => {
  await Blog.deleteMany()
  await User.deleteMany()

  response.status(204).end()
})

module.exports = testingRouter;