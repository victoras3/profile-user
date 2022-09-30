import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleMatTableComponent } from './simple-mat-table.component';

describe('SimpleMatTableComponent', () => {
  let component: SimpleMatTableComponent;
  let fixture: ComponentFixture<SimpleMatTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleMatTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleMatTableComponent);
    component = fixture.componentInstance;import { ComponentFixture, TestBed } from '@angular/core/testing';

    import * as matTableSortComponent from './mat-table-sort.component';

    describe('MatTableSortComponent', () => {
      let component: matTableSortComponent.MatTableSortComponent;
      let fixture: ComponentFixture<matTableSortComponent.MatTableSortComponent>;

      beforeEach(async () => {
        await TestBed.configureTestingModule({
          declarations: [ matTableSortComponent.MatTableSortComponent ]
        })
        .compileComponents();
      });

      beforeEach(() => {
        fixture = TestBed.createComponent(matTableSortComponent.MatTableSortComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should create', () => {
        expect(component).toBeTruthy();
      });
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
