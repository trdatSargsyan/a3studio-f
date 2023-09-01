import { Component } from '@angular/core';
import { faPaintBrush, faTv, faHome, faNewspaper, faPrint, faClock } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUSComponent {
  faPaintBrush = faPaintBrush;
  faHome = faHome;
  faTv = faTv;
  faNewspaper = faNewspaper;
  faPrint = faPrint;
  faTimes= faClock;
  constructor() {
  }
}
