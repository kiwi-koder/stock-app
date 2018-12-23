import { Injectable } from '@angular/core';

import * as socketIo from 'socket.io-client';

const SERVER_URL = 'https://ws-api.iextrading.com/1.0/tops';

@Injectable()
export class SocketService {
  private socket;

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
    // Listen to the channel's messages
    console.log('In');
    // Listen to the channel's messages
    this.socket.on('message', message => console.log(message));

    // Connect to the channel
    this.socket.on('connect', () => {
      console.log('Connected!');
      // Subscribe to topics (i.e. appl,fb,aig+)
      this.socket.emit('subscribe', 'snap,fb,aig+');

      // Unsubscribe from topics (i.e. aig+)
    });

    // Disconnect from the channel
    this.socket.on('disconnect', () => console.log('Disconnected.'));
  }
}
