import { Component, Input } from '@angular/core';

import { Section } from '../../models/section.model';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavBarComponent {
    private _currentSection: Section;

    @Input()
    set currentSection(currentSection: Section) {
        this._currentSection = currentSection;
        this.isFirstSection = currentSection.name == 'home';
    }

    isFirstSection = true;
    isMenuDisplayed = false;

    constructor() {

    }

    toggleMenu(force: boolean) {
        if (force) {
            this.isMenuDisplayed = force;
            return;
        }
        this.isMenuDisplayed = !this.isMenuDisplayed;
    }
}