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
        return ordersRepository.delete(order);
    }

    // const executeDeleteAll = () => {
    //     return ordersRepository.deleteAll(order);
    // }

    // return {
    //     execute,
    //     executeDeleteAll
    // };
    // Or comment the below code and uncomment the above commented code
    return {
        execute
    };
}