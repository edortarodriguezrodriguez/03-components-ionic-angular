import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
    selector: 'app-searchbar',
    templateUrl: './searchbar.page.html',
    styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

    albums: any[];
    searchText = '';

    ngOnInit() {
        this.dataService.getAlbums().subscribe(albums => {
            console.log(albums);
            this.albums = albums;
        });
    }

    constructor(private dataService: DataService) {
    }

    search(event) {
        this.searchText = event.detail.value;
    }
}
