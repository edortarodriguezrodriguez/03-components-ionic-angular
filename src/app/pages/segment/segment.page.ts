import {Component, OnInit, ViewChild} from '@angular/core';
import {IonSegment} from '@ionic/angular';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-segment',
    templateUrl: './segment.page.html',
    styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

    @ViewChild(IonSegment) segment: IonSegment;
    superHeroes: Observable<any>;
    publisher = '';

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        this.superHeroes = this.dataService.getSuperHeroes();
        this.segment.value = '';
    }

    segmentChanged(event) {
        const segmentValue = event.detail.value;

        this.publisher = event.detail.value;

        console.log(segmentValue);
    }
}
