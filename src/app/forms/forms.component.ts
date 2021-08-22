import { Quote } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @Output() emitQuote = new EventEmitter()
  quoteWords!: string;
  quoteEditor!: string
  quoteAuthor!: string
  quoteDate!: number
  theWords!: any

  submitQuote() {
    this.theWords = new Quote(this.quoteEditor, this.quoteAuthor, this.quoteWords)
    this.quoteWords = ''
    this.quoteAuthor = ''
    this.quoteEditor = ''
    this.emitQuote.emit(this.theWords)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
