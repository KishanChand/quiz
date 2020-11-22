import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { QuestionscreenComponent } from './questionscreen/questionscreen.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomescreenComponent
	},
	{
		path: 'questions',
		component: QuestionscreenComponent
	},
	{
		path: '**',
		component: HomescreenComponent
	}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
	RouterModule
  ]
})
export class AppRoutingModule { }
