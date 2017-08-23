$(document).ready(function(){
	$(function(){
	  var map = new Map('map');
	});

	const tripElements = [$('#hotelDD'), $('#restaurantDD'), $('#activityDD')];
	
	options.hotels.forEach(function(option){
		console.log(option);
		tripElements[0].append(`<option value=${option.id}>${option.name}</option>`)
	})

	options.restaurants.forEach(function(option){
		console.log(option);
		tripElements[1].append(`<option value=${option.id}>${option.name}</option>`)
	})

	options.activities.forEach(function(option){
		console.log(option);
		tripElements[2].append(`<option value=${option.id}>${option.name}</option>`)
	})
})

$('#optionSelects button').click(function(e){
	console.log($(this).siblings('select'));
});