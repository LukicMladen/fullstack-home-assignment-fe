import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessDetailsPageComponent } from './component/business-details-page/business-details-page.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BusinessDetailsComponent } from './component/business-details/business-details.component';
import { BusinessListingPageComponent } from './component/business-listing-page/business-listing-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { DefaultHttpInterceptor } from './interceptor/default-http-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    BusinessDetailsPageComponent,
    BusinessDetailsComponent,
    BusinessListingPageComponent,
    NotFoundPageComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, NgbModule],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: DefaultHttpInterceptor, multi: true }],
  bootstrap: [AppComponent],
})
export class AppModule {}
