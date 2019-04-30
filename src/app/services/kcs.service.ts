import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ImageTile } from '../models/image-tile.model';

@Injectable()
export class KcsService {

    private portfolioImages: ImageTile[] = [
        {
            src: "../../../assets/portfolio/covenant-altar.jpg",
            cols: 4,
            rows: 2,
            mobileRows: 1,
            mobileCols: 2,
        },
        {
            src: "../../../assets/portfolio/covenant-cross.jpg",
            cols: 2,
            rows: 3,
            mobileRows: 3,
            mobileCols: 2,
        },
        {
            src: "../../../assets/portfolio/coffee-table.jpg",
            cols: 4,
            rows: 2,
            mobileCols: 2,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/lazy-susan.jpg",
            cols: 2,
            rows: 2,
            mobileRows: 2,
            mobileCols: 2,
        },
        {
            src: "../../../assets/portfolio/cribbage-board.jpg",
            cols: 2,
            rows: 2,
            mobileCols: 2,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/sofa-table-1.jpg",
            cols: 2,
            rows: 3,
            mobileCols: 1,
            mobileRows: 2,
        },
        {
            src: "../../../assets/portfolio/dog-bed.jpg",
            cols: 2,
            rows: 1,
            mobileCols: 1,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/cutting-boards-2.jpg",
            cols: 1,
            rows: 1,
            mobileCols: 1,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/sofa-table-2.jpg",
            cols: 1,
            rows: 1,
            mobileCols: 2,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/desk.jpg",
            cols: 2,
            rows: 1,
            mobileCols: 2,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/ring-box.jpg",
            cols: 1,
            rows: 1,
            mobileCols: 1,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/headboard.jpg",
            cols: 1,
            rows: 1,
            mobileCols: 1,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/wine-box.jpg",
            cols: 2,
            rows: 3,
            mobileCols: 1,
            mobileRows: 2,
        },
        {
            src: "../../../assets/portfolio/towel-rack.jpg",
            cols: 2,
            rows: 3,
            mobileCols: 1,
            mobileRows: 2,
        },
        {
            src: "../../../assets/portfolio/bookcase.jpg",
            cols: 2,
            rows: 2,
            mobileCols: 2,
            mobileRows: 2,
        },
        {
            src: "../../../assets/portfolio/cutting-boards-1.jpg",
            cols: 3,
            rows: 2,
            mobileCols: 2,
            mobileRows: 1,
        },
        {
            src: "../../../assets/portfolio/chandelier.jpg",
            cols: 3,
            rows: 2,
            mobileCols: 2,
            mobileRows: 1,
        },
    ];

    constructor() {

    }

    getPortfolioImages(): Observable<ImageTile[]> {
        return of(this.portfolioImages);
    }
}