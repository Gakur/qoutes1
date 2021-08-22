import { Quote } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteWords!: string;
  quoteEditor!:string
  quoteAuthor!:string
  quoteDate!:number
  theWords!:any




  constructor() { }

  ngOnInit(): void {
  }

}
