import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { CurrentSectionService } from '../../services/current-section.service';
import { Section } from '../../models/section';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    private section: Section;

    constructor(private element: ElementRef, private currentSectionService: CurrentSectionService) {
    }

    ngOnInit() {
        this.section = new Section('home', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.currentSectionService.registerSection(this.section);
    }
}