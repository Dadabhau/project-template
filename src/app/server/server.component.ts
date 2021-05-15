import {Component} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']

})
export class ServerComponent {
  // String Interpolation
  serverId:number = 10;
  serverStatus:string = "Offline";

  getServerStatus(){
    return this.serverStatus;
  }
  allowNewServer = false;
  // Event Binding
  serverCreationStatus = "NO Server was created!";

  //Passing and Using Data with Event Binding
  serverName = "";


  //Two way Data Binding
  serverTitle = "TWO WAY SERVER"


  //Combining all Forms of Databinding
  serverTitle2 = "twoway";
  serverCreationStatus2 = "NO Server was created!";

  constructor() {

    // Property Binding
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
   }

  ngOnInit(): void {
  }

  // Event Binding
  onCreateServer(){
    this.serverCreationStatus = "Server was created";
  }

 //Passing and Using Data with Event Binding
  onUpdateServerName(event: Event) {
  this.serverName = (<HTMLInputElement>event.target).value;
    console.log(this.serverName);
  }

  // Combining all Forms of Databinding
  onCreateServer2(){
    this.serverCreationStatus2 = "Server was created name is " + this.serverTitle2;
  }

}
