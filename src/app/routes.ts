import { Routes } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent  },
    { path: 'detail/:id', component: DetailsComponent }  
];