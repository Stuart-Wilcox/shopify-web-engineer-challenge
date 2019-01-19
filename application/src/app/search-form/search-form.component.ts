import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public query: string;
  @Output() search = new EventEmitter<string>();

  constructor() {
    this.query = '';
  }

  ngOnInit() {
  }

  performSearch(){
    this.search.emit(this.query);
  }
}
