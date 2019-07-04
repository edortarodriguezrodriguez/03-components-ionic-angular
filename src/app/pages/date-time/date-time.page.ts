import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNac: string = new Date('2019-08-04').toISOString();
  customPickerOptions;
  customDate: Date = new Date('2019-08-04');
  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log(event);
          this.customDate = new Date('2019-08-04');
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };

  }
}
