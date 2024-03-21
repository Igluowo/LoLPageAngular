import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagCampeonesComponent } from './pag-campeones.component';

describe('PagCampeonesComponent', () => {
  let component: PagCampeonesComponent;
  let fixture: ComponentFixture<PagCampeonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagCampeonesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagCampeonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
