import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private data: any[] = [];
  constructor() {}

  public getData(): any[] {
    return [...this.data];
  }

  public setData(data: any) {
    this.data = [...data];
    return this.data;
  }
}
