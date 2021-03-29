const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
if (!(arr instanceof Array)) throw "Error";
let result_arr = [];
let isImpacted = false;
for (let i = 0; i < arr.length; i++) {
switch (arr[i]) {
case '--discard-next':
if (i !== arr.length - 1) {
i++;
isImpacted = true;
}
break;
case '--discard-prev':
if (i !== 0 && !isImpacted) {
result_arr.pop();
}
break;
case '--double-next':
if (i !== arr.length - 1) {
result_arr.push(arr[i+1])
}
break;
case '--double-prev':
if (i !== 0 && !isImpacted) {
result_arr.push(arr[i-1]);
}
break;
default:
result_arr.push(arr[i]);
isImpacted = false;
}
}
return result_arr;
};
