'use strict';

module.exports.getList = function getList(name) {
    let obj;
    const nm = name !=null ? name.toLowerCase() : null;
    if(!nm) return {message:'No list name defined'};
    if(name){
        switch (nm) {
            case 'stooges':
                obj = {stooges: ['moe', 'larry', 'curly']};
                break;
            case 'jetsons':
                obj = {jetsons: ['george', 'jane', 'judy', 'elroy']};
                break;
            case 'flintstones':
                obj = {flintstones: ['fred', 'wilma', 'pebbles']};
                break;
            default:
                obj = {listname: nm, message: 'unknown list name'}
                break;
        }
    }

    return obj;
}