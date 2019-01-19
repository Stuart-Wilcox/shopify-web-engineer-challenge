import { Component } from '@angular/core';
import { Data } from './data';
import { DataManagerService } from './data-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  displayResults: Data[];
  favouriteResults: Data[];

  constructor(private dataManager: DataManagerService){
    this.displayResults = [];
    this.favouriteResults = [];
    this.loading = true;
  }

  ngOnInit(): void {
    this.dataManager.getData().then((data) => {
      this.favouriteResults = data.filter(dataPoint => dataPoint.isFavourite);
      this.loading = false;
    });
  }

  performSearch(query: string){
    this.displayResults = this.dataManager.search(query);
  }
}
