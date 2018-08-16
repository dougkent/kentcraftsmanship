import { Component, OnInit } from '@angular/core';

//import { Observable } from 'rxjs/Observable';
//import { of } from 'rxjs/observable/of';
//import { catchError, map, tap } from 'rxjs/operators';

import { PageScrollConfig } from 'ngx-page-scroll';

import { Section, InquirySubmission } from '../models';
import { CurrentSectionService } from '../services/current-section.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    currentSection: Section;

    constructor(private currentSectionService : CurrentSectionService) {
        PageScrollConfig.defaultDuration = 500;
    }

    ngOnInit(){
        debugger;
        this.currentSectionService.currentSection$.subscribe((section: Section) => {
            debugger;
            this.currentSection = section;
        })
    }

    registerSection(section: Section) {
        this.currentSectionService.registerSection(section);
    }

    submitInquiry(inquirySubmission: InquirySubmission) {

    }
    
    // private handleError<T>(operation = 'operation', result?: T) {
    //     return (error: any): Observable<T> => {
    //         console.error(error); // log to console instead

    //         // Let the app keep running by returning an empty result.
    //         return of(result as T);
    //     };
    // }
}