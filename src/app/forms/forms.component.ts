import { Quotes } from '../quotes';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
// export class FormsComponent implements OnInit {
//   newQuotes = new Quotes ("","","");
//   @Output() emitQuote = new EventEmitter<Quotes>()

//   submitQuote() {
//     this.emitQuote.emit(this.newQuotes)
//   }



//   constructor() { }

//   ngOnInit(): void {
//   }

// }
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quoteStr!:string
  quotePublisher!:string
  quoteAuthor!:string
  theQuote:any

  submitQuote(  ){
    this.theQuote= new Quotes(this.quotePublisher,this.quoteAuthor,this.quoteStr)
    this.quoteStr=''
    this.quoteAuthor=''
    this.quotePublisher=''
    this.emitQuote.emit(this.theQuote)
  }




  constructor() { }

  ngOnInit() {
  }

}
