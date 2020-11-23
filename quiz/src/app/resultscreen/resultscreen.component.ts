import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resultscreen',
  templateUrl: './resultscreen.component.html',
  styleUrls: ['./resultscreen.component.css']
})
export class ResultscreenComponent implements OnInit {
	userInfo = JSON.parse(localStorage.getItem('userInfo'));
	username = this.userInfo.username;
	score = localStorage.getItem('score');
  constructor() { }

  ngOnInit(): void {
  }

}
