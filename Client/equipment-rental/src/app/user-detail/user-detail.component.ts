import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class Equipment {
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

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
	equipment: Equipment = new Equipment();
	updateEquipment: Equipment = new Equipment();

  	constructor(private route: ActivatedRoute, private router: Router, private http: Http) {
  		let id = this.route.snapshot.params.id;
    	this.getEquipment(id);
    	console.log(this.equipment)
  	}

	getEquipment(id){
	    this.http.get('http://localhost:9393/equipments/' + id + '?token=' + window.localStorage.token).subscribe(response =>{
	      this.equipment = response.json()
	    }, err => {
	      if(err.status === 403){
	        this.router.navigate(['/login'])
	      } else {
	        alert("ERROR");
	      }
	    })
	  }

	patchEquipment(equipment){
    	this.http.patch('http://localhost:9393/equipments/' + this.equipment.id + '?token=' + window.localStorage.token, this.equipment).subscribe(response =>{
      	this.equipment = response.json()
      	this.router.navigate(['/userlist'])
    	}, err => {
	      	if(err.status === 403){
	        	this.router.navigate(['/login'])
	      	} else {
        		alert("ERROR");
     		}
    	})
  	}

}
