module.exports.User = class User {
    
    /*
    * @Params
    *   -id: mandatory
    *   -name: optional
    *   -lastName: optional
    *   -gender: optional, default value is 0
    *   -meta: optional, default value is empty object
    **/
    constructor({
        id, 
        name = null, 
        lastName = null, 
        gender = genders.NOT_SPECIFIED, 
        meta = {}
    }) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.meta = meta;
    }
}

//Objects of gender
const genders = {
    NOT_SPECIFIED: 0,
    FEMALE: 1,
    MALE: 2
}

module.exports.userConstants = {
    genders
}
