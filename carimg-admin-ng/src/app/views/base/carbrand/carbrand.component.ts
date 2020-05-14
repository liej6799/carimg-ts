import { Component, OnInit } from '@angular/core';
import { CarbrandControllerService } from '../../../../api/api/api';
import { CarbrandWithRelations } from '../../../../api/model/models';

@Component({
    templateUrl: 'carbrand.component.html',
})


export class CarBrandComponent {
    carbrands: CarbrandWithRelations[] = [];
    constructor(_carBrandService: CarbrandControllerService) {
        _carBrandService.carbrandControllerFind()
            .subscribe((result: CarbrandWithRelations[]) => {
                this.carbrands = result
            });
    }
}
