import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  showList: boolean = true;
  listItems: any = [];
  constructor() { }

  ngOnInit() {
    this.listItems = ['Pokémon Yellow', 'Mega Man X', 'The Legend of Zelda', 'Pac-Man', 'Super Mario World'];
    this.parseArray();    
  }

  parseArray() {
    // this.listItems.pop();
    // this.listItems.pop();
    this.listItems.splice(this.listItems - 2, 2);
  }

}
