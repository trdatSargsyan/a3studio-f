import { Component, OnInit } from '@angular/core';
import lst from '../../../shared/data/category.json';
import portofolio from '../../../shared/data/data.json';
import { categoryDTO, portofolioDTO } from 'src/app/shared/models/portofolio.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.scss']
})
export class PortofolioComponent implements OnInit {
  data: typeof lst;
  portofolio : typeof portofolio;

  category: categoryDTO[];
  portofolios: portofolioDTO[];

  constructor(private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getData();
    this.getCategories();
  }

  getData() {
    if(Array.isArray(portofolio)) {
      this.portofolios = portofolio.map(x => {
        return {
          id : x.id,
          name: x.name,
          country: x.country,
          categories: x.categories,
          images: x.images,
          projectDate : x.projectDate
        }
      });
    }
  }

  getCategories() {
    if (Array.isArray(lst)) {
      this.category = lst.map(x => {
        return {
          id: x.id,
          name: x.name,
          text: ""
        }
      });
    }
  }

  displayDetails(id: number) {
    this.router.navigate(['details', id], { relativeTo: this.route });
  }

  filterByCategory(id: number) {
    if (id !== 0) {
      this.portofolios = portofolio.filter(portfolio => {
        return portfolio.categories.some(category => category.id === id);
      });
    }

    if(id == 1){
      this.getData();
    }

  }

  addProject() {
    this.router.navigate(['add-project'], { relativeTo: this.route });
  }
}
