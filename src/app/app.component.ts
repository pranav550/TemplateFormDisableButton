import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateFormDisable';
  model: any = {};

  onSubmit({ value, valid }) {
    
    console.log( value, valid );
    
  }
}
