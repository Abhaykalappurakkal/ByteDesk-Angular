import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetsComponent } from './assets.component';

describe('AssetsComponent', () => {
  let component: AssetsComponent;
  let fixture: ComponentFixture<AssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssetsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of requests',()=>{
    expect(component.requests).toBeDefined();
    expect(component.requests.length).toBeGreaterThan(0);
  });

  it('should have an array of specific values',()=>{
    expect(component.requests).toEqual(['Open', 'Cancelled', 'Assigned', 'Returned']);
  });
});
