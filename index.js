var a = 10;
var b = 5;
var kumar = a - b
console.log(kumar, typeof kumar)
// function with parameter
function print(name) {
    console.log(name);
    console.log('welcome to our webpage')
}
print("chandra")
print('power')

function print(name) {
    console.log(name, 'hii hello')
}
print('chandra')

/*function add (a,b) {
    var sum=a+b
    rewturn sum
}*/
// invoke function or calling function means code inside the function is executed when the function is invoked
var add = function (a,b) {
    var sum = a+b;
    return sum
}
var response = add(122, 222)
console.log('response is' + response);
//function expression 


   var add3 = function(m,n,o){
       var sum2 = m+n+o;
       return sum2;
   }

   var res3 = add3(4,2,1);
   console.log(res3);

