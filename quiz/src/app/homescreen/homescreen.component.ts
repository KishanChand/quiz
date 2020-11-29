import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  constructor(private categoryData:DataService, private router:Router) { 
	
  }

  ngOnInit(): void {
	
  }
  
  loginForm = new FormGroup({
	username: new FormControl('', [Validators.required, Validators.minLength(3)]),
	category: new FormControl('', [Validators.required])
  });
  
  get username(){return this.loginForm.get('username')}
  get category(){return this.loginForm.get('category')}
  
  userLogin() {
	  localStorage.setItem('userInfo', JSON.stringify(this.loginForm.value));
	  this.router.navigate(['./questions']);
  }
  
}
