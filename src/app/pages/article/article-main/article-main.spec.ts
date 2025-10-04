import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMain } from './article-main';

describe('ArticleMain', () => {
  let component: ArticleMain;
  let fixture: ComponentFixture<ArticleMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
