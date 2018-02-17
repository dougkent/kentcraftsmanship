import { Component, OnInit, Input, OnChanges, ElementRef, HostListener, ViewEncapsulation } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class AppComponent implements OnInit {
    private currentSectionName: string = '';
    private sectionIndexes: any = [];
    @Input() sections: any;

    constructor(private element: ElementRef) {

    }

    ngOnInit() {

    }

    sectionPosition($event: any) {
        //filter out the old position if it has been set
        //this.sectionIndexes = this.sectionIndexes.filter(item => item.name != $event.name);
        //set the new position
        this.sectionIndexes.push($event);
        //sort the section based on their apperance order 
        this.sectionIndexes.sort((a: any, b: any) => {
            return b.position - a.position;
        });

        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.currentSectionName = this.getCurrentSectionName();
        }
    }

    @HostListener("window:scroll", [])
    onWindowScroll() {
        this.currentSectionName = this.getCurrentSectionName();
    }

    private getCurrentSectionName(): string {
        let offset: number = this.element.nativeElement.parentElement.offsetTop - this.element.nativeElement.offsetTop;
        for (let section of this.sectionIndexes) {
            //Note: 13px is the margin-top value of the h2 element in the header
            if ((section.position + offset - window.scrollY - 13) < 0) {
                return section.name;
            }
        }
        return '';
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}