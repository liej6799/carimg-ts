import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';

import { CarbrandControllerService } from '../../../../../api/api/api';
@Component({
    templateUrl: 'create-carbrand.component.html',
})

export class CreateCarBrandComponent implements OnInit {

    constructor(_carBrandService: CarbrandControllerService,
        private _dialogRef: MatDialogRef<CreateCarBrandComponent>

    ) { }
    ngOnInit(): void {

    }
}