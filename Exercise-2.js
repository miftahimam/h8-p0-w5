function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  var hasil = []

  for(var i = 0; i < arrPenumpang.length; i++){
      var obj = {}
      obj.penumpang = arrPenumpang[i][0]
      obj.naikDari = arrPenumpang[i][1]
      obj.tujuan = arrPenumpang[i][2]
      var bayar = false
      var halte = -1
      for(var j = 0; j < rute.length; j++){
          if(rute[j] === obj.naikDari){
              bayar = true
          }
          if(bayar === true){
              halte++
          }
          if(rute[j] === obj.tujuan){
              obj.tujuan = halte * 2000
          }
      }
      hasil.push(obj)
     
  }
  return hasil
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]