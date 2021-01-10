import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VCellComponent } from './v-cell.component';

describe('VCellComponent', () => {
  let component: VCellComponent;
  let fixture: ComponentFixture<VCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
