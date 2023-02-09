import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import { AddJokeComponent } from './add-joke/add-joke.component';
import { PagesService } from '../pages/pages.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgSelectModule} from "@ng-select/ng-select";
import { AllJokesComponent } from './all-jokes/all-jokes.component';


@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    AddJokeComponent,
    AllJokesComponent,
  ],

  imports: [
    ModalModule.forRoot(),
    PagesRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    NgSelectModule
  ],

  providers: [PagesService],
  bootstrap: [PagesComponent],
})
export class PagesModule {}
