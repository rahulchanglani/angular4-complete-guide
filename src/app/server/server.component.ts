import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .nginx {
      color: white
    }
  `]
})
export class ServerComponent implements OnInit {

  serverId: number = 111;
  serverName: string = 'NGINX';

  constructor() { 
    this.serverName = Math.random() > 0.5 ? 'NGINX' : 'APACHE';
   }

  ngOnInit() {
  }

  
  getServerStatus() {
    return 'Running'; // 'Not running'
  }

  getColor() {
    return this.serverName == 'NGINX' ? 'green' : 'yellow';
  }

}
