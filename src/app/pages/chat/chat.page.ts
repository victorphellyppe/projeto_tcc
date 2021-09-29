import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ChatsService } from 'src/app/services/chats.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor(public authService: AuthService, public chatService: ChatsService ) { }

  ngOnInit() {
    this.chatService.getChatRooms().subscribe(chats => {
      console.log(chats);
    });
  }

}
