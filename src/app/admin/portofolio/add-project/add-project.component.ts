import { Component, Input } from '@angular/core';
import lstCategories from '../../../shared/data/category.json';
import {
  categoryDTO,
  portofolioDTO,
} from 'src/app/shared/models/portofolio.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent {
  portfolioForm: FormGroup;
  @Input() project: portofolioDTO;
  categories: categoryDTO[];
  selectedImages: File[] = [];
  selectedCategories!: categoryDTO[];

  constructor(private formBuilder: FormBuilder) {
    this.getCategories();
  }
  ngOnInit() {
    this.portfolioForm = this.formBuilder.group({
      id: [null],
      categories: [null, Validators.required],
      name: [null, Validators.required],
      projectDate: [null, Validators.required],
      country: [null, Validators.required],
      images: [[]],
    });
  }

  onSubmit() {
    // Handle form submission
    console.log(this.portfolioForm.value);
    console.log(this.selectedImages);
  }
  getCategories(): categoryDTO[] {
    if (Array.isArray(lstCategories)) {
      return lstCategories.map((x) => {
        return {
          id: x.id,
          name: x.name,
        };
      });
    }
    return [];
  }

  onImageChange(event: any) {
    const files: FileList | null = event.target.files;
    this.selectedImages = [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file: File | null = files.item(i);
        if (file) {
          this.selectedImages.push(file);
        }
      }
    }
  }


}
