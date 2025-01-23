import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Elemento2Page } from './elemento2.page';

describe('Elemento2Page', () => {
  let component: Elemento2Page;
  let fixture: ComponentFixture<Elemento2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Elemento2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
