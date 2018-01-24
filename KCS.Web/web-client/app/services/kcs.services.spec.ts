import { TestBed, inject } from '@angular/core/testing';

import { KCSService } from './kcs.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('KCSService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: HttpClientTestingModule,
            providers: [KCSService],
        });
    });

    it('should be created', inject([KCSService], (service: KCSService) => {
        expect(service).toBeTruthy();
    }));
});