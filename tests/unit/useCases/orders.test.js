const {
    v4: uuidv4
} = require('uuid');

const Chance = require('chance');
const chance = new Chance();

const {
    order: {
        addOrderUseCase,
        getOrderByIdUseCase,
        updateOrderByIdUseCase,
        deleteOrderByIdUseCase
    }
} = require('../../../src/useCases')





describe('Order use cases', () => {
    const testOrder = {
        id: uuidv4(),
        userId: uuidv4(),
        productsIds: [uuidv4(), uuidv4()],
        date: chance.date(),
        isPayed: false,
        meta: {
            comment: "Please delive an order to me"
        }
    }

    const mockOrdersRepo = {
        add: jest.fn(async order => ({
            ...order,
            id: uuidv4()
        }))
    }

    const dependencies = {
        ordersRepository: mockOrdersRepo
    }
    
    describe('Add order use case', () => {
        test('Order should be added', async () => {
            // Call add order
            const addedOrder = await addOrderUseCase(dependencies).execute(testOrder);

            // // Check the result
            expect(addedOrder).toBeDefined();
            expect(addedOrder.id).toBeDefined();
            expect(addedOrder.userId).toBe(testOrder.userId);
            expect(addedOrder.productsIds).toEqual(testOrder.productsIds);
            expect(addedOrder.date).toEqual(testOrder.date);
            expect(addedOrder.isPayed).toBe(testOrder.isPayed);
            expect(addedOrder.meta).toBe(testOrder.meta);

            // check the call
            const expectedOrder = mockOrdersRepo.add.mock.calls[0][0];
            expect(expectedOrder).toEqual(testOrder);
        })
    })
    describe('get by id order use case', () => {})
    describe('update order use case', () => {})
    describe('delete order use case', () => {})
})