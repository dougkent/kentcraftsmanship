import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavBarComponent {
    
    isFirstSection = true;
    isMenuDisplayed = false;

    private _currentUrl: string = '/';

    @Input()
    set currentUrl(currentUrl: string) {
        this._currentUrl = currentUrl;
        this.isFirstSection = currentUrl === '/';
    }

    constructor() { }

    toggleMenu(force: boolean) {
        if (force !== null) {
            this.isMenuDisplayed = force;
            return;
        }
        this.isMenuDisplayed = !this.isMenuDisplayed;
    }
}