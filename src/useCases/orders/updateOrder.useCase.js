module.exports = dependencies => {
    const {
        ordersRepository
    } = dependencies;

    if(!ordersRepository){
        throw new Error('ordersRepository should be exists in denpendencies')
    }

    const execute = ({
        order
    }) => {
        return ordersRepository.update(order);
    }
    return { 
        execute 
    };
}