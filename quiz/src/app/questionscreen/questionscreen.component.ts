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
	  this.categoryData.getQuestions(this.userInfo.category).subscribe(result => {
		this.question = result.results;
		this.question.forEach(function(v, i){
			var a = v.incorrect_answers;
			a.splice(Math.floor(Math.random() * 4), 0, v.correct_answer);
		});
	});
  }
  
  ngAfterViewChecked(): void {
	  if(this.currentQuestion != 0) {
		document.getElementsByClassName("question_"+(this.currentQuestion - 1))[0].classList.remove("show");  
	  }
	  document.getElementsByClassName("question_"+this.currentQuestion)[0].classList.add("show");
  }
  
  next() {
	  var currentVal;
	  currentVal = document.querySelector('input[name="radioBtn_'+this.currentQuestion+'"]:checked').value;
	  if(this.question[this.currentQuestion].correct_answer == currentVal) {
		  this.score = this.score + 1;
	  }
	  this.currentQuestion = this.currentQuestion + 1;
  }
  
  submit() {
	  localStorage.setItem('score', this.score);
	  this.router.navigate(['./result']);
  }

}