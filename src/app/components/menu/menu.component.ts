import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListItem } from '../../model/ListItem';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<ListItem[]>;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    this.componentes = this.dataService.getMenuItems();
  }

}
