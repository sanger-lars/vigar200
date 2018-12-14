// test.js+

function likes(names) {
  	// TODO
	switch(names.length) {
		case 0: return 'no one likes this';
	    case 1: return names[0] + ' likes this';
	    case 2: return names[0] +' and ' + names[1] + ' like this';
	    case 3: return names[0] +', ' + names[1] + ' and ' + names[2] + ' like this';
	    default: return names[0] +', ' + names[1] + ' and ' + (names.length - 2) + ' others like this';
	}
}

function likes2(names) {
  return {
    0: 'no one likes this',
    1: `${names[0]} likes this`, 
    2: `${names[0]} and ${names[1]} like this`, 
    3: `${names[0]}, ${names[1]} and ${names[2]} like this`, 
    4: `${names[0]}, ${names[1]} and ${names.length - 2} others like this`, 
  }[Math.min(4, names.length)]
}

console.log(likes([]));
console.log(likes(['Lars']));
console.log(likes(['Lars', 'Knud']));
console.log(likes(['Lars', 'Knud', 'Peter']));
console.log(likes(['Lars', 'Knud', 'Peter', 'Hans']));
console.log(likes(['Lars', 'Knud', 'Peter', 'Jørgen', 'Hans']));

// -------------------------------------------------------------------------------
/* // Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + 1/19 + 1/22 + 1/25 

function SeriesSum(n) {
  var t = 1 + 1/4;
  if (n <= 1) return n+".00";
  for (var i = 3; i < n+1; i++) {
  		t = t+1/(4 + ((i-2)*3));
  }
  return (Math.round(t * 100) / 100).toFixed(2);
}

function SeriesSum2(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  
  return s.toFixed(2)
}

console.log(SeriesSum(0));
console.log(SeriesSum(1));
console.log(SeriesSum(2));
console.log(SeriesSum(3));
console.log(SeriesSum(4));
console.log(SeriesSum(5));

*/
// ------------------------------------------------------------------------------
/* // return masked string
function maskify(cc) {
	var m = "";
	for (i = 0; i < cc.length-4; i++) {
		m = m + "#";
	}
	m = m + cc.slice(-4);
	return m;
}

function maskify2(cc) {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify("12345678")); */

// -------------------------------------------------------------------------------------------------
/*const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];

function comp(array1, array2){
  if (Array.isArray(array1) && Array.isArray(array2) && array1.length == array2.length) {
  	sqrt_array2 = array2.map(Math.sqrt).sort();
  	array1 = array1.sort();
  	var ok = true;
  	for (var i = array1.length - 1; i >= 0; i--) {
  		ok = (array1[i] == sqrt_array2[i]);
  		if (!ok) break;
  	}
  	return ok;
  } else return false;
}

function comp2(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

console.log(comp2(a1, a2));*/

// ----------------------------------------------------------------------------
// var array1 = [true,  true,  true,  false,
//               true,  true,  true,  true ,
//               true,  false, true,  false,
//               true,  false, false, true ,
//               true,  true,  true,  true ,
//               false, false, true,  true ];

// function countSheeps(arrayOfSheep) {
//   // TODO May the force be with you
//   var t = 0;
//   arrayOfSheep.forEach(function(sheep) {
//   	t = sheep === true ? t+1 : t;
//   })
//   return t;
// }

// function countSheeps2(arrayOfSheeps) {
//   return arrayOfSheeps.filter(Boolean).length;
// }

// console.log(countSheeps2(array1));