import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessListingPageComponent } from './component/business-listing-page/business-listing-page.component';
import { NotFoundPageComponent } from './component/not-found-page/not-found-page.component';
import { BusinessDetailsPageComponent } from './component/business-details-page/business-details-page.component';

const routes: Routes = [
  { path: 'home', component: BusinessListingPageComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'business/:id', component: BusinessDetailsPageComponent },
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
