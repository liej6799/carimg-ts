// Angular
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CarBrandComponent } from './carbrand/carbrand.component';

// Collapse Component
import { CollapseModule } from 'ngx-bootstrap/collapse';

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

// Pagination Component
import { PaginationModule } from 'ngx-bootstrap/pagination';


// Popover Component
import { PopoverModule } from 'ngx-bootstrap/popover';


// Progress Component
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';


// Tooltip Component
import { TooltipModule } from 'ngx-bootstrap/tooltip';


// navbars
import { NavbarsComponent } from './navbars/navbars.component';

// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'

import { CreateCarBrandComponent } from './carbrand/create/create-carbrand.component'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    MatTableModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  declarations: [
    NavbarsComponent,
    CarBrandComponent,
    CreateCarBrandComponent,
  ],
  entryComponents: [
    CreateCarBrandComponent
  ]
})
export class BaseModule { }
