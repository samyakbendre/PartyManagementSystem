import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailsFormComponent } from './party-details-form.component';

describe('PartyDetailsFormComponent', () => {
  let component: PartyDetailsFormComponent;
  let fixture: ComponentFixture<PartyDetailsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartyDetailsFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartyDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
