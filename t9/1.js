const arr_1 = [1, 7, 4, 0, 2, 5, 9, 1];

console.log(arr_1)

let max = arr_1[0];

let min = arr_1[0];

for ( i = 0; i < arr_1.length; i++ ){
	if( arr_1[i] > max ){
		max = arr_1[i];
	}
}

for ( i = 0; i < arr_1.length; i++ ){
	if( arr_1[i] < min ){
		min = arr_1[i];
	}
}

console.log(`MAX - ${max}`)

console.log(`MIN- ${min}`)