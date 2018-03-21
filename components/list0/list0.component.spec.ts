import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { list0Component } from './list0.component';

describe('list0Component', () => {
  let component: list0Component;
  let fixture: ComponentFixture<list0Component>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ list0Component ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(list0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});