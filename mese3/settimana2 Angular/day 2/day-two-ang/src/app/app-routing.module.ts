import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostAttiviComponent } from './components/post-attivi/post-attivi.component';
import { PostInattiviComponent } from './components/post-inattivi/post-inattivi.component';

const routes: Routes = [
  {
    path:"",
    component: HomeComponent
  },
  {
    path:"active",
    component: PostAttiviComponent
  },
  {
    path:"inactive",
    component: PostInattiviComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
