import { Component, ElementRef, EventEmitter, HostListener, OnInit } from '@angular/core';

import { CurrentSectionService } from '../../services/current-section.service';
import { Section } from '../../models/section';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.css']
})

export class PortfolioComponent implements OnInit {
    private section: Section;

    constructor(private element: ElementRef, private currentSectionService: CurrentSectionService) {
    }

    ngOnInit() {
        this.section = new Section('portfolio', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.currentSectionService.registerSection(this.section);
    }
}