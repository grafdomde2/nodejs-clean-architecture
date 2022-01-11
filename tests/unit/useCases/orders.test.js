const {
    v4: uuidv4
} = require('uuid');

const Chance = require('chance');
const chance = new Chance();
const {
    cloneDeep
} = require('lodash');
const {
    order: {
        addOrderUseCase,
        getOrderByIdUseCase,
        updateOrderByIdUseCase,
        deleteOrderByIdUseCase
    }
} = require('../../../src/useCases');

describe('Order use cases', () => {
    const testOrder = {
        userId: uuidv4(),
        productsIds: [uuidv4(), uuidv4()],
        date: chance.date(),
        isPayed: false,
        meta: {
            comment: 'Please delie it to me as soon as possible.'
        }
    }

    const mockOrdersRepo = {
        add: jest.fn(async order => ({ 
            ...order, 
            id: uuidv4() 
        })),
        getById: jest.fn(async id => ({
            id,
            userId: uuidv4(),
            productsIds: [uuidv4(), uuidv4()],
            date: chance.date(),
            isPayed: false,
            meta: {
                comment: 'Please delie it to me as soon as possible.'
            }
        })),
        update: jest.fn(async order => order),
        delete: jest.fn(async order => order)
    }
    const dependencies = {
        ordersRepository: mockOrdersRepo
    }
    describe('Add order use case', () => {
        test('Order should be added', async () => {

            // call add order
            const addedOrder = await addOrderUseCase(dependencies).execute(
                testOrder
            )

            // check the result
            expect(addedOrder).toBeDefined();
            expect(addedOrder.id).toBeDefined();
            expect(addedOrder.userId).toBe(testOrder.userId);
            expect(addedOrder.productsIds).toEqual(testOrder.productsIds);
            expect(addedOrder.date).toEqual(testOrder.date);
            expect(addedOrder.isPayed).toBe(testOrder.isPayed);
            expect(addedOrder.meta).toEqual(testOrder.meta);
            
            // Check the call
            const expectedOrder = mockOrdersRepo.add.mock.calls[0][0];
            expect(expectedOrder).toEqual(testOrder);
        })
    })

    describe('Get by Id order use case', () => {
        test('Order should be returned by id', async () => {
            // add a fake id
            const fakeId = uuidv4();

            // call get order by id
            const returnedOrder = await getOrderByIdUseCase(dependencies).execute({
                id: fakeId
            });

            // check the received data
            expect(returnedOrder).toBeDefined();
            expect(returnedOrder.id).toBeDefined();
            expect(returnedOrder.userId).toBeDefined();
            expect(returnedOrder.productsIds).toBeDefined();
            expect(returnedOrder.date).toBeDefined();
            expect(returnedOrder.isPayed).toBeDefined();
            expect(returnedOrder.meta).toBeDefined();

            // check the mock call
            const expectedId = mockOrdersRepo.getById.mock.calls[0][0];
            expect(expectedId).toBe(fakeId);

        })
    })

    describe('Update order use case', () => {
        
        test('Order should be updated', async () => {            
            // init an order with id
            const mockOrder = {
                ...testOrder,
                id: uuidv4()
            }

            // call update
            const updatedOrder = await updateOrderByIdUseCase(dependencies).execute({ 
                order: cloneDeep(mockOrder) 
            })

            // check the data
            expect(updatedOrder).toEqual(mockOrder);

            // check the call
            const expectedOrder = mockOrdersRepo.update.mock.calls[0][0];
            expect(expectedOrder).toEqual(mockOrder);
        })
    })

    describe('Delete order use case', () => {
        test('Order should be deleted', async () => {
            // init an order with id
            const mockOrder = {
                ...testOrder,
                id: uuidv4()
            }

            // call delete
            const deletedOrder = await deleteOrderByIdUseCase(dependencies).execute({
                order: cloneDeep(mockOrder)
            })

            // check the data
            expect(deletedOrder).toEqual(mockOrder);

            // Check the call
            const expectedOrder = mockOrdersRepo.delete.mock.calls[0][0];
            expect(expectedOrder).toEqual(mockOrder);

        })
    })
});