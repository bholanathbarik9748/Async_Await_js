// console.log('person1: show ticket');
// console.log('person2: show ticket');

// const promisees = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     resolve('ticket');
//   },3000)
// })

// const anypro =  promisees.then((t) => {
//   return new Promise((resolve,reject) => {
//       resolve(`${t} popCorn`)
//   })
// });

// const anypro1 =  anypro.then((t) => {
//   return new Promise((resolve,reject) => {
//       resolve(`${t} Water`)
//   })
// });

// anypro1.then((t) => {
//   console.log(t);
// })


// console.log('person4: show ticket');
// console.log('person5: show ticket');


// Async Await mode
console.log('person1: show ticket');
console.log('person2: show ticket');

const premovie = async () => {
  const promisees = new Promise((resolve,reject) => {
    setTimeout(() => {
      reject('ticket');
    },3000)
  });
  const getpop = new Promise((resolve,reject) => {resolve(` popCorn`);});
  const water = new Promise((resolve,reject) => {resolve(`Water`);});
  const coldDrink = new Promise((resolve,reject) => (resolve(`Cold Drinks`)))
  
  // let tic = await promisees;
  // let pop = await getpop; 
  // let water1 = await water;
  // let cold = await coldDrink;

  try{
    let [h1,h2,h3,h4] = await Promise.all([promisees,getpop,water,coldDrink]);
    console.log(h1 + " " + h2 + " " + h3 + " " + h4);
  }catch{
    console.log("Ooo No");
  }
}

premovie().then((m) => {
  console.log(m);
})

console.log('person4: show ticket');
console.log('person5: show ticket');
