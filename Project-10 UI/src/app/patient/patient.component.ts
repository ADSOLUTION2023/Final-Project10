import { Component } from '@angular/core';
import { BaseCtl } from '../base.component';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
      super(locator.endpoints.USER, locator, route);
    }
}
