import { Component } from '@angular/core';
import lstLink from '../../shared/data/link.json';
import { linkDTO } from 'src/app/shared/models/link.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  link : typeof lstLink;
  linkes: linkDTO[];
  constructor() {}

  ngOnInit() : void {
    this.linkes = lstLink;
  }
}
