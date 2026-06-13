import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCountryCoviddataComponent } from './list-country.coviddata.component';

describe('ListCountryCoviddataComponent', () => {
  let component: ListCountryCoviddataComponent;
  let fixture: ComponentFixture<ListCountryCoviddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCountryCoviddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCountryCoviddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
