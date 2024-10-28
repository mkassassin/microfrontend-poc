import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
	remoteComponent: any;
	loadRemote: boolean = false;

   constructor() {
    this.loadRemote = true;
   //  this.remoteComponent = import('microAppOne/commonComponent').then(m => m.RemoteComponent);
  }

}
