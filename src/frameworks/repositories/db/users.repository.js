const { 
    db: db 
} = require('../../database');

const { 
    v4: uuidv4 
} = require('uuid');

//CRUD operation here
module.exports = {
    add: async user => {
        if(!user.id){
            user.id = uuidv4();
        }
        db.users.push(user);
        return user;
    },
    update: async user => {
        const index = db.users.findIndex( item => item.id === user.id );
        if (index >= 0){
            db.users[index] = user;
            //return the user under the index updated one
            return db.users[index];
        }
        //If nothing found against the provided index id then return null
        return null;
    },
    delete: async user => {
        const index = db.users.findIndex( item => item.id === user.id );
        if(index >= 0){
            db.users.splice(index, 1);
            return user;
        }

        return null;
    },
    getById: async id => {
        return db.users.find(item => item.id === id);
    }
}