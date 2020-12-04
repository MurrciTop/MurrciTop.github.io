const arr_1 = ['Пн', 'Вт', 'Ср','Чт', 'Пт', 'Сб', 'Нд'];

const arr_2 = [ 1200, 1140, 1400, 1150, 1400, 2500, 2950];

let sum = 0

console.log(`День - Прибуток`)
for( i = 0; i < arr_2.length; i++ ){
	
	sum = sum + arr_2[i];
	
console.log(`${arr_1[i]} - ${arr_2[i]}`);

}

let max = arr_2[0];

let min = arr_2[0];

for ( i = 0; i < arr_2.length; i++ ){
	if( arr_2[i] > max ){
		max = arr_2[i];
		max_index = i;
	}
}

for ( i = 0; i < arr_2.length; i++ ){
	if( arr_2[i] < min ){
		min = arr_2[i];
		min_index = i;
	}
}
console.log(`Прибуток за тиждень - ${sum}`)

console.log(`Максимальний прибуток за тиждень - ${max} у ${arr_1[max_index]}`)

console.log(`Мінімальний прибуток за тиждень - ${min} у ${arr_1[min_index]}`)