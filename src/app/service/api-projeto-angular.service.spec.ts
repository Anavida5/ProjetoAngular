import { TestBed } from '@angular/core/testing';

import { ApiProjetoAngularService } from './api-projeto-angular.service';

describe('ApiProjetoAngularService', () => {
  let service: ApiProjetoAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiProjetoAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
