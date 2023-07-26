import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.scss'],
})
export class GridExampleComponent {
  gridItems = Array(15);
}
