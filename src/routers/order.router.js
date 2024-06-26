import Router from 'express'
import { newOrder, getMyOrders } from '../controllers/order.controller.js'

const orderRouter = Router()

orderRouter.post('/new-order', newOrder)
orderRouter.get('/get-all-order/:user-id', getMyOrders)

export { orderRouter }