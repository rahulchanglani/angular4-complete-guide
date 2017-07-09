import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',  // element tag
  // selector: '[app-servers]',  // attribute
  // selector: '.app-servers',  // class
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = "No server was created";
  created = false;
  serverName = "test";
  servers = ['server 01', 'server 02'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.created = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created with name " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
    // Explicit casting TS
  }

}
