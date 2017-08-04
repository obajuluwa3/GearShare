import { Component } from '@angular/core';
import {Http, Response } from '@angular/http';
import { Router } from '@angular/router';

class User {
	id: number;
	email: string;
	username: string;
	password: string;
	address: string;
	city: string;
	state: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
	newUser: User = new User();

  	constructor(private http: Http, private router: Router) {
  		
  	}

  	register(){
	    this.http.post('http://localhost:9393/users/register', this.newUser).subscribe(response => {
	      window.localStorage.setItem("token",response.json().token)
	      window.localStorage.setItem("user_id", response.json().id)
	      this.router.navigate(['/list'])
	    })
	  }
}
