function graduates (students) {
  
  var obj = {}
 for(var i = 0; i < students.length; i++){
   
   if(!obj[students[i].class]){
     obj[students[i].class] = []
   }
  
    if(students[i].score > 75){
      var objek = {}
      objek.name = students[i].name
      objek.score = students[i].score
      obj[students[i].class].push(objek)
    }

 }
//  var objek = {}
//  for(var l = 0 ; l < arr.length; l++){
//   objek.name = arr[l][0], objek.score = arr[l][1]
 
  
  
//  }
 return obj
 

}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

/**
  { foxes: [],
    wolves: []}
 */

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}
