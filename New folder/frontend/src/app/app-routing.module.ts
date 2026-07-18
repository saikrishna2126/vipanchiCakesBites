import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { EnquiryComponent } from './enquiry/enquiry.component';
import { MenuComponent } from './menu/menu.component';

import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'enquiry', component: EnquiryComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
