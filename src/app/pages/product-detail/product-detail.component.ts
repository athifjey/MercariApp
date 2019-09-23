import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SWIPER_CONFIG, SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { CommonService } from '../../core/services/common.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  
})
export class ProductDetailComponent implements OnInit {
  
  prodDetail: any;

  public LIVE_NEWS: SwiperConfigInterface = {
    a11y: true,
    direction: 'vertical',
    slidesPerView: 3,
    slidesPerGroup: 3,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    keyboard: false,
    mousewheel: false,
    scrollbar: false,
    navigation: {
      nextEl: '#btn-Left',
      prevEl: '#btn-Right',
    },

    pagination: {
      el: '.cardSwiper-pagination',
      type: 'bullets',
      clickable: true
    },
    spaceBetween: 16,
    allowTouchMove: true,
    watchOverflow: true,
    loopFillGroupWithBlank: true,
    breakpoints: {
      599: {
        direction: 'horizontal',
        slidesPerView: 1,
        allowTouchMove: true,
        loopFillGroupWithBlank: true,
        slidesPerGroup: 1,
        watchSlidesVisibility: true,
        navigation: false
      },
      959: {
        direction: 'horizontal',
        slidesPerView: 2,
        allowTouchMove: true,
        loopFillGroupWithBlank: true,
        slidesPerGroup: 2,
        watchSlidesVisibility: true,
        spaceBetween: 5,
      },
      1199: {
        slidesPerView: 3,
        allowTouchMove: false,
        loopFillGroupWithBlank: true,
        slidesPerGroup: 3,
        watchSlidesVisibility: true
      }
    }
  };

  public pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  prodID: any;
  liveNews: any = {};
  newsData: any;
  yen: string = '¥';


  constructor(private common: CommonService,
    private cd: ChangeDetectorRef,
    private route: ActivatedRoute
  ) { 
    this.route.queryParams.subscribe(params => {
      this.prodID = params['id'];
  });
  }

  ngOnInit() {
    this.fetchItemDetails();
    this.fetchLiveNews();
  }

  fetchItemDetails(){
    this.prodID = this.prodID ? this.prodID : this.common.selectedItem; 
    this.common.getItemsDetails(this.prodID).subscribe(value => {
      this.prodDetail = value;
    });    
  }

  fetchLiveNews(){
    this.common.getLiveNews().subscribe(value => {
      this.liveNews = value;
      this.newsData = value['articles'];
    });
  }
}
