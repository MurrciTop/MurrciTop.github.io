const monthName = prompt('Календар для місяця - ');

const month = document.getElementById('month');
const monthText = document.getElementById('monthName');
monthText.innerText = `Календар для ${monthName}`;

let days = ``;

let month_days = 0;

if( monthName == 'Січня ' || monthName == 'Березня' || monthName == 'Травня' || 		monthName == 'Липня' || monthName == 'Серпня' || monthName == 'Жовтня' ||		 		monthName == 'Грудня' ){
	
	month_days = 31;
} else if( monthName == 'Квітня' || monthName == 'Червня' || monthName == 'Вересня' || 		monthName == 'Листопада'){
	
	month_days = 30;
} else if( monthName == 'Лютого'){
	
	month_days = 28;
}

for( i=1; i < month_days + 1; i++ ){
	
	if( i % 7 == 0 || (i + 1) % 7 == 0 ){
		days += `<div class="day free">${i} <br> ${monthName}</div>`;
	}else{
		days += `<div class="day">${i} <br> ${monthName}</div>`;
	}
	
}

month.innerHTML = days;