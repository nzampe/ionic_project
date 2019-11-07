import { Component, OnInit } from '@angular/core';
import { SongI } from 'src/app/interfaces/song';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  songs: SongI[] = [
    {
      id: 1,
      name: "Linda enfermedad"
    },
    {
      id: 2,
      name: "Canciones sin dueño"
    },
    {
      id: 3,
      name: "Tan solo noches"
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}