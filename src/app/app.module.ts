import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SwiperModule, SWIPER_CONFIG, SwiperConfigInterface  } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductCardComponent } from './shared/product-card/product-card.component';
import { HeaderComponent } from './shared/header/header.component';
import { AngularMaterialModule } from './shared/angular-modules/angular-material.module';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ClickOutsideDirective } from './shared/directives/click-outside.directive';
import { NewsCardComponent } from './shared/news-card/news-card.component';
import { ConvertUTCPipe } from './shared/pipes/convert-utc.pipe';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    SwiperModule,
    RouterModule.forRoot([
      {
        path: '', component: ProductListComponent        
      },
      {
        path: 'detail', component: ProductDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCardComponent,
    HeaderComponent,
    ProductDetailComponent,
    ClickOutsideDirective,
    NewsCardComponent,
    ConvertUTCPipe
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
 
 
 
*/