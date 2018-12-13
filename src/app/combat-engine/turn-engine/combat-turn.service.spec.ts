import { TestBed, inject } from '@angular/core/testing';

import { CombatTurnService } from './combat-turn.service';

describe('CombatTurnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CombatTurnService]
    });
  });

  it('should be created', inject([CombatTurnService], (service: CombatTurnService) => {
    expect(service).toBeTruthy();
  }));
});
