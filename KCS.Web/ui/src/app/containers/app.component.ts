import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { Section, InquirySubmission } from '../models';
import { CurrentSectionService } from '../services/current-section.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    currentSection: Section;

    constructor(private currentSectionService : CurrentSectionService) {
    }

    ngOnInit(){

    }

    registerSection(section: Section) {
        this.currentSectionService.registerSection(section);
    }

    submitInquiry(inquirySubmission: InquirySubmission) {

    }
}