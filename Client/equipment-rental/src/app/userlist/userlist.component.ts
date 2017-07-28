import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';
import { Router } from '@angular/router';

class My_equipment {
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

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {

	my_equipments: My_equipment[] = [];
  	constructor(private http: Http, private router: Router) {
  	this.getEquipments();
  	}

  	getEquipments(){
	  	this.http.get('http://localhost:9393/equipments?token=' + window.localStorage.token).subscribe(response => {
	      // {this.my_equipments = response.json()
	      	console.log(response.json()[0].equipment.user_id, +window.localStorage.user_id)
	      	for (let item of response.json()) {
	      		console.log(item.equipment.user_id)
                if (item.equipment.user_id == +window.localStorage.user_id) {
                    this.my_equipments.push(item)
                }
            }
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

  goToEquipment(info){
    this.router.navigate(['/equipments/', info.equipment.id])
  }

  deleteEquipment(info){
    this.http.delete('http://localhost:9393/equipments/' + info.equipment.id + '?token' + window.localStorage.token).subscribe(response =>{
      this.my_equipments = response.json()
    }, err => {
      if(err.status === 403){
        this.router.navigate(['/login'])
      } else {
        alert("ERROR");
      }
    })
  }
}