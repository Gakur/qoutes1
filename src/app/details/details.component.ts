import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quotes!:Quotes;
  @Output() emitQuote = new EventEmitter<Quotes>();
  constructor() { }

  ngOnInit() {
  }

}
