import { Component, OnInit } from '@angular/core';
import { faPaintBrush, faHome,faBullhorn,faPrint, faPlay, faEye} from '@fortawesome/free-solid-svg-icons';
import portofolio from '../../../shared/data/data.json';
import customerImage from '../../../shared/data/customerImage.json';
import { PortofolioReducedDTO, portofolioDTO } from 'src/app/shared/models/portofolio.model';
import { ActivatedRoute, Router } from '@angular/router';
import { customerImageDTO } from 'src/app/shared/models/customer.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  faPaintBrush = faPaintBrush;
  faHome = faHome;
  faPrint = faPrint;
  faBullhorn = faBullhorn
  faPlay = faPlay
  faEye = faEye;

  images : PortofolioReducedDTO[];
  customerImage: customerImageDTO[];

  constructor(private router: Router,private route: ActivatedRoute) {
    this.getData();
    this.getData();
    this.getCustomersImage();
   }

  ngOnInit(): void {
  }

  getData() {
    if(Array.isArray(portofolio)) {
      this.images = portofolio.map(x => {
        return {
          id : x.id,
          image: x.images[0],
        }
      });
    }
  }

  displayDetails(id: number) {
    this.router.navigate(['details', id], { relativeTo: this.route });
  }


  getCustomersImage() {
    if(Array.isArray(customerImage)) {
      this.customerImage = customerImage.map(x => {
        return {
          id : x.id,
          image: x.image,
        }
      });
    }
  }


}
