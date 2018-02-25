import { Component } from '@angular/core';

import { CurrentSectionService } from '../../services/current-section.service';
import { Section } from '../../models/section';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavBarComponent {
    isFirstSection = true;

    constructor(private currentSectionService: CurrentSectionService) {
        this.currentSectionService.currentSection$.subscribe((currentSection: Section) => {
            console.log(currentSection.name)
            this.isFirstSection = currentSection.name == 'home';
        })
    }

}