import { Quotes } from '../quotes';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  newQuotes = new Quotes ("","","");
  @Output() emitQuote = new EventEmitter<Quotes>()

  submitQuote() {
    this.emitQuote.emit(this.newQuotes)
  }



  constructor() { }

  ngOnInit(): void {
  }

}
