import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/finally';

import { KcsService } from '../../services/kcs.service';
import { InquirySubmission } from '../../models/inquiry-submission';
import { ReCaptchaDirective, RECAPTCHA_URL } from '../../directives/recaptcha.directive';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
    providers: [{
        provide: RECAPTCHA_URL,
        useValue: '/api/inquiries/validate-captcha'
    }]
})

export class ContactComponent implements OnInit {
    submitting = false;
    public contactForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private kcsService: KcsService, private snackBar: MatSnackBar) {

    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            email: ['', [<any>Validators.email, <any>Validators.required]],
            subject: ['', [<any>Validators.required]],
            body: ['', [<any>Validators.required]],
            captcha: ['', [<any>Validators.required]]
        });
    }

    submitInquiry(model: InquirySubmission) {

        if (!this.submitting) {
            this.submitting = true;

            var res = this.kcsService.submitInquiry(model);

            res.finally(() => this.submitting = false)
                .subscribe(
                res => {
                    this.submitting = false;
                    this.snackBar.open('Inquiry submitted successfully!', '',
                        {
                            duration: 2000,
                            panelClass: ['text-success']
                        });
                },
                err => {
                    this.submitting = false;
                    this.snackBar.open('Inquiry submission encountered an unexpected error.', '',
                        {
                            duration: 2000,
                            panelClass: ['text-error']
                        });
                    console.error(err);
                }
                );
        }
    }
}