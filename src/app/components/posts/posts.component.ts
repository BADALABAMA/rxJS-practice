import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  PlaceholderModule,
  GridModule,
  UtilitiesModule,
} from '@coreui/angular';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, PlaceholderModule, GridModule, UtilitiesModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  constructor(public dataService: DataService) {}
}
