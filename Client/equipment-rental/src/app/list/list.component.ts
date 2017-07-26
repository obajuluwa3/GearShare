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

class Rental{
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

  equipments: Equipment[] = [];
  constructor(private http: Http, private router: Router) {
  	this.getEquipments();
  }

  getEquipments(){
  	this.http.get('http://localhost:9393/equipments/').subscribe(response =>
      this.equipments = response.json()
    )
  }

}
