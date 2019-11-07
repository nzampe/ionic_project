import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';
import { SongI } from '../interfaces/song';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  db: SQLiteObject = null;

  constructor() { }

  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS songs(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, redirectTo TEXT)';
    return this.db.executeSql(sql, []);
  }

  getAll(){
    let sql = 'SELECT * FROM songs';
    return this.db.executeSql(sql, [])
    .then(response => {
      let songs = [];
      for (let index = 0; index < response.rows.length; index++) {
        songs.push(response.rows.item(index));
      }
      return Promise.resolve(songs);
    })
    .catch(error => Promise.reject(error));
  }

  create(song: SongI){
    let sql = 'INSERT INTO songs(name, redirectTo) VALUES(?,?)';
    return this.db.executeSql(sql, [song.name]);
  }

}
