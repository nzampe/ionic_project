import { Component } from '@angular/core';
import { HomeI } from 'src/app/interfaces/home';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  components: HomeI[] = [
    {
      name: 'Listas de shows',
      redirectTo: '/lists'
    },
    {
      name: 'Canciones',
      redirectTo: '/songs'
    }
  ];

  constructor() {}

}