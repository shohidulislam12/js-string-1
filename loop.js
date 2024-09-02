const mobile={
brand:"samsung",
price:25000,
colour:"black",
camera:"12mp"


}
// for (const prop in mobile){
//     console.log(prop);
//     console.log(mobile[prop]);
// }
const keys =Object.keys(mobile);
console.log(keys);
for(const key of keys){
    console.log(key, ':',key);
}