import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Data } from '../data';

@Component({
  selector: 'app-result-display',
  templateUrl: './result-display.component.html',
  styleUrls: ['./result-display.component.css']
})
export class ResultDisplayComponent implements OnInit {
  @Input() results: Data[];
  @Output() favourited = new EventEmitter<Data>();

  constructor() {
    this.results = [];
  }

  ngOnInit() {
  }

  ngOnChanges(){
  }

  decodeHTML(html){
    let text = document.createElement('textarea');
    text.innerHTML = html;
    return text.value;
  }

  setFavourite(isFavourite, index){
    this.results[index].isFavourite = isFavourite;
    this.favourited.emit(this.results[index]);
  }
}
