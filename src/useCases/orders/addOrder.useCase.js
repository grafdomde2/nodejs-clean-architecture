const {
    isEmpty
} = require('lodash');

const { 
    Order 
} = require("../../entities/Order");
const { 
    ResponseError, 
    ValidationError 
} = require('../../frameworks/common');

module.exports = dependencies => {
    const {
        ordersRepository,
        useCases: {
            user: {
                getUserByIdUseCase
            },
            product: {
                getProductByIdUseCase
            }
        }
    } = dependencies;

    if(!ordersRepository){
        throw new Error('ordersRepository should be exists in denpendencies')
    }

    if(!getUserByIdUseCase){
        throw new Error('getUserByIdUseCase should be exists in denpendencies')
    }

    if(!getProductByIdUseCase){
        throw new Error('getProductByIdUseCase should be exists in denpendencies')
    }

    // Initialization of useCases
    // Get instance of the below functions function
    const getUserById = getUserByIdUseCase(dependencies).execute;
    const getProductById = getProductByIdUseCase(dependencies).execute;

    //This function will receive an "order"
    const getValidationErrors = async ({
        order = {}
    }) => {
        const returnable = [];

        // make the validations
        const { 
            productsIds = [],
            userId 
        } = order;
        
        const products = await Promise.all(productsIds.map(id => getProductById({
            id
        })));

        // acc: accumulator
        // product: product
        // i: index
        const notFoundIds = products.reduce((acc, product, i) => {
            if(!product){
                acc.push(productsIds[i]);
            }
            return acc;
        }, []);
        
        if(!isEmpty(notFoundIds)){
            returnable.push(new ValidationError({
                field: 'productsIds',
                msg: `No products with ids ${notFoundIds.join(', ')}`
            }))
        }

        const user = await getUserById({ id: userId });
        if(!user){
            returnable.push(new ValidationError({
                field: 'userId',
                msg: `No user with id ${userId}`
            }))
        }

        return returnable;
    }

    const execute = async ({
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

        const validationErrors = await getValidationErrors({
            order
        });
        
        if(!isEmpty(validationErrors)){
            return Promise.reject(new ResponseError({
                status: 403,
                msg: 'Validation Errors',
                reason: 'Sombody sent bad data',
                validationErrors
            }))
        }

        return ordersRepository.add(order);
    }
    return { 
        execute 
    };
}