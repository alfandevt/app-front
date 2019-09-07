
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

// Components
import { HeaderComponent } from './component/header/header.component';
// Page
import { HomeComponent } from './page/home/home.component';

// Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { from } from 'rxjs';


const routes: Routes = [
  {path: '', component: HomeComponent },

];

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash : false}),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
