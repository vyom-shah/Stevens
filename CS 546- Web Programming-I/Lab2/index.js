const arrayUtils = require('./arrayUtils.js');
const stringUtils= require('./stringUtils.js');
const objUtils= require('./objUtils.js');

const first = { x: 2, y: 3};
const second = { a: 2, x: 4, z: 5 };
const third = { x: 0, y: 9, q: 10 };
try{
  try {
   const headOne = arrayUtils.head([2, 3, 4]);
   console.log(headOne);
 }catch(e){
   console.error('head failed');
 }
  try {
     
     const remove = arrayUtils.remove([10,20,30],1);
     console.log(remove);

   }catch(e){
     console.error('remove failed');
   }
  try {
         
         const capitalize= stringUtils.capitalize("vyomshah");
         console.log(capitalize);

       }catch(e){
         console.error('capitalize failed');
       }
  try {
            const smush = objUtils.smush(third, first, second);
            console.log(smush);

           }catch(e){
             console.error('smush failed');
           }

} catch (e) {
   console.error(e);
}