import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleEditForm } from './article-edit-form';

describe('ArticleEditForm', () => {
  let component: ArticleEditForm;
  let fixture: ComponentFixture<ArticleEditForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleEditForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleEditForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
