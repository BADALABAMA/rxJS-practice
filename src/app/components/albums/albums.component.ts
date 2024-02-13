import { Component } from '@angular/core';
import { IAlbums } from '../../interface/IAlbums';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css',
})
export class AlbumsComponent {
  constructor(public dataService: DataService) {}
}
