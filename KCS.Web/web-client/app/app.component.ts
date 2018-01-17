import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { Router, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { NavLink } from './models/nav-link';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
    route = '/';
    links: NavLink[] = [
        {
            section: 'Kent Craftsmanship',
            children: [
                { name: 'About', link: '/about' },
                { name: 'Portfolio', link: '/portfolio' },
                { name: 'Mission Trip Furniture', link: '/mtf' },
                { name: 'Contact', link: '/contact' }
            ]
        }
    ];

    constructor(/*private router: Router,*/ private http: HttpClient) {

    }

    ngOnInit() {
        // Grab the first 2 components of the current route on navigation so that the proper mat-list-item can be focused
        //this.router.events.subscribe(e => {
        //    if (e instanceof NavigationEnd) {
        //        this.route = this.router.url.split('/').slice(0,3).join('/')
        //    }
        //})
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}