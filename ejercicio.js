const array = [1, 2, 3, 4, 10, 11];

// function simpleArraySum(ar) {
//   // const initialValue=0
//   // const res = ar.reduce(
//   //     (ac,cv)=>ac+cv,initialValue
//   // )
//   let ini = 0;
//   ar.map((elem) => (ini = ini + elem));

//   return ini;
// }

function sumaNums(array) {
  let ini = 0;
  // array.forEach((element) => {
  //   ini += element;
  // });
  array.map((elem) => {
    ini = ini + elem;
  });
  console.log("ini::: ", ini);
}

// for (let index = 0; index < array.length; index++) {
//   const element = array[index];
// }
    // let ini = 0;
// return ar.reduce((acum, currentV) => acum + currentV, ini);
    
arr=[[11,2,4],[4,5,6],[10,8,-12]]
function diferencia(arr) {
  let index = 0;
  let sum1 = 0;
  let sum2 = 0;
  for (let index = 0; index < arr.length; index++) {
    sum1+= arr[0,index]
    index++
  }
  return sum1
}


// sumaNums(array);
diferencia(arr)

