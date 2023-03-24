import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlteradorComponent } from './alterador.component';

describe('AlteradorComponent', () => {
  let component: AlteradorComponent;
  let fixture: ComponentFixture<AlteradorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlteradorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlteradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
