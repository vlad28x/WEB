//sum(a)(b) = a+b
function sum(a) {
	//LexicalEnvironment = {a: переданный аргумент}
	return function(b) {//Возвращаем новую функцию, которая возвращает сумму
		//LexicalEnvironment = {b: переданный аргумент}
		return a + b;//a будет взято из внешнего объекта переменных
	}
}

//Реализация второй функции с использованием приема проектирования «Модуль»
var MyLibrary = (function() {
	function helper(arr, func) {
		let newArray = [];
		arr.forEach(function(element) {
			if(func(element)) newArray.push(element);
		});
		return newArray;
	}
	return {
		filter : function(arr, func) {
			return helper(arr, func);
		}
	}
})();

//Функция, которая получает массив arr и возвращает новый, в который входят только те элементы arr, для которых func возвращает true
function filter(arr, func) {
	let newArray = [];//Создаем пустой массив
	arr.forEach((element) => {//Пробегаем все элементы во входном массиве и добавляем элемент в новый массив, если func возвращает true для текущего элемента
		if(func(element)) newArray.push(element);
	});
	return newArray;//Возвращаем новый массив
}