import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';
import { fromFetch } from 'rxjs/fetch';
import { CommonModule } from '@angular/common';

import { Router, RouterModule } from '@angular/router';

import { DataService } from './services/data.service';
import { SpinnerService } from './services/spinner.service';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {
  GridModule,
  PlaceholderModule,
  UtilitiesModule,
} from '@coreui/angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,

  imports: [
    CommonModule,
    RouterModule,
    SpinnerComponent,
    PlaceholderModule,
    GridModule,
    UtilitiesModule,
  ],
})
export class AppComponent implements OnInit {
  private BASE_URL: string = 'https://jsonplaceholder.typicode.com/';
  public BASE_CATEGORY_URL: string[] = [
    'posts',
    'comments',
    'albums',
    'photos',
    'todos',
    'users',
  ];

  constructor(
    private dataService: DataService,
    private router: Router,
    private spinner: SpinnerService
  ) {}
  ngOnInit(): void {}

  public eventHandler(url: string): void {
    fromFetch(this.BASE_URL + url)
      .pipe(
        switchMap((response) => {
          this.spinner.show();

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log(response);

          return response.json();
        })
      )
      .subscribe(
        (data) => {
          setTimeout(() => {
            this.dataService.setData(data);
            console.log('All data:', data);
            this.spinner.hide();
          }, 1000);
        },
        (error) => {
          console.error('Error fetching data:', error);
        }
      );
  }
}

// ! practice part

//   const categoryUrls = ['/films', '/people', '/planets'];
//   forkJoin(
//     categoryUrls.map((url) =>
//       fromFetch(`https://swapi.dev/api${url}`).pipe(
//         switchMap((response) => response.json())
//       )
//     )
//   ).subscribe((data) => {
//     this.categories = data;
//     console.log('All data:', this.categories);
//   });
