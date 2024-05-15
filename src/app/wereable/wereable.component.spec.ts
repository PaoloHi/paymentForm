import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WereableComponent } from './wereable.component';

describe('WereableComponent', () => {
  let component: WereableComponent;
  let fixture: ComponentFixture<WereableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WereableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WereableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
