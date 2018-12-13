import { TestBed, inject } from '@angular/core/testing';

import { CombatantStoreService } from './combatant-store.service';

describe('CombatantStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombatantStoreService]
    });
  });

  it('should be created', inject([CombatantStoreService], (service: CombatantStoreService) => {
    expect(service).toBeTruthy();
  }));
});
