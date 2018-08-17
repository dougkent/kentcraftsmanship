import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { InquirySubmission } from '../models/inquiry-submission.model';

@Injectable()
export class KcsService {

    constructor(private http: Http) {

    }

    submitInquiry(inquirySubmission: InquirySubmission): Observable<Object> {
        return this.http.post('/api/inquiries',
            inquirySubmission);
    }
}