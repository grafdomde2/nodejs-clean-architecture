//Chance - Random generator helper for JavaScript
const Chance = require('chance');
const chance = new Chance();
const {
   usersRepository
} = require('../../../src/frameworks/repositories/db');

//Add some user entity
const {
   User,
   constants: {
      userConstants: {
         genders
      }
  }
} = require('../../../src/entities');
//Test cases
describe('Users repositories', () => {
   
   test('New user should be added and returned', async () => {});
   test('New user should be deleted', async () => {});
   test('New user should be updated', async () => {});
   
});