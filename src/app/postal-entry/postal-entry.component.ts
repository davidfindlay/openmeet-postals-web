import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MeetEvent} from '../interfaces/meet-event';
import {ActivatedRoute, Params} from '@angular/router';
import {MeetService} from '../services/meet.service';
import {Meet} from '../interfaces/meet';
import {SplitDistance} from '../interfaces/split-distance';
import {Course} from '../enums/course';
import {Distance} from '../enums/distance';
import {PostalService} from '../services/postal.service';

@Component({
  selector: 'app-postal-entry',
  templateUrl: './postal-entry.component.html',
  styleUrls: ['./postal-entry.component.scss']
})
export class PostalEntryComponent implements OnInit {
  postalForm: FormGroup = this.fb.group({
    meet: '',
    event: '',
    surname: '',
    first_name: '',
    member_number: '',
    club_name: '',
    meet_event: ''
  });

  postalEvent!: MeetEvent;
  meet!: Meet;

  timers: number[] = [];
  splits: SplitDistance[] = [];

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private meetService: MeetService,
              private postalService: PostalService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.loadMeet(params['stub']);
    });
  }

  loadMeet(meetStub: string) {
    this.meetService.getMeet(meetStub).subscribe((result) => {
      console.log(result);
      if (result) {
        this.meet = result;
        this.postalEvent = result.events[0];

        this.timers = this.postalService.getTimers(this.postalEvent);
        this.splits = this.postalService.getSplitDistances(this.postalEvent);
      }
    });
  }

}
