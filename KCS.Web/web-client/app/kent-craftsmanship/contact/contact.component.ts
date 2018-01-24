import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';

import { KCSService } from '../../services/kcs.service';
import { InquirySubmission } from '../../models/inquiry-submission';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    submitting = false;

    constructor(private kcsService: KCSService, private snackBar: MatSnackBar) {

    }

    model: InquirySubmission;

    onSubmit(inquirySubmission: InquirySubmission) {

        if (!this.submitting) {
            this.submitting = true;

            this.kcsService.submitInquiry(inquirySubmission)
                .finally(() => this.submitting = false)
                .subscribe(
                res => {
                    this.submitting = false;
                    this.snackBar.open('Inquiry submitted successfully!', '', { duration: 1000 });
                },
                err => {
                    this.submitting = false;
                    this.snackBar.open('Inquiry submission encountered an unexpecte error.', '', { duration: 3000 });
                    console.error(err);
                }
                );
        }
    }
}