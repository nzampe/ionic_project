import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.page.html',
  styleUrls: ['./lists.page.scss'],
})
export class ListsPage implements OnInit {

  lists: List[] = [
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

interface List {
  name: string,
  redirectTo: string
}
