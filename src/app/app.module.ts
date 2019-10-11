import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { PersonsComponent } from './persons/persons.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProjectsComponent,
    PersonsComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
