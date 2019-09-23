import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { CommonService } from '../../core/services/common.service';
import { Router } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {
  prodData: any;
  categID: string;
  filteredProdData: any;
  selectedItem: any;
  pageLoad: boolean = false;
  categName: string;
  constructor(private common: CommonService,
    private cd: ChangeDetectorRef,
    private router: Router, ) { }

  ngOnInit() {
    this.fetchItems();
    setTimeout(() => { this.categChange() }, 3000);
  }

  fetchItems() {
    this.common.getItems().subscribe(value => {
      this.prodData = value['data'];
    });
  }

  categChange() {
    this.common.catID.subscribe(value => {
      this.categID = value;
      this.filterProducts(this.categID);
    });

    this.common.catName.subscribe(value => {
      this.categName = value;
    });
  }

  filterProducts(cid) {
    this.filteredProdData = this.prodData.filter(data => data.category_id == cid);
  }

  selectItem(data) {
    this.pageLoad = true;
    this.common.selectedItem = data.id;
    this.common.getItemsDetails(data.id).subscribe(value => {
      this.router.navigate(['/detail'], { queryParams: { id: data.id } });
    });
  }
}

