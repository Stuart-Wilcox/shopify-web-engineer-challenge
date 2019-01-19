import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {
  data: Data[];

  constructor(private http: HttpClient) {
    this.data = [];
  }

  async getDataFromServer(): Promise<Data[]> {
    return await this.http.get<Data[]>(`https://secure.toronto.ca/cc_sr_v1/data/swm_waste_wizard_APR?limit=1000`).toPromise();
  }

  async getDataFromCache(): Promise<Data[]> {
    let timestamp = parseInt(window.localStorage.getItem('DataTimestamp'));

    // timestamp is more than 1h old, then replace
    if(isNaN(timestamp) || timestamp + 1000*60*60 > new Date().getTime()){
      // send nothing, since expired
      return null;
    } else {
      // read from the cache, if possible
      return JSON.parse(window.localStorage.getItem('Data'));
    }
  }

  async getData(): Promise<Data[]> {
    if(this.data !== null && this.data.length > 0){
      return this.data;
    }

    let data = await this.getDataFromCache();

    if(data !== null){
      this.data = data;
      return data;
    } else {
      data = await this.getDataFromServer();
      this.updateCache(data);
      this.data = data;
      return data;
    }
  }

  updateCache(data: Data[]): void {
    let timestamp = new Date().getTime();
    window.localStorage.setItem('DataTimestamp', `${timestamp}`);
    window.localStorage.setItem('Data', JSON.stringify(data));
  }

  search(query: string): Data[] {
    return this.data.filter(dataPoint => {
      return dataPoint.keywords.split(', ').some(keyword => keyword.toUpperCase().includes(query.toUpperCase()));
    });
  }
}
