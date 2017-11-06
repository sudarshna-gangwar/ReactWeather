var names = ['Sudarshna', 'Visi', 'Lalita'];

// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
// console.log(returnMe('Sudarshna'));

// var person = {
//   name: 'Sudarshna',
//   greet: function(){
//     names.forEach((name)  => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add(a, b){
  return a + b;
}
console.log(add(1,3));

var addStatement = (a, b) => {
  return a+b;
}
console.log(addStatement(9,0));

var addExpression = (a, b) => a + b;
console.log(addExpression(5,5));
