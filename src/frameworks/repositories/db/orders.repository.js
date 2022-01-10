const { 
    db: db 
} = require('../../database');

const { 
    v4: uuidv4 
} = require('uuid');

//CRUD operation here
module.exports = {
    add: async order => {
        if(!order.id){
            order.id = uuidv4();
        }
        db.orders.push(order);
        return order;
    },
    update: async order => {
        const index = db.orders.findIndex( item => item.id === order.id );
        if (index >= 0){
            db.orders[index] = order;
            //return the order under the index updated one
            return db.orders[index];
        }
        //If nothing found against the provided index id then return null
        return null;
    },
    delete: async order => {
        const index = db.orders.findIndex( item => item.id === order.id );
        if(index >= 0){
            db.orders.splice(index, 1);
            return order;
        }

        return null;
    },
    getById: async id => {
        return db.orders.find(item => item.id === id);
    }
}