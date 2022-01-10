const { 
    db: db 
} = require('../../database');

const { 
    v4: uuidv4 
} = require('uuid');

//CRUD operation here
module.exports = {
    add: async product => {
        if(!product.id){
            product.id = uuidv4();
        }
        db.products.push(product);
        return product;
    },
    update: async product => {
        const index = db.products.findIndex( item => item.id === product.id );
        if (index >= 0){
            db.products[index] = product;
            //return the product under the index updated one
            return db.products[index];
        }
        //If nothing found against the provided index id then return null
        return null;
    },
    delete: async product => {
        const index = db.products.findIndex( item => item.id === product.id );
        if(index >= 0){
            db.products.splice(index, 1);
            return product;
        }

        return null;
    },
    getById: async id => {
        return db.products.find(item => item.id === id);
    }
}