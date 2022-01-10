const addOrderUseCase = require('./addOrder.useCase');
const getOrderByIdUseCase = require('./getOrderById.useCase');
const updateOrderByIdUseCase = require('./updateOrder.useCase');
const deleteOrderByIdUseCase = require('./deleteOrder.useCase');
module.exports = {
    addOrderUseCase,
    getOrderByIdUseCase,
    updateOrderByIdUseCase,
    deleteOrderByIdUseCase
};