const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
if(Array.isArray(members)) {
members = members.filter(elem => typeof(elem)=='string');

if(members.length !== 0) {
let tim_name=members.map(elem => elem.trim()[0].toUpperCase()).sort().join('')
return tim_name;
} else { return false }
} else {return false;}


};
