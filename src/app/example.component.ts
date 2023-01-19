import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NxDatepickerComponent } from '@aposin/ng-aquila/datefield';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss'],
})
export class ExampleComponent {
  @ViewChild('endDatepicker')
  endDatepicker!: NxDatepickerComponent<Date>;

  public startDate: Date | null;
  public endDate: Date | null;
  dateFormGroup = new FormGroup({
    startDate: new FormControl(''),
    endDate: new FormControl(''),
  });

  // Date picker functions
  updateEndDatepicker() {
    this.endDate = this.startDate;
    setTimeout(() => this.endDatepicker.open());
  }
}