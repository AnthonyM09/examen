import { TestBed } from '@angular/core/testing';

import { FirebaseErrorAlertService } from './firebase-error-alert.service';

describe('FirebaseErrorAlertService', () => {
  let service: FirebaseErrorAlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseErrorAlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
