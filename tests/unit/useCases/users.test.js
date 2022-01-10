const {
    user: {
        addUserUseCase,
        getUserByIdUseCase,
        updateUserUseCase,
        deleteUserUseCase
    }
} = require('../../../src/useCases');

const {
    User,
    constants: {
        userConstants: {
            genders
        }
    }
} = require('../../../src/entities');

const {
    v4: uuidv4
} = require('uuid');

const Chance = require('chance');

const chance = new Chance();

describe('User use cases', () => {
    // Mock function
    const mockUserRepo = {
        add: jest.fn(async user => ({
            ...user,
            id: uuidv4()
        })),
        getById: jest.fn(async id => ({
            id,
            name: chance.name(),
            lastName: chance.last(),
            gender: genders.NOT_SPECIFIED,
            meta: {}
        })),
        update: jest.fn(async user => user),
        delete: jest.fn(async user => user)
    }

    const depencencies = {
        usersRepository: mockUserRepo
    }

    describe('Add user use case', () => {
        test('User should be added', async () => {

            // Create a user data
            const testUserData = {
                name: chance.name(),
                lastName: chance.last(),
                gender: genders.MALE,
                meta: {
                    hair: {
                        color: 'Brown'
                    }
                }
            }
            // add a user using the use case
            // const addedUser = await addUserUseCase({ pass-object-here }).execute(testUserData)
            const addedUser = await addUserUseCase(depencencies).execute(testUserData)
            
            // check the received data
            expect(addedUser).toBeDefined();
            expect(addedUser.id).toBeDefined();
            expect(addedUser.name).toBe(testUserData.name);
            expect(addedUser.lastName).toBe(testUserData.lastName);
            expect(addedUser.gender).toBe(testUserData.gender);
            expect(addedUser.meta).toEqual(testUserData.meta);


            // check that the depencencies call as expected
        });

    })

    describe('Get user use case', () => {
        test('User should be returned by Id', async () => {
            // generate a fake id
            const fakeId = uuidv4();
            // call get user by id
            const userById = await getUserByIdUseCase(depencencies).execute({
                id: fakeId
            })

            // call get user by id
            expect(userById).toBeDefined();
            expect(userById.id).toBe(fakeId);
            expect(userById.name).toBeDefined();
            expect(userById.lastName).toBeDefined();
            expect(userById.gender).toBeDefined();
            expect(userById.meta).toBeDefined();
            

            // Check the mock
            const expectedId = mockUserRepo.getById.mock.calls[0][0];
            expect(expectedId).toBe(fakeId);   

        })
    })

    describe('Update user use case', () => {
        test('User should be update', async () => {
            // Create a user data
            const testData = {
                id: uuidv4(),
                name: chance.name(),
                lastName: chance.last(),
                gender: genders.FEMALE,
                meata: {
                    education: {
                        school: 'full'
                    } 
                }
            }
            // call update a user
            const updatedUser = await updateUserUseCase(depencencies).execute({
                user: testData
            });
            // check the result
            expect(updatedUser).toEqual(testData);

            // Check the call
            const expectedUser = mockUserRepo.update.mock.calls[0][0];
            expect(expectedUser).toEqual(testData);
        })
    })


    describe('Delete user use case', () => {
        test('User should be deleted', async () => {
            // Create a test data
            const testData = {
                id: uuidv4(),
                name: chance.name(),
                lastName: chance.last(),
                gender: genders.FEMALE,
                meata: {
                    education: {
                        school: 'full'
                    } 
                }
            }

            // Call delete
            const deleteUser = await deleteUserUseCase(depencencies).execute({
                user: testData
            })
            // check the returned data
            expect(deleteUser).toEqual(testData);

            // check the call
            const expectedUser = mockUserRepo.delete.mock.calls[0][0];
            expect(expectedUser).toEqual(testData);
        })
    })
});