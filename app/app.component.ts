import { OnInit, Component } from '@angular/core';
import {AppService} from './app.service';

@Component({
  
  selector: 'my-app',
  templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
  data = 'Tibi';
  constructor(private _svc: AppService){

  }
  ngOnInit(){
    this._svc.getName().then(data => this.data = data);
  }

  clickFunction(data){
    console.log(data);
  }

}
