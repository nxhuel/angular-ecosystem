import { Injectable } from '@angular/core';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ChatMessageModel} from '../../models/chat-message-model';
import { BehaviorSubject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  
  private stompClient: any;
  private messageSubject: BehaviorSubject<ChatMessageModel[]> = new BehaviorSubject<ChatMessageModel[]>([])

  constructor(private http: HttpClient) {
    this.initConnectionSocket();
  }

  // conexion de socket
  initConnectionSocket() {
    const url = '//localhost:8080/chat-socket' // conexion tcp
    const socket = new SockJS(url);
    this.stompClient = Stomp.over(socket);
  }

  // conexion a una sala 
  joinRoom(roomId: string) {
    this.stompClient.connect({}, () => {
      this.stompClient.subscribe(`/topic/${roomId}`, (messages: any) => {
        const messageContent = JSON.parse(messages.body);

        // capturar mensajes
        console.log(messageContent); 
        const currentMessage = this.messageSubject.getValue();
        currentMessage.push(messageContent);

        this.messageSubject.next(currentMessage);
      })
    })

    this.loadMessage(roomId);
  }

  // envio de mensaje
  sendMessage(roomId: string, chatMessage: ChatMessageModel) {
    this.stompClient.send(`/app/chat/${roomId}`,  {}, JSON.stringify(chatMessage))
  }

  getMessageSubject() {
    return this.messageSubject.asObservable();
  }

  // listar msgs a traves de http
  loadMessage(roomId: string): void {
    this.http.get<any[]>(`http://localhost:8080/api/chat/${roomId}`).pipe(
      map(result=> {
        return result.map(res=> {
          return {
            from: res.userName,
            message: res.message,
            timestamp: res.timestamp
          } as ChatMessageModel
        })
      })
    ).subscribe({
      next: (chatMessage: ChatMessageModel[]) => {
        this.messageSubject.next(chatMessage);
      },
      error: (err) => {
        console.log(err)
      }
    })
  }
}
