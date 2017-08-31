var mapInstance, dayObject = {};
$(function(){
	mapInstance= new Map('map');
	console.log('HIIHIHIHI', map);
});
$(document).ready(function(){

	const tripElements = [$('#hotelsDD'), $('#restaurantsDD'), $('#activitiesDD')];

	options.hotels.forEach(function(option){
		//console.log('option', option)
		tripElements[0].append(`<option value=${option.id}>${option.name}</option>`)
	})

	options.restaurants.forEach(function(option){
		tripElements[1].append(`<option value=${option.id}>${option.name}</option>`)
	})

	options.activities.forEach(function(option){
		tripElements[2].append(`<option value=${option.id}>${option.name}</option>`)
	})
})

$('#optionSelects button').click(function(e){
	var dayNum = $('.nav-tabs .active a').text();
	var selector = $(this).siblings('select').find(':selected');
	// var selected = $(selector + ' option:selected').text();
	var value = selector.val(); // returns the id
	var name = selector.text();

	var id = $(this).siblings('select').attr('id');
	console.log('ID', id)
	var sliced = id.slice(0, -2)


	var found = options[sliced].filter(function(thing){
		return thing.name == name;
	})
	console.log('found', found)
	var location = found[0].place.location
	var longitude = found[0].place.location[0]
	var latitude = found[0].place.location[1]

	$(`.${sliced}-itinerary`).append(`<li class='list-group-item ${sliced}' value=${value}>${name}<button class='btn btn-warning btn-sm pull-right'>x</button><br clear='both' />
</li>`)

  // Add the marker to the map by calling setMap()
	mapInstance.updateMarker(longitude, latitude, value, map);

	if (!dayObject['day'+dayNum]){
		dayObject['day'+dayNum] = {}
	}

	if (!(dayObject['day'+dayNum][sliced])) {
		dayObject['day'+dayNum][sliced] = []
	}

	dayObject['day'+dayNum][sliced].push({name, value, location});

});

$('#dayList').on('click','button',function(e){
	$(this).parent().remove();
	mapInstance.deleteMarker($(this).parent().val())
})

$('.nav-tabs').on('click', 'a', function(e){
	console.log(dayObject);
	var day = $(this).text();
	console.log(day);
	$('.nav-tabs .active').removeClass('active');
	$(this).parent().addClass('active');
	$('#dayList ul li').remove();
	if(dayObject['day'+day]){
		for(var e in dayObject['day'+day]){
			dayObject['day'+day][e].forEach(function(ele){
				$(`.${e}-itinerary`).append(`<li class='list-group-item ${e}' value=${ele.value}>${ele.name}<button class='btn btn-warning btn-sm pull-right'>x</button><br clear='both' />
			</li>`);
			})
		}
	}
})
