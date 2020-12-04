const arr_1 = [1, 2, 3, 4];

const arr_2 = [3, 8, 1, 9, 4];

const arr_3= arr_1.slice();

for( i = 0; i < arr_2.length; i++ ){
	
	const num = arr_2[i];
	
if( arr_3.indexOf( num ) === -1){
	
	arr_3.push( num )
	
	}

}

arr_3.sort();
console.log(arr_1)
console.log(arr_2)
console.log(arr_3)