import { TestBed } from '@angular/core/testing';

import { ManageTasksService } from './manage-tasks.service';

describe('ManageTasksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ManageTasksService = TestBed.get(ManageTasksService);
    expect(service).toBeTruthy();
  });
});
