import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';

export const routes: Routes = [
    {
        path:"profile",
        component:ProfileComponent
    },
    {
        path:"home",
        component:HomeComponent
    },
    {
        path:"products",
        component:ProductsComponent
    }
];
