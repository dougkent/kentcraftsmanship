import { Component, ElementRef, EventEmitter, HostListener, OnInit } from '@angular/core';

import { CurrentSectionService } from '../../services/current-section.service';
import { Section } from '../../models/section';

@Component({
    selector: 'app-mtf',
    templateUrl: './mtf.component.html',
    styleUrls: ['./mtf.component.css']
})

export class MtfComponent implements OnInit {
    private section: Section;

    constructor(private element: ElementRef, private currentSectionService: CurrentSectionService) {
    }

    ngOnInit() {
        this.section = new Section('mtf', this.element.nativeElement.offsetTop);
        this.currentSectionService.registerSection(this.section);
    }


    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.currentSectionService.registerSection(this.section);
    }
}