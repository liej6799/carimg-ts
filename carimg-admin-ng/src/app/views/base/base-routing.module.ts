import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { NavbarsComponent } from './navbars/navbars.component';
import { CarBrandComponent } from './carbrand/carbrand.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'carbrand'
      },
      {
        path: 'navbars',
        component: NavbarsComponent,
        data: {
          title: 'Navbars'
        }
      },
      {
        path: 'carbrand',
        component: CarBrandComponent,
        data: {
          title: 'Car Brand'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
