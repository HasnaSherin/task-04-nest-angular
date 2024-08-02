import { Routes } from '@angular/router';
import { ServicesComponent } from './pages/services/services.component';
import { HomeComponent } from './pages/home/home.component';
import { DepartmentComponent } from './pages/department/department.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:'Department',component:DepartmentComponent},
    {path:'Services',component:ServicesComponent},
    {path:'Contact',component:ContactComponent},
];
