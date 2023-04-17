import { Component ,OnInit} from '@angular/core';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  public productList: any;
  // public filterCategory : any
  // searchKey:string ="";
  // constructor(private api: ApiService, private cartService: CartService) {}
  constructor(private api: ApiService) {}



  ngOnInit(): void {
      this.api.getProduct()
      .subscribe(res => {
          this.productList = res;}
      );
  }
}

