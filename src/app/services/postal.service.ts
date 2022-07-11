import { Injectable } from '@angular/core';
import {Course} from '../enums/course';
import {Distance} from '../enums/distance';
import {MeetEvent} from '../interfaces/meet-event';

@Injectable({
  providedIn: 'root'
})
export class PostalService {

  constructor() { }

  getSplitDistances(meetEvent: MeetEvent) {
    const splits = [];
    // Determine the number of splits we need
    let numSplits = 0;
    let splitDist = 0;
    switch (meetEvent.course) {
      case Course.LCM:
      case Course.LCY:
        numSplits = meetEvent.distance / Distance.LC;
        splitDist = Distance.LC;
        break;
      case Course.SCM:
      case Course.SCY:
        numSplits =  meetEvent.distance / Distance.SC;
        splitDist = Distance.SC;
        break;
    }

    for (let x = 0; x < numSplits; x++) {
      splits.push({
        count: x + 1,
        distance: (x + 1) * splitDist
      });
    }

    return splits
  }

  getTimers(meetEvent: MeetEvent) {
    const timers = []
    for (let x = 0; x < meetEvent.final_times_required; x++) {
      timers.push(x + 1);
    }
    return timers;
  }
}
