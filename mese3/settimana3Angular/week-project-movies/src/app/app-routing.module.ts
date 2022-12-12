import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { MostPopularComponent } from './most-popular/most-popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { MoviesComponent } from './movies/movies.component';
import { UserComponent } from './user/user.component';

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
    path: 'home',
    component: HomepageComponent,
    children: [
      {
        path: 'movies',
        component: MoviesComponent,
      },
      {
        path: 'most-popular',
        component: MostPopularComponent
      },
      {
        path: 'top-rated',
        component: TopRatedComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ]
  },
  { path: '**', redirectTo: 'AppComponent' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
