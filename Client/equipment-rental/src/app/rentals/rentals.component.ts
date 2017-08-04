import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';

class Rental {
	rental_id: number;
	active: boolean;
	date: string;
	cost: number;
	equip_id: number;
	equip_equip_type: string;
	equip_model: string;
	equip_brand: string;
	equip_category: string;
	equip_condition: string;
	equip_available: boolean;
	equip_img: string;
	equip_hourly_rental_price: number;
	equip_daily_rental_price: number;
	equip_description: string;
	equip_user_id: number;
	user_id: number;
	user_email: string;
	user_username: string;
	user_password_digest: string;
	user_address: string;
	user_city: string;
	user_state: string;
	user_token: string;
}

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.css']
})
export class RentalsComponent {
	rental_info: Rental[] = [];
	constructor(private http: Http, private router: Router) { 
		this.getEquipments();
	}

	getEquipments(){
	  	this.http.get('http://localhost:9393/rentals/myrentals?token=' + window.localStorage.token).subscribe(response => {
	      this.rental_info = response.json()
	      }, err => {
	      if(err.status === 403){
	        this.router.navigate(['/login'])
	      } else {
	        alert("ERROR");
	      }
	    })
	}

	logOut(){
	    window.localStorage.clear();
	    this.router.navigate(['/login'])
  	}

  	updateRental(info){
    this.http.patch('http://localhost:9393/rentals/' + info.rental.id + '?token=' + window.localStorage.token, {active: false}).subscribe(response =>{
      	this.rental_info = response.json()
      	console.log(this.rental_info)
    	}, err => {
      		if(err.status === 403){
        this.router.navigate(['/login'])
      		} else {
        alert("ERROR");
      }
    })
  }

}
