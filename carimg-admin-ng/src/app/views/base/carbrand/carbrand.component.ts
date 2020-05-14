import { Component, OnInit } from '@angular/core';
import { CarbrandControllerService } from '../../../../api/api/api';
import { CarbrandWithRelations } from '../../../../api/model/models';
import { MatTableDataSource } from '@angular/material/table/table-data-source'
import { MatDialog } from '@angular/material/dialog'
import { CreateCarBrandComponent } from './create/create-carbrand.component'

@Component({
    templateUrl: 'carbrand.component.html',
})


export class CarBrandComponent implements OnInit {
    carbrands: CarbrandWithRelations[] = [];
    constructor(_carBrandService: CarbrandControllerService,
        private _dialog: MatDialog) {

        _carBrandService.carbrandControllerFind()
            .subscribe((result: CarbrandWithRelations[]) => {
                this.carbrands = result
            });


    }

    displayedColumns: string[] = ['id', 'name', 'country'];

    ngOnInit() {

    }

    createCarBrand() {
        this.showCreateOrEditCarBrandDialog();
    }

    showCreateOrEditCarBrandDialog(id?: number): void {
        let createOrEditCarBrandDialog;
        if (id === undefined || id <= 0) {
            createOrEditCarBrandDialog = this._dialog.open(CreateCarBrandComponent);
        } /*else {
            createOrEditCarBrandDialog = this._dialog.open(EditCarBrandDialogComponent, {
                data: id
            });
        }*/
    }
}
