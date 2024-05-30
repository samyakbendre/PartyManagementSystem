import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartyDetailsListComponent } from './party-details-list.component';

describe('PartyDetailsListComponent', () => {
  let component: PartyDetailsListComponent;
  let fixture: ComponentFixture<PartyDetailsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PartyDetailsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartyDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
