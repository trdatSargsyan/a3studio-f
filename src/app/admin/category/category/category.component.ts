import { Component } from '@angular/core';
import categoriesData from '../../../shared/data/category.json';
import { categoryDTO } from 'src/app/shared/models/portofolio.model';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})

export class CategoryComponent {
  categoryList: typeof categoriesData;
  category: categoryDTO[];

  cols!: Column[];
  constructor() {}

  ngOnInit() {
    this.getCategories();
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'name', header: 'Name' },
  ];
  }

  getCategories() {
    if (Array.isArray(categoriesData)) {
      this.category = categoriesData.map(x => {
        return {
          id: x.id,
          name: x.name,
          text: ""
        }
      });
    }
  }

  editCategory(id: number) {

  }
  deleteCategory(id: number) {

  }

}
interface Column {
  field: string;
  header: string;
}
