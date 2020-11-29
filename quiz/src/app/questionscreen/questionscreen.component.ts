import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-questionscreen',
  templateUrl: './questionscreen.component.html',
  styleUrls: ['./questionscreen.component.css']
})
export class QuestionscreenComponent implements OnInit {
	userInfo = JSON.parse(localStorage.getItem('userInfo'));
	username = this.userInfo.username;
	question:any = [];
	currentQuestion = 0;
	totalQustion = 9;
	score = 0;
  constructor(private categoryData:DataService, private router:Router) { 
	
  }

  ngOnInit(): void {
  }
  
  ngAfterViewChecked(): void {
	  
  }
  
  next() {
	  
  }
  
  submit() {
	  this.router.navigate(['./result']);
  }

}