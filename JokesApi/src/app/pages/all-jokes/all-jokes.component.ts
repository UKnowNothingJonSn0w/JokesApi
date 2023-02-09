import { Component } from '@angular/core';
import { PagesService } from '../pages.service';

@Component({
  selector: 'app-all-jokes',
  templateUrl: './all-jokes.component.html',
  styleUrls: ['./all-jokes.component.css']
})
export class AllJokesComponent {

  public jokes: any = [];

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
    })
   };
}
