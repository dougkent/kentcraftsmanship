import { TestBed, async } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { tick, fakeAsync } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

let router: Router;
const routes = [
    { path: '**', component: PageNotFoundComponent }
]

describe('AppComponent', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule.withRoutes(routes),
                BrowserAnimationsModule,
                MatToolbarModule,
                MatSidenavModule,
                MatListModule,
                HttpClientTestingModule
            ],
            declarations: [
                AppComponent,
                PageNotFoundComponent
            ],
        }).compileComponents();

        router = TestBed.get(Router);
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should include links to all sections', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;

        var links = Array.prototype.slice.call(compiled.querySelectorAll('a')).map(a => a.textContent.trim());
        expect(links).toContain('Kits to be Sent');
        expect(links).toContain('Sent Kits');
        expect(links).toContain('Request Vials');
        expect(links).toContain('Retrieve/Replace');
        expect(links).toContain('Kits Checked Out');
        expect(links).toContain('Vial Intake');
        expect(links).toContain('Vial Audit Report');
        expect(links).toContain('Vial Search');
    }));
});