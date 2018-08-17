import { Component, ElementRef, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

//import { CurrentSectionService } from '../../services/current-section.service';
import { Section } from '../../models';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
    @Output() sectionDimensioned = new EventEmitter<Section>();
    private section: Section;


    constructor(private element: ElementRef) {
    }

    ngOnInit() {
        this.section = new Section('about', this.element.nativeElement.offsetTop);
        this.sectionDimensioned.emit(this.section);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event: any) {
        this.section.position = this.element.nativeElement.offsetTop
        this.sectionDimensioned.emit(this.section);
    }
}
