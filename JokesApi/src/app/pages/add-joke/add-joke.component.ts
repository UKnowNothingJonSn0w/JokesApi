import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagesService } from '../pages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-joke',
  templateUrl: './add-joke.component.html',
  styleUrls: ['./add-joke.component.css']
})
export class AddJokeComponent {
  public categories: any = [];
  public isloading = true;
  addJokeForm!: FormGroup;
  get addJokeF() { return this.addJokeForm.controls; }

  constructor( 
    private formBuilder: FormBuilder,
    private PagesService: PagesService,
    private router: Router,

    ) { }

    ngOnInit(): void {
      this.addJokeForm = this.formBuilder.group({
        category: ['', Validators.required],
        content: ['', Validators.required],
      });
      this.isloading = false;
      this.loadCategories()
    }
    addJoke()
    {
      if (this.addJokeForm.invalid) {
        return;
      } else {
        const json_data = {
          category: this.addJokeF['category'].value,
          content: this.addJokeF['content'].value,
        }
        this.PagesService.AddJoke(json_data).subscribe(response => {
           {
            this.router.navigate(['../home']);
          }
        })
      }
    }
    loadCategories(){
      this.PagesService.LoadCategories().subscribe(response => {
        this.categories = response
        console.log(response)
    })
    }
}
