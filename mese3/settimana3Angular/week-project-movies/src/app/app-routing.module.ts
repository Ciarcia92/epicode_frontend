import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'movies',
    component: HomepageComponent,
  },

  {
    path: 'most-popular',
    component: MostPopularComponent,
  },
  {
    path: 'top-rated',
    component: TopRatedComponent,
  },
  { path: '**', redirectTo: 'AppComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
