import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAeronavesComponent } from './list-aeronaves.component';

describe('ListAeronavesComponent', () => {
  let component: ListAeronavesComponent;
  let fixture: ComponentFixture<ListAeronavesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAeronavesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAeronavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
