import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  components: Componente[] = [
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

interface Componente {
  name: string,
  redirectTo: string
}
