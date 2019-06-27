import { Component, OnInit } from '@angular/core';
import { ListItem } from '../../model/ListItem';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: ListItem[] = [new ListItem('american-football', 'Action Sheet', '/tab-sheet'),
  new ListItem('appstore', 'Alert', '/alert')];

  constructor() { }

  ngOnInit() {
  }

}
