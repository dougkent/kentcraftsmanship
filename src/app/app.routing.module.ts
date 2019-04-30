import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { AboutComponent } from './containers/about/about.component';
import { PortfolioComponent } from './containers/portfolio/portfolio.component';
import { MtfComponent } from './containers/mtf/mtf.component';
import { ContactComponent } from './containers/contact/contact.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'mission-trip-furniture', component: MtfComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', pathMatch: 'full', redirectTo: '' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }