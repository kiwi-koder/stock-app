import { Component, OnInit } from '@angular/core';
import { SocketService } from './shared/services/socket.service';
import { IEXClient } from 'iex-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'stock-app';
  constructor(private socketService: SocketService) {}
  ngOnInit(): void {
    this.socketService.initSocket();

    const appleStock = this.iex.stockPrice('AAPL').then(console.log);
  }
}
