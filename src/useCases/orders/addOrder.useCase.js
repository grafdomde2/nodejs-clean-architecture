const { 
    Order 
} = require("../../entities/Order");

module.exports = dependencies => {
    const {
        ordersRepository
    } = dependencies;

    if(!ordersRepository){
        throw new Error('ordersRepository should be exists in denpendencies')
    }

    const execute = ({
        userId,
        productsIds,
        date,
        isPayed,
        meta
    }) => {
        const order = new Order({
            userId,
            productsIds,
            date,
            isPayed,
            meta
        })
        return ordersRepository.add(order);
    }
    return { 
        execute 
    };
}