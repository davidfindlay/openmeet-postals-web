import {Discipline} from '../enums/discipline';
import {Course} from '../enums/course';

export interface MeetEvent {
  id: number;
  discipline: Discipline;
  distance: number;
  course: Course;
  all_splits_required: boolean;
  split_times_required: number;
  final_times_required: number;
}
