import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

import { Section } from '../../models/section.model';

@Component({
    selector: 'app-mtf',
    templateUrl: './mtf.component.html',
    styleUrls: ['./mtf.component.scss']
})

export class MtfComponent implements OnInit {
    @Output() sectionDimensioned = new EventEmitter<Section>();
    private section: Section;

    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.section = new Section('mtf', this.element.nativeElement.offsetTop);
        this.sectionDimensioned.emit(this.section);
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.sectionDimensioned.emit(this.section);
    }
}