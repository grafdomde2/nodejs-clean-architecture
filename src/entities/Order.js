module.exports.Order = class {
    constructor({
        id,
        userId = null,
        productsIds = [],
        date = new Date(),
        isPayed = false,
        meta = {}
    }){
        this.id = id;
        this.userId = userId;
        this.productsIds = productsIds;
        this.date = date;
        this.isPayed = isPayed;
        this.meta = meta;
    }
}