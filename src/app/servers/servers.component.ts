import { Component, ElementRef, ViewChild } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {

  @ViewChild('severIdInput') serverIdInput: ElementRef;

  public serversElements = [{id:1, name:'Test Custom Binding', status:'Online'}]

  allowNewServer = false
  serverId = 0
  serverStatus: string = 'No Server is added'
  serverName = ''
  serverCreated: boolean = false
  servStatus = ''

  constructor(private serversService : ServersService) {
    setTimeout(() => {this.allowNewServer = true}, 2000 )
  }

  onCreateServer() {
    this.serverStatus = 'Server is added'
    this.serverCreated = true
    this.serversService.getServers().push({
      id: Number(this.serverIdInput.nativeElement.value),
      name: this.serverName,
      status:this.servStatus
    })
  }

  OnUpdateServerName(event: Event) {
    this.serverName =  (<HTMLInputElement>event.target).value;
  }

  lockedObject(event: Event) {
    console.log(event);
    console.log('Locked event raised..')
  }
}