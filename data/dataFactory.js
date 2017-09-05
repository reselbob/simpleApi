'use strict';
/*
Method for delivering data to the API
 */
module.exports.getList = function getList(name) {
    let obj;
    const nm = name !=null ? name.toLowerCase() : null;
    if(!nm) return {message:'No list name defined'};
    if(name){
        obj = {};
        obj.name = nm;
        obj.list = null;
        switch (nm) {
            case 'stooges':
                obj.list = ['moe', 'larry', 'curly'];
                break;
            case 'jetsons':
                obj.list = ['george', 'jane', 'judy', 'elroy'];
                break;
            case 'flintstones':
                obj.list = ['fred', 'wilma', 'pebbles'];
                break;
            default:
                break;
        }
    }

    return obj;
}