import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent} from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { BussinessComponent } from './bussiness/bussiness.component';
import { EntertaintmentComponent } from './entertaintment/entertaintment.component';
import { HealthComponent } from './health/health.component';
import { ScienceComponent } from './science/science.component';
import { SportsComponent } from './sports/sports.component';
import { TechnologyComponent } from './technology/technology.component';
import { GeneralComponent } from './general/general.component';
const routes: Routes = [
  {path:"header" ,component:HeaderComponent 
  },
  {
    path:"",component:HomeComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {path:'categories',component:CategoriesComponent},
  {path:'business',component:BussinessComponent},
  {path:'entertaintment',component:EntertaintmentComponent},
  {path:'health',component:HealthComponent},
  {path:'science',component:ScienceComponent},
  {path:'sports',component:SportsComponent},
  {path:'technology',component:TechnologyComponent},
  {path:'general',component:GeneralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
