'use strict'
const db = require('../models/')

module.exports = server => {
  server.route({
    method: ['GET'],
    path: '/',
    handler: async (request, h) => {
      return await db.employee.findAll()
    }
  })
  server.route({
    method: ['GET'],
    path: '/{id}',
    handler: async (request, h) => {
      return await db.employee.findAll({
        where: {
          id: request.params.id
        }
      })
    }
  })
  server.route({
    method: ['POST'],
    path: '/',
    handler: async (request, h) => {
      return await db.employee.create(request.payload)
    }
  })
  server.route({
    method: ['DELETE'],
    path: '/{id}',
    handler: async (request, h) => {
      return await db.employee.destroy({
        where: {
          id: request.params.id
        }
      })
    }
  })
  server.route({
    method: ['PUT'],
    path: '/{id}',
    handler: async (request, h) => {
      return await db.employee.update(
        {
          name: request.payload.name,
          job: request.payload.job,
          age: request.payload.age
        },
        {
          where: {
            id: request.params.id
          }
        }
      )
    }
  })
}
