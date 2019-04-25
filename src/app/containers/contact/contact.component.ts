// Angular
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material';

// Services
import { KcsService } from '../../services/kcs.service';

// Models
import { InquirySubmission } from '../../models/inquiry-submission.model';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
})

export class ContactComponent {
    @Input()
    submitting: boolean;

    @Output()
    inquirySubmitted: EventEmitter<InquirySubmission> = new EventEmitter<InquirySubmission>();

    constructor(
        public snackBar: MatSnackBar,
        private kcsService: KcsService
    ) { }

    submitInquiry(form: NgForm) {

        if (!this.submitting && form.valid) {
            this.submitting = true;
            this.inquirySubmitted.emit(form.value);

            this.kcsService.submitInquiry(form.value).subscribe(resp => {
                this.submitting = false;
                this.snackBar.open('Your inquiry has been submitted! I will get back to as soon as possible about your inquiry', '',
                    {
                        duration: 5000,
                        panelClass: ['text-success'],
                    });
                form.resetForm();
            }, err => {
                this.submitting = false;
                this.snackBar.open('Your inquiry submission encountered an unexpected error.', '',
                    {
                        duration: 5000,
                        panelClass: ['text-error'],
                    });
            });
        }
    }
}
