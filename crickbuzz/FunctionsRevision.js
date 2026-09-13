// function greet(){
//     console.log("hello");
// }
function cutTheBread(cb){
    setTimeout(function(){
        let bread = "cutted Bread";
        cb(bread);
    }, 2000);
}

function cb(data){
    console.log(data);
}
cutTheBread(cb);