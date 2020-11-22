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
	categoryOptions:any = [];
  constructor(private categoryData:DataService) { 
	this.categoryData.getCategory().subscribe(result => {
		console.log(result.trivia_categories, '++');
		this.categoryOptions = result.trivia_categories;
	})
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
	  console.log(this.loginForm.value, 'this category');
	  //this.router.navigate(['./questions']);
  }
  
}
