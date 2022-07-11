import {TestBed} from '@angular/core/testing';

import {PostalService} from './postal.service';
import {Discipline} from '../enums/discipline';
import {Course} from '../enums/course';

describe('PostalService', () => {
  let service: PostalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should correctly calculate LCM splits for 400m distance', () => {

    const eventExample = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 400,
      course: Course.LCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 2
    };

    const result = service.getSplitDistances(eventExample);
    expect(result.length).toEqual(8);
    expect(result[0].distance).toEqual(50);
    expect(result[0].count).toEqual(1);
    expect(result[7].distance).toEqual(400);
    expect(result[7].count).toEqual(8);
  });

  it('should correctly calculate LCM splits for 800m distance', () => {
    const eventExample = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 800,
      course: Course.LCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 2
    };

    const result = service.getSplitDistances(eventExample);
    expect(result.length).toEqual(16);
    expect(result[0].distance).toEqual(50);
    expect(result[0].count).toEqual(1);
    expect(result[15].distance).toEqual(800);
    expect(result[15].count).toEqual(16);
  });

  it('should correctly calculate LCM splits for 1500m distance', () => {
    const eventExample = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 1500,
      course: Course.LCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 2
    };

    const result = service.getSplitDistances(eventExample);
    expect(result.length).toEqual(30);
    expect(result[0].distance).toEqual(50);
    expect(result[0].count).toEqual(1);
    expect(result[29].distance).toEqual(1500);
    expect(result[29].count).toEqual(30);
  });

  it('should correctly calculate SCM splits for 400m distance', () => {

    const eventExample = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 400,
      course: Course.SCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 2
    };

    const result = service.getSplitDistances(eventExample);
    expect(result.length).toEqual(16);
    expect(result[0].distance).toEqual(25);
    expect(result[0].count).toEqual(1);
    expect(result[15].distance).toEqual(400);
    expect(result[15].count).toEqual(16);
  });

  it('should correctly calculate SCM splits for 800m distance', () => {
    const eventExample = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 800,
      course: Course.SCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 2
    };

    const result = service.getSplitDistances(eventExample);
    expect(result.length).toEqual(32);
    expect(result[0].distance).toEqual(25);
    expect(result[0].count).toEqual(1);
    expect(result[31].distance).toEqual(800);
    expect(result[31].count).toEqual(32);
  });

  it('should correctly calculate SCM splits for 1500m distance', () => {
    const eventExample = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 1500,
      course: Course.SCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 2
    };

    const result = service.getSplitDistances(eventExample);
    expect(result.length).toEqual(60);
    expect(result[0].distance).toEqual(25);
    expect(result[0].count).toEqual(1);
    expect(result[59].distance).toEqual(1500);
    expect(result[59].count).toEqual(60);
  });

  it('should correctly create the timers array', () => {
    const eventExample1 = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 1500,
      course: Course.SCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 1
    };

    const eventExample2 = {
      id: 1,
      discipline: Discipline.FREE,
      distance: 1500,
      course: Course.SCM,
      all_splits_required: true,
      split_times_required: 1,
      final_times_required: 3
    };

    const result1 = service.getTimers(eventExample1);
    expect(result1.length).toEqual(1);
    expect(result1[0]).toEqual(1);

    const result2 = service.getTimers(eventExample2);
    expect(result2[0]).toEqual(1);
    expect(result2[1]).toEqual(2);
    expect(result2[2]).toEqual(3);
  })
});
