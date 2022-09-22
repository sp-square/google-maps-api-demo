const cities = [
	{ name: 'Uluru', latLng: { lat: -25.344, lng: 131.031 } },
	{ name: 'Wellington', latLng: { lat: -41.2528753, lng: 174.6141737 } },
	{ name: 'Auckland', latLng: { lat: -36.859482, lng: 174.4259321 } },
];
let map;
let centerPoint = cities[1];
let markerPosition = cities[2];

// Initialize and add the map
function initMap() {
	// The location of Wellington
	// The map, centered at Wellington
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 6,
		center: centerPoint.latLng, // map center
	});

	// The marker, positioned at Wellington
	const image =
		'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';

	const beachMarker = new google.maps.Marker({
		position: markerPosition.latLng,
		map: map,
		// label: markerPosition.name,
		icon: image,
	});
}

// function addMarkerOnClick() {
// 	const marker = new google.maps.Marker({
// 		position: markerPosition,
// 		map: map,
// 	});
// }

window.initMap = initMap;
