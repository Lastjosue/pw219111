const app = new Vue({
	el: "#app",
	data: {
		titulo: 'Hola mundo con VUE',
		frutas: ['manzanas','platano','peras','mango'],
		frutas2: [
			{nombre:'manzana', cantidad: 10},
			{nombre:'platano', cantidad: 0},
			{nombre:'peras', cantidad: 20},
			{nombre:'mango', cantidad: 80}
		]
	}
});