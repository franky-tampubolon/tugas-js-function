// 1. Membuat Fungsi menghitung makanan
function countMakanan(arr) {
  // tuliskan coding kamu disini
  let  count = {};
  arr.forEach(i => {
    count[i] = (count[i] || 0) +1;
  });
  return count;
}

// tidak boleh merubah soal di bawah ini
var list = [
  'Permen', 'Permen', 'Bobba', 'Burger', 'Salad', 'Bobba'
]

console.log(countMakanan(list))
// hasil yang di inginkan
// {
//     Permen: 2,
//     Bobba: 2,
//     Burger: 1,
//     Salad: 1
// }

// 2. Belanja 
/**
 * =================
 * Belanja di warung
 * =================
 *
 * [Description]
 * Ibu meminta tolong kamu untuk belanja di warung.
 * Ibu akan memberikan sejumlah uang dan satu jenis barang yang harus dibeli.
 * Warung tersebut hanya menjual:
 * 1. Wafer seharga 15000
 * 2. Bayam seharga 5000
 * 3. Indomie seharga 2000
 *
 * [Instruction]
 * Hitunglah berapa barang yang dapat dibeli dengan jumlah uang yang telah
 * diberikan dan sisa kembalian uang jika ada.
 *
 * [Example]
 * var @belanja = 'wafer'
 * var @uang = 40000
 *
 * OUTPUT
 * 'Kamu membeli 2 wafer dan memiliki kembalian sebanyak 10000'
 *
 * Karena ibu memberikan uang 40000 dan ingin membeli wafer. Maka kamu akan mendapatkan 2 wafer
 * (2 x 15000) serta memiliki kembalian 10000.
 *
 * [Asumsi]
 * - Uang akan selalu lebih besar atau sama dengan dari harga barang yang akan dibeli.
 * - Barang yang dibeli hanya wafer, bayam, atau indomie
 */

function uangBelanja(uang, belanjaan) {
  // tuliskan coding kamu disini
  const dagangan = [
    {barang : 'wafer', harga : 15000},
    {barang : 'bayam', harga : 5000},
    {barang : 'indomie', harga : 2000}
  ];

  
  let belanja;
  let kembalian = dagangan.map(function(dagang){
    if(dagang.barang === belanjaan){
      let harga = dagang.harga;
      let jumlah = Math.floor(uang / harga) ;
      let sisa = uang % harga;

      belanja = { jumlah : jumlah, sisa : sisa};
      return belanja;
    }else{
      return false;
    }
  })
  return `Kamu belanja ${belanja.jumlah} ${belanjaan} dan memiliki kembalian sebanyak ${belanja.sisa}`;

}

console.log(uangBelanja(40000, 'wafer'))
console.log(uangBelanja(40000, 'bayam'))
console.log(uangBelanja(40000, 'indomie'))

// 3. Menghilangkan data yang tidak ada isinya
function deleteUndefinedKeys(data) {
  // tuliskan coding kamu disini
  const newData = data.map(item => JSON.parse(JSON.stringify(item)));
  return newData
}


console.log(deleteUndefinedKeys([{
  name: 'Dimitri',
  address: undefined,
  email: 'dimitri@mail.com',
  age: undefined,
  gender: 'male'
},
{
  name: 'Alexei',
  address: 'Earth',
  email: undefined,
  age: 18,
  gender: 'male'
}
]));
/*
[ { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' },
  { name: 'Alexei', address: 'Earth', age: 18, gender: 'male' } ]
*/

console.log(deleteUndefinedKeys([
  {
    band: 'Ghost',
    formed: 2006,
    members: ['Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth'],
    genre: 'Heavy Metal',
    rating: undefined
  },
  {
    band: 'BABYMETAL',
    formed: undefined,
    members: ['SU-METAL', 'MOAMETAL', 'YUIMETAL'],
    genre: 'Kawaii Metal',
    rating: undefined
  },
  {
    band: 'Avatar',
    formed: 2006,
    members: undefined,
    genre: undefined,
    rating: 5
  }
]));
/*
[ { band: 'Ghost',
    formed: 2006,
    members: [ 'Papa Emeritus', 'Alpha', 'Omega', 'Water', 'Wind', 'Earth' ],
    genre: 'Heavy Metal' },
  { band: 'BABYMETAL',
    members: [ 'SU-METAL', 'MOAMETAL', 'YUIMETAL' ],
    genre: 'Kawaii Metal' },
  { band: 'Avatar', formed: 2006, rating: 5 } ]
*/
// 
console.log(deleteUndefinedKeys([]));
//   'No data'