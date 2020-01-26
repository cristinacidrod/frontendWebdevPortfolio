import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalismComponent } from './journalism.component';

describe('JournalismComponent', () => {
  let component: JournalismComponent;
  let fixture: ComponentFixture<JournalismComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JournalismComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JournalismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
