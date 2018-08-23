import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

import { filter } from 'rxjs/operators';

import { InquirySubmission } from '../models';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    currentUrl: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.router.events.pipe(filter(e => e instanceof NavigationStart))
        .subscribe((event: NavigationStart) => {
            this.currentUrl = event.url;
        })
    }

    submitInquiry(inquirySubmission: InquirySubmission) {

    }
}