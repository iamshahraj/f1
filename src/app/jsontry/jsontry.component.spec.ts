import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsontryComponent } from './jsontry.component';

describe('JsontryComponent', () => {
  let component: JsontryComponent;
  let fixture: ComponentFixture<JsontryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsontryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsontryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
