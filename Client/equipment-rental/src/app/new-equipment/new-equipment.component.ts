import { Component } from '@angular/core';
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

// document.getElementById("user_id").innerHTML = localStorage.getItem("user_id");

@Component({
  selector: 'app-new-equipment',
  templateUrl: './new-equipment.component.html',
  styleUrls: ['./new-equipment.component.css']
})
export class NewEquipmentComponent {
	equipment: Equipment[] = [];
	newEquipment: Equipment = new Equipment();

  	constructor(private http: Http, private router: Router) {
  		this.newEquipment.user_id = +localStorage.getItem('user_id')
  		console.log(this.newEquipment.user_id)
  	}

  	createNew(){
	    this.http.post('http://localhost:9393/equipments', this.newEquipment).subscribe(response => {
	      this.router.navigate(['/userlist'])
	    })
	}

}
