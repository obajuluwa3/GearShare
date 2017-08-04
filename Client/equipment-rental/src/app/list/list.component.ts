import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

class All_equipment {
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
	rentals: string[];
}

class Rental {
      id: number;
      active: boolean;
      rental_date: string;
      cost: number;
      user_id: number;
      equipment_id: number;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  all_equipments: All_equipment[] = [];
  newRental: Rental = new Rental();
  search = "";
  date: any = new Date();
  constructor(private http: Http, private router: Router) {
  	this.getEquipments();
  }

  getEquipments(){
  	this.http.get('http://localhost:9393/equipments?token=' + window.localStorage.token).subscribe(response =>
      {this.all_equipments = response.json()
      }, err => {
      if(err.status === 403){
        this.router.navigate(['/login'])
      } else {
        alert("ERROR");
      }
    })
  }

  searchEquip(){
    this.http.post('http://localhost:9393/equipments/search?token=' + window.localStorage.token, {equip_type: this.search}).subscribe(response =>
      {this.all_equipments = response.json()
      }, err => {
      if(err.status === 403){
        this.router.navigate(['/login'])
      } else {
        alert("ERROR");
      }
    })
  }

  createRental(price, id){
      this.http.post('http://localhost:9393/rentals/myrentals?token=' + window.localStorage.token, 
        {active: true,
         rental_date: this.date,
         cost: price,
         equipment_id: id}
        ).subscribe(response => {
        this.router.navigate(['/rentals'])
      })
    }

  logOut(){
    window.localStorage.clear();
    this.router.navigate(['/login'])
  }

}