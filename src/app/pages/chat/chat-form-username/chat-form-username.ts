import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-chat-form-username',
  imports: [ReactiveFormsModule],
  templateUrl: './chat-form-username.html',
  styleUrl: './chat-form-username.css',
})
export class ChatFormUsername implements OnInit {
  form: FormGroup;
  username!: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      username: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.username = this.route.snapshot.paramMap.get('username')!;
    if (this.username) {
      console.log('Usuario en el chat:', this.username);
    }
  }

  sendUsername() {
    const username = this.form.value.username;
    if (!username) return;

    localStorage.setItem('username', username);
    this.router.navigate(['/chat', username]);
  }
}
