import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  //Two way Data Binding
  serversTitle = "";
  serversCreationStatus = "NO Server was created!";
  allowNewServer = false;
  serversCreated = false;
  serverStatus:string = 'Offline';
  serverId:number = 10;

  serverName = ['testserver', 'testserver2'];

  constructor() {
    // Property Binding
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
   }

  ngOnInit(): void {
  }

   // Combining all Forms of Databinding
   onCreateServers(){
     this.serversCreated = true;
     this.serverName.push(this.serversTitle);
    this.serversCreationStatus = "Server was created name is " + this.serversTitle;
  }


  getServerStatus() {
    return this.serverStatus;
  }
  getColor(){
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
