// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material';

// Services
import { KcsService } from '../../services/kcs.service';

// Models
import { InquirySubmission } from '../../models';

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

    submitInquiry(model: InquirySubmission, isValid: boolean) {

        if (!this.submitting && isValid) {
            this.submitting = true;
            this.inquirySubmitted.emit(model);
            
            this.kcsService.submitInquiry(model).subscribe(resp => {
                this.submitting = false;
                    this.snackBar.open('Inquiry submitted successfully!', '',
                        {
                            duration: 3000,
                            panelClass: ['text-success'],
                        });
            },
            err => {
                this.submitting = false;
                this.snackBar.open('Inquiry submission encountered an unexpected error.', '',
                    {
                        duration: 3000,
                        panelClass: ['text-error'],
                    });
            });
        }
    }
}
