import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Section, InquirySubmission } from '../../models';
//import { ReCaptchaDirective, RECAPTCHA_URL } from '../../directives/recaptcha.directive';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    // providers: [{
    //     provide: RECAPTCHA_URL,
    //     useValue: '/api/inquiries/validate-captcha'
    // }]
})

export class ContactComponent implements OnInit {
    @Output() sectionDimensioned = new EventEmitter<Section>();
    @Output() inquirySubmitted = new EventEmitter<InquirySubmission>();
    submitting = false;
    public contactForm: FormGroup;
    private section: Section;

    constructor(private formBuilder: FormBuilder, private element: ElementRef) {

    }

    ngOnInit() {
        this.contactForm = this.formBuilder.group({
            email: ['', [<any>Validators.email, <any>Validators.required]],
            subject: ['', [<any>Validators.required]],
            body: ['', [<any>Validators.required]],
            captcha: ['', [<any>Validators.required]]
        });

        this.section = new Section('contact', this.element.nativeElement.offsetTop);
        this.sectionDimensioned.emit(this.section);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop;
        this.sectionDimensioned.emit(this.section);
    }

    submitInquiry(model: InquirySubmission) {

        if (!this.submitting) {
            this.submitting = true;

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
