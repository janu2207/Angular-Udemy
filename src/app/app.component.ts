import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent implements OnInit {
  loadedFeature:String = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAuV_W1mYOTwJLPps5d7GzS9nklfux6OBY",
      authDomain: "ng-recipe-book-7c1bb.firebaseapp.com",
    })
  }
  onNavigate(feature :String){
    this.loadedFeature=feature;
    console.log(this.loadedFeature);
  }

}
