import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { Section } from '../../models/section.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    @Output() sectionDimensioned = new EventEmitter<Section>();
    private section: Section;

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.section = new Section('home', this.element.nativeElement.offsetTop);
        this.sectionDimensioned.emit(this.section);
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.sectionDimensioned.emit(this.section);
    }
}