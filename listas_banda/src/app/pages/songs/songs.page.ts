import { Component, OnInit } from '@angular/core';
import { SongI } from 'src/app/interfaces/song';
import { SongService } from 'src/app/services/song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.page.html',
  styleUrls: ['./songs.page.scss'],
})
export class SongsPage implements OnInit {

  songs: SongI[] = [
    {
      name: "Linda enfermedad",
    },
    {
      name: "Canciones sin dueño",
    },
    {
      name: "Tan solo noches",
    }
  ]

  constructor(
    public songsService: SongService 
  ) {}

  ngOnInit() {
  }

  newSong(){

  }

  // openAlertNewTask(){
  //   let alert = this.alertCtrl.create({
  //     title: 'Crear tarea',
  //     message: 'escribe el nombre de la tarea',
  //     inputs: [
  //       {
  //         name: 'title',
  //         placeholder: 'Digitar nueva tarea.',
  //       }
  //     ],
  //     buttons: [
  //       {
  //         text: 'Crear',
  //         handler: (data)=>{ 
  //           data.completed = false;
  //           this.songsService.create(data)
  //           .then(response => {
  //             this.songs.unshift( data );
  //           })
  //           .catch( error => {
  //             console.error( error );
  //           })
  //         }
  //       }
  //     ]
  //   });
  //   alert.present();
  // }

}