import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { InquirySubmission } from '../models/inquiry-submission.model';

@Injectable()
export class KcsService {

    constructor(private http: Http) {

    }

    submitInquiry(inquirySubmission: InquirySubmission): Observable<Object> {
        return this.http.post('/api/inquiries', inquirySubmission)
            .pipe(
                catchError((error: Response | any) => this.handleError(error))
            );
    }

    private handleError(error: Response)
    {
        console.error(error);
        return throwError(error.body);
    }
}