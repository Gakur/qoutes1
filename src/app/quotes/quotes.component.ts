import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes("John Paul", "Liverpool FC", "You will never walk alone"),
    new Quotes("Lupita", "Black Panther", "Wakanda Forever")
  ]
  preNum!: number
  lastNum!: number
  counter!: number

  addQuote(emittedQuote: Quotes) {
    this.quotes.push(emittedQuote)
  }

  upvote(i: number) {
    this.quotes[i].upvotes += 1
  }
  downvote(i: number) {
    this.quotes[i].downvotes += 1
  }
  delQuote(i: number) {
    this.quotes.splice(i, 1)
  }
  highestUpvote() {
    this.preNum = 0
    this.lastNum = 0

    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if (this.lastNum > this.preNum) { this.preNum = this.lastNum }
    }
    return this.preNum
  }
  constructor() { }

  ngOnInit() {
  }

}
