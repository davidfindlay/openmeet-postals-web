import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostalEntryComponent } from './postal-entry.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';

describe('PostalEntryComponent', () => {
  let component: PostalEntryComponent;
  let fixture: ComponentFixture<PostalEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        RouterTestingModule
      ],
      declarations: [ PostalEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
