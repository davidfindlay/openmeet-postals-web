import {MeetEvent} from './meet-event';

export interface Meet {
  id: number;
  meet_name: string;
  deadline: Date;
  events: MeetEvent[];
}
