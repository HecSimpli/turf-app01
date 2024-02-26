import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurfingSampleComponent } from './turfing-sample.component';

describe('TurfingSampleComponent', () => {
  let component: TurfingSampleComponent;
  let fixture: ComponentFixture<TurfingSampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TurfingSampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurfingSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
