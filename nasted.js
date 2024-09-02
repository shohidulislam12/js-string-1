const collage={
name:"vnc",
class:["11",'34','45'],
events:['science fair','bijoy dibosh','21 feb'],
unique:{
    colour:'blue',
    result:{
        merit:"top",
    }

}


}
// console.log(collage);
// console.log(collage.unique.colour);
console.log(collage.unique.result);
console.log(collage.unique.result.merit);
collage.unique.result.merit="fail"
console.log(collage.unique.result.merit);
console.log(collage.events[2]);