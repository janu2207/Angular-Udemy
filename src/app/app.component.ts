import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',

})
export class AppComponent {
  loadedFeature:String = 'recipe';
  onNavigate(feature :String){
    this.loadedFeature=feature;
    console.log(this.loadedFeature);
  }
}
