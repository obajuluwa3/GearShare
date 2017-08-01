import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	map;
	infoWindow;

  constructor() {
  	this.initMap()
  }

// Note: This example requires that you consent to location sharing when
// prompted by your browser. I  you see the error "The Geolocation service
// failed.", it means you probably did not give permission for the browser to
// locate you.
	initMap() {
	  this.map = new google.maps.Map(document.getElementById('map'), {
	    center: {lat: -34.397, lng: 150.644},
	    zoom: 6
	  });
	  this.infoWindow = new google.maps.InfoWindow;

	  // Try HTML5 geolocation.
	  if (navigator.geolocation) {
	    navigator.geolocation.getCurrentPosition(function(position) {
	      var pos = {
	        lat: position.coords.latitude,
	        lng: position.coords.longitude
	      };

	      this.infoWindow.setPosition(pos);
	      this.infoWindow.setContent('Location found.');
	      this.infoWindow.open(this.map);
	      this.map.setCenter(pos);
	    }, function() {
	      this.handleLocationError(true, this.infoWindow, this.map.getCenter());
	    });
	  } else {
	    // Browser doesn't support Geolocation
	    this.handleLocationError(false, this.infoWindow, this.map.getCenter());
	  }
	}

	handleLocationError(browserHasGeolocation, infoWindow, pos) {
	  infoWindow.setPosition(pos);
	  infoWindow.setContent(browserHasGeolocation ?
	                        'Error: The Geolocation service failed.' :
	                        'Error: Your browser doesn\'t support geolocation.');
	  infoWindow.open(this.map);
	}
}
