import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsTableComponent } from './dogs-table.component';

describe('DogsTableComponent', () => {
  let component: DogsTableComponent;
  let fixture: ComponentFixture<DogsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
