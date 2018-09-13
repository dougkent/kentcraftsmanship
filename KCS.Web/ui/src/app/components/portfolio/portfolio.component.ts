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
            cols: 2,
            rows: 2,
        },
        {
            src: "src2",
            cols: 4,
            rows: 2,
        },
        {
            src: "src3",
            cols: 4,
            rows: 2,
        },
        {
            src: "src4",
            cols: 1,
            rows: 1,
        },
        {
            src: "src5",
            cols: 1,
            rows: 1,
        },
        {
            src: "src6",
            cols: 1,
            rows: 1,
        },
        {
            src: "src7",
            cols: 1,
            rows: 1,
        },
        {
            src: "src8",
            cols: 2,
            rows: 1,
        },
        {
            src: "src9",
            cols: 2,
            rows: 1,
        },
        {
            src: "src10",
            cols: 2,
            rows: 1,
        }
    ];

    constructor() { }
}