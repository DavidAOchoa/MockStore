import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { BuyNowComponent } from './pages/buy-now/buy-now.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'buy-now', component:BuyNowComponent},
  {path:'about', component:AboutComponent},
  {path:'contact', component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
