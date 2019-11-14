import {Injectable} from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ListItem} from '../model/ListItem';
import {delay} from 'rxjs/operators';

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

    getSuperHeroes() {
        return this.http.get('/assets/data/superheroes.json').pipe(delay(2500));
    }
}
