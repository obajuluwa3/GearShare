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
	user: User[] = [];
	newUser: User = new User();

  	constructor(private http: Http, private router: Router) {
  		
  	}

  	register(){
    this.http.post('http://localhost:9393/users/register', this.newUser).subscribe(response => {
      window.localStorage.setItem("token",response.json().token)
      this.router.navigate(['/list'])
    })
  }
}
