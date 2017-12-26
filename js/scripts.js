var a,
	b,
	value;

a = prompt('Wstaw liczbę a:');
b = prompt('Wstaw liczbę b:');
value = (a * a) - (2 * a * b) + (b * b);

alert('Wynik zadania to: ' + value);
console.log('Wynik zadania to: ' + value);

if (value > 0) {
	alert('Liczba ' + value + ' to WYNIK DODATNI');
	console.log('Liczba ' + value + ' to WYNIK DODATNI');
} else if (value < 0) {
	alert('Liczba ' + value + ' to WYNIK UJEMNY');
	console.log('Liczba ' + value + ' to WYNIK UJEMNY');
} else if (value == 0) {
	alert('Liczba ' + value + ' to ZERO');
	console.log('Liczba ' + value + ' to ZERO');
} else {
	alert(value + ' to nie jest liczba');
	console.log(value + ' to nie jest liczba');
}