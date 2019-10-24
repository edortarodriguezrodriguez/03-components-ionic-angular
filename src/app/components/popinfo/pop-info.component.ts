import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-popinfo',
    templateUrl: './pop-info.component.html',
    styleUrls: ['./pop-info.component.scss'],
})
export class PopInfoComponent implements OnInit {


    items = Array(40);

    constructor(private popoverCtrl: PopoverController) {
    }

    ngOnInit() {
    }

    onClickPopoverItem(item: number) {

        this.popoverCtrl.dismiss({value: item});
    }
}
