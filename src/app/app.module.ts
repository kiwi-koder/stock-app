import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SocketService } from './shared/services/socket.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [SocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
