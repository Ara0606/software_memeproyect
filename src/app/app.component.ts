import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import{ Meme } from './meme';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meme-proyect';
  public mms: Meme[]=[];
  constructor (private http:HttpClient){

  }

  onSave():void{
    this.http.get<any>("https://api.imgflip.com/get_memes").subscribe(response=>{
    this.mms=response.data.memes;
    });

    console.log('apretando')
  }
}
