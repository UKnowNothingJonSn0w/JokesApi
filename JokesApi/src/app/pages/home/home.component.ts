import { Component, OnInit, VERSION } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public randomValue:any;
  public jokes: any = [];
  isLoading = true
  constructor(
    private PagesService: PagesService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {

   this.PagesService.LoadJokes().subscribe(response => {
     console.log(response)
    this.jokes = response
     var randomValue = this.jokes[Math.floor(Math.random() * this.jokes.length)];
    this.randomValue = randomValue
    this.isLoading = false
   })
  };
next(){
  this.ngOnInit();
}

}