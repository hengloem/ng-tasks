import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonsComponent } from './persons/persons.component';
import { AboutComponent } from './about/about.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'persons',
    component: PersonsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
