import { Component, Input } from '@angular/core';
import { linkDTO } from 'src/app/shared/models/link.model';
import { portofolioDTO } from 'src/app/shared/models/portofolio.model';
import lst from '../../../shared/data/data.json';
import lstLink from '../../../shared/data/link.json';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portofolio-detail',
  templateUrl: './portofolio-detail.component.html',
  styleUrls: ['./portofolio-detail.component.scss']
})
export class PortofolioDetailComponent {
  id: number;
  //data : typeof lst;
  link : typeof lstLink;

  portofolio: portofolioDTO;
  linkes: linkDTO[]
  images : string[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);
      this.getDataById(this.id);
    });

    //this.data = lst;
    this.linkes = lstLink;
  }

  getDataById(id: number) {
    if (Array.isArray(lst)) {
      const foundPortofolio = lst.find(x => x.id === id);
      if (foundPortofolio) {
        this.portofolio = {
          id: foundPortofolio.id,
          categories: foundPortofolio.categories,
          name: foundPortofolio.name,
          projectDate: foundPortofolio.projectDate,
          country: foundPortofolio.country,
          images: foundPortofolio.images
        };
      } else {
        // Handle the case when the portofolio with the given id is not found
      }
    } else {
      // Handle the case when lst is not an array
      // This could be an error condition or different logic based on your requirements
    }
  }
}
