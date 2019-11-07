import { Component, OnInit } from '@angular/core';
import { ListI } from 'src/app/interfaces/list';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists: ListI[] = [
    {
      name: 'Teatro 2018',
      redirectTo: '/'
    },
    {
      name: 'Teatro 2019',
      redirectTo: '/'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}