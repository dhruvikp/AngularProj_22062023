import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { ServersService } from 'src/app/servers.service';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerListComponent implements OnInit {
  @Output()
  public lockEvent = new EventEmitter<string>();

  @Input('srv')
  public servers : {id: number, name: string, status: string}[]

  constructor(private serversService: ServersService) {}
  ngOnInit(): void {
    this.servers = this.serversService.getServers()
  }

  getColor(status: string) {
    return status==='Online' ? 'green': 'red';
  }

  lock() {
    this.lockEvent.emit('Child01');
  }

}
