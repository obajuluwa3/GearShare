import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router'

class Equipment{
	id: number;
	equip_type: string;
	model: string;
	brand: string;
	category: string;
	condition: string;
	available: boolean;
	equip_img: string;
	hourly_rental_price: number;
	daily_rental_price: number;
	description: string;
	user_id: number;
}

// class All_equipment {
// 	equip_id: number;
// 	equip_equip_type: string;
// 	equip_model: string;
// 	equip_brand: string;
// 	equip_category: string;
// 	equip_condition: string;
// 	equip_available: boolean;
// 	equip_equip_img: string;
// 	equip_hourly_rental_price: number;
// 	equip_daily_rental_price: number;
// 	equip_description: string;
// 	equip_user_id: number;
// 	user_id: number;
// 	user_email: string;
// 	user_username: string;
// 	user_password_digest: string;
// 	user_address: string;
// 	user_city: string;
// 	user_state: string;
// 	user_token: string;
// 	// rentals: [];
// }


// @Component({
//   selector: 'app-list',
//   templateUrl: './list.component.html',
//   styleUrls: ['./list.component.css']
// })
// export class ListComponent {

//   all_equipments: All_equipment[] = [];
//   constructor(private http: Http, private router: Router) {
//   	this.getEquipments();
//   }

//   getEquipments(){
//   	this.http.get('http://localhost:9393/equipments').subscribe(response =>
//       this.all_equipments = response.json()
//       // console.log(response)
//     )
//     console.log(this.all_equipments)
//   }

// }

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  equipment: Equipment[] = [];
  constructor(private http: Http, private router: Router) {
  	this.getEquipments();
  }

  getEquipments(){
  	this.http.get('http://localhost:9393/equipments').subscribe(response =>
      this.equipment = response.json()
      // console.log(response)
    )
    // console.log(this.equipment)
  }

}
