import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFormUsername } from './chat-form-username';

describe('ChatFormUsername', () => {
  let component: ChatFormUsername;
  let fixture: ComponentFixture<ChatFormUsername>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatFormUsername]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChatFormUsername);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
