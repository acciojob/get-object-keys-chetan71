// Add to Object prototype (caution: generally not recommended)
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

const student = { name: "john" };
const arr = student.getKeys(); // Now works as a method ✅
console.log(arr); // Output: ["name"]