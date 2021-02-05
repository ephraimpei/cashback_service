//--------------------------------DO NOT MODIFY ANYTHING HERE--------------------------------//

const express = require('express')
const knexfile = require('../knexfile.js');
const knex = require('knex')(knexfile);

const BaseRouter = express.Router()

BaseRouter.get('/users', async (req, res) => {
  const result = await knex.raw('select * from users')
  res.json(result.rows)
})

BaseRouter.get('/user/:id', async (req, res) => {
  const result = await knex.raw('select * from users where id = ?', [req.params.id])
  const user = result.rows[0] || null
  res.json(user)
})

BaseRouter.get('/merchants', async (req, res) => {
  const result = await knex.raw('select * from merchants')
  res.json(result.rows)
})

BaseRouter.get('/merchant/:id', async (req, res) => {
  const result = await knex.raw('select * from merchants where id = ?', [req.params.id])
  const merchant = result.rows[0] || null
  res.json(merchant)
})

BaseRouter.get('/orders', async (req, res) => {
  const result = await knex.raw('select * from orders')
  res.json(result.rows)
})

BaseRouter.get('/order/:id', async (req, res) => {
  const result = await knex.raw('select * from orders where id = ?', [req.params.id])
  const order = result.rows[0] || null
  res.json(order)
})

module.exports = BaseRouter