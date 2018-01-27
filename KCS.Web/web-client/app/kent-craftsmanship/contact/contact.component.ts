import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/finally';

import { KcsService } from '../../services/kcs.service';
import { InquirySubmission } from '../../models/inquiry-submission';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})

export class ContactComponent {
    submitting = false;
    model = new InquirySubmission('', '', '');

    constructor(private kcsService: KcsService, private snackBar: MatSnackBar) {

    }

    onSubmit() {

        if (!this.submitting) {
            this.submitting = true;

            var res = this.kcsService.submitInquiry(this.model);

            res.finally(() => this.submitting = false)
                .subscribe(
                res => {
                    this.submitting = false;
                    this.snackBar.open('Inquiry submitted successfully!', '',
                        {
                            //duration: 2000,
                            panelClass: ['text-success']
                        });
                },
                err => {
                    this.submitting = false;
                    this.snackBar.open('Inquiry submission encountered an unexpecte error.', '',
                        {
                            //duration: 2000,
                            panelClass: ['text-error']
                        });
                    console.error(err);
                }
                );
        }
    }
}