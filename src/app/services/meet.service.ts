import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Discipline} from '../enums/discipline';
import {Course} from '../enums/course';

const meets = [
  {
    id: 1,
    stub: 'noosa2022',
    meet_name: 'Noosa Test',
    deadline: new Date('2022-08-23 23:59:59'),
    events: [
      {
        id: 1,
        discipline: Discipline.FREE,
        distance: 400,
        course: Course.LCM,
        all_splits_required: true,
        split_times_required: 1,
        final_times_required: 2
      }
    ]
  }
];

@Injectable({
  providedIn: 'root'
})
export class MeetService {

  constructor() { }

  getMeet(stub: string) {
    return of(meets.find(x => x.stub === stub));
  }
}
