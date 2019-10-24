import {Component, OnInit} from '@angular/core';
import {PopoverController} from '@ionic/angular';
import {PopInfoComponent} from '../../components/popinfo/pop-info.component';

@Component({
    selector: 'app-popover',
    templateUrl: './popover.page.html',
    styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

    constructor(private popoverCtrl: PopoverController) {
    }

    ngOnInit() {
    }

    async showPopover() {
     const popover = await this.popoverCtrl.create({
         component : PopInfoComponent
     });

     await popover.present();
    }

}
