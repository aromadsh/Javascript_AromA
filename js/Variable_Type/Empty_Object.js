const user = {
    id : 1,
    name : 'Hong',
    get : function(obj) { return `${obj.id} : ${obj.name}`;},
    getInfo() { return `${this.id} - ${this.name}`;}
};