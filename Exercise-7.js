function hapusSimbol(str) {
//   var vok = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   var hasil = ''
//   for(var i = 0; i < str.length; i++){
//       for(var j = 0; j < vok.length;j++){
//           if(str[i] === vok[j]){
//             hasil += str[i]
//           }
//       }
//   }
  return str.match(/[a-z0-9]+/gi).join('')
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100