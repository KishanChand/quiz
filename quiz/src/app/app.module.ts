import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { QuestionscreenComponent } from './questionscreen/questionscreen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultscreenComponent } from './resultscreen/resultscreen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomescreenComponent,
    QuestionscreenComponent,
    ResultscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	ReactiveFormsModule,
	HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
