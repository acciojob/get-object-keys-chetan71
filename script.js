//your JS code here. If required.
const student = {
	name : "john"	
};
function getKeys(obj) {
	let keys = Object.keys(obj);
	return keys;
};
let arr = getKeys(student);
console.log(arr);