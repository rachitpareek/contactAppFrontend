import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcontactsComponent } from './testcontacts.component';

describe('TestcontactsComponent', () => {
  let component: TestcontactsComponent;
  let fixture: ComponentFixture<TestcontactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcontactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
