import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { MtfComponent } from './components/mtf/mtf.component';
import { ContactComponent } from './components/contact/contact.component';

const routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'mission-trip-furniture', component: MtfComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'home', pathMatch: 'full', redirectTo: '' },
  ]

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}