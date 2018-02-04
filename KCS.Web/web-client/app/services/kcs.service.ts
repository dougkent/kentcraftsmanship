import { Injectable } from '@angular/core';
//import { HttpClient, HttpParams } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { InquirySubmission } from '../models/inquiry-submission';

@Injectable()
export class KcsService {

    constructor(private http: Http) {

    }

    submitInquiry(inquirySubmission: InquirySubmission): Observable<Object> {
        return this.http.post('/api/inquiries',
            inquirySubmission);
    }
}