import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestByStatusComponent } from './view-request-by-status.component';

xdescribe('ViewRequestByStatusComponent', () => {
  let component: ViewRequestByStatusComponent;
  let fixture: ComponentFixture<ViewRequestByStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewRequestByStatusComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRequestByStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
