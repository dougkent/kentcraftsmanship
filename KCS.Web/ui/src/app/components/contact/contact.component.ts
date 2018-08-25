// Angular
import { Component, EventEmitter, Input, Output } from '@angular/core';

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

    constructor() { }
    
    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }

    submitInquiry(model: InquirySubmission, isValid: boolean) {

        if (!this.submitting && isValid) {

            this.inquirySubmitted.emit(model);

            // var res = this.kcsService.submitInquiry(model);

            // res.finally(() => this.submitting = false)
            //     .subscribe(
            //     res => {
            //         this.submitting = false;
            //         this.snackBar.open('Inquiry submitted successfully!', '',
            //             {
            //                 duration: 2000,
            //                 panelClass: ['text-success']
            //             });
            //     },
            //     err => {
            //         this.submitting = false;
            //         this.snackBar.open('Inquiry submission encountered an unexpected error.', '',
            //             {
            //                 duration: 2000,
            //                 panelClass: ['text-error']
            //             });
            //         console.error(err);
            //     }
            //     );
        }
    }
}
