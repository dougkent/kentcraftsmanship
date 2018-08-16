import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { Section } from '../../models/section.model';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit {
    @Output() sectionDimensioned = new EventEmitter<Section>();
    private section: Section;

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.section = new Section('portfolio', this.element.nativeElement.offsetTop);
        this.sectionDimensioned.emit(this.section);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.sectionDimensioned.emit(this.section);
    }
}