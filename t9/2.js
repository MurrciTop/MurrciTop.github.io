const arr_1 = [ 2, 3, 1, 8, 3, 8, 9, 4, 1, 2];

const arr_2 = [];

for( i = 0; i < arr_1.length; i++ ){
	const num = arr_1[i];
	
	if( arr_2.indexOf( num ) === -1 ){
		arr_2.push( num )
	}
	
}

arr_2.sort();
arr_2.reverse();
console.log(arr_1)
console.log(arr_2)