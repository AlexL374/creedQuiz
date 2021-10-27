import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { PrayerQuizComponent } from './prayer-quiz/prayer-quiz.component';

const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "prayer", component: PrayerQuizComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
