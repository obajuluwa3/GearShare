import { Component } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
	lat: number = 51.678418;
	lng: number = 7.809007;
	constructor() {

	}

}
