import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { 
  }
  
  getCategory() {
	  return this.http.get('https://opentdb.com/api_category.php');
  }
  
  
}
