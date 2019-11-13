import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListItem} from '../model/ListItem';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    getUser() {
        return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

    getMenuItems() {
        return this.http.get<ListItem[]>('/assets/data/menu.json');
    }

    getAlbums() {
        return this.http.get<any[]>('https://jsonplaceholder.typicode.com/albums');
    }
}
