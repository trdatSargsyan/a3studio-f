import { Component, OnInit } from '@angular/core';
import portofolio from '../../shared/data/data.json';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.scss']
})
export class PriceComponent implements OnInit {
  portofolio : typeof portofolio;
  fileContent: string = '';

  constructor() { }

  ngOnInit(): void {
   // this.getFileContent();
  }

  getFileContent() {
    // this.http.get('assets/price/logo.txt', { responseType: 'text' })
    //   .subscribe((content: string) => {
    //     this.fileContent = content;
    //     console.log(this.fileContent);
    //   });
  }


}
