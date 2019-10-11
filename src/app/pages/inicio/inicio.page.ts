import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../model/ListItem';
import { MenuController } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Observable<ListItem[]>;

  constructor(private menuCtrl: MenuController, private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuItems();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
