import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../core/services/chat/chat-service';
import { ChatMessageModel } from '../../../core/models/chat-message-model';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-chat-main',
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './chat-main.html',
  styleUrl: './chat-main.css'
})
export class ChatMain implements OnInit{

  messageInput: string = '';
  userId: string = "";
  timestamp: string = "";
  messageList: any[] = [];

  constructor(private chatService: ChatService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params["userId"];
    this.chatService.joinRoom("ABC");
    this.lisenerMessage();
  }

  sendMessage() {
    const chatMessage = {
      from: this.userId,
      message: this.messageInput,
      timestamp: this.timestamp
    } as ChatMessageModel
    this.chatService.sendMessage("ABC", chatMessage);
    this.messageInput = '';
  }

  lisenerMessage() {
    this.chatService.getMessageSubject().subscribe((messages: any) => {
      this.messageList = messages.map((item: any) => ({
        ...item,
        message_side: item.from === this.userId ? 'sender': 'receiver'
      }))
    });
  }
}
