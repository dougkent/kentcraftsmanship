import { Component } from '@angular/core';

interface ImageTile {
    src: string
    cols: number
    rows: number
}

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
    tiles: ImageTile[] = [
        {
            src: "src1",
            cols: 4,
            rows: 1,
        },
        {
            src: "src2",
            cols: 3,
            rows: 2,
        },
        {
            src: "src3",
            cols: 3,
            rows: 2,
        },
        {
            src: "src4",
            cols: 2,
            rows: 3,
        }
    ];

    constructor() { }
}