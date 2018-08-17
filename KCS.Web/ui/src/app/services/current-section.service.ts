import { Injectable, OnInit } from '@angular/core';

import { Subject } from 'rxjs';

import { Section } from '../models/section.model';

@Injectable()
export class CurrentSectionService implements OnInit {
    private currentSection = new Subject<Section>();

    currentSection$ = this.currentSection.asObservable();
    sections: any = [];

    constructor() {
    }

    ngOnInit() {
        window.addEventListener('scroll', (event: any) => {
            this.getCurrentSection();
        });
    }

    registerSection(section: Section) {
        //filter out the old position if it has been set
        this.sections = this.sections.filter((item: Section) => item.name != section.name);
        //set the new position
        this.sections.push(section);
        //sort the section based on their apperance order 
        this.sections.sort((a: Section, b: Section) => {
            return b.position - a.position;
        });

        debugger;
        //if the page has already been scrolled find the current name
        if (document.body.scrollTop > 0) {
            this.getCurrentSection();
        }
    }

    private getCurrentSection() {
        for (let section of this.sections) {
            if (section.position - (window.scrollY + 70) < 0) {
                this.currentSection.next(section);
                return;
            }
        }
        return
    }
}