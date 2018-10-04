import { Component, OnInit, HostListener } from '@angular/core';

import { KcsService } from '../../services/kcs.service';
import { ImageTile } from '../../models/image-tile.model';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    numberOfColumns: number = 6;

    portfolioImages: ImageTile[];

    // private portfolioImages: ImageTile[] = [
    //     {
    //         src: "../../../assets/portfolio/lazy-susan.jpg",
    //         cols: 2,
    //         rows: 2,
    //         mobileRows: 2,
    //         mobileCols: 2,
    //     },
    //     {
    //         src: "../../../assets/portfolio/cribbage-board.jpg",
    //         cols: 4,
    //         rows: 2,
    //         mobileCols: 2,
    //         mobileRows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/sofa-table-1.jpg",
    //         cols: 2,
    //         rows: 3,
    //     },
    //     {
    //         src: "../../../assets/portfolio/dog-bed.jpg",
    //         cols: 2,
    //         rows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/cutting-boards-2.jpg",
    //         cols: 1,
    //         rows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/sofa-table-2.jpg",
    //         cols: 1,
    //         rows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/desk.jpg",
    //         cols: 2,
    //         rows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/ring-box.jpg",
    //         cols: 1,
    //         rows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/headboard.jpg",
    //         cols: 1,
    //         rows: 1,
    //     },
    //     {
    //         src: "../../../assets/portfolio/wine-box.jpg",
    //         cols: 2,
    //         rows: 3,
    //     },
    //     {
    //         src: "../../../assets/portfolio/towel-rack.jpg",
    //         cols: 2,
    //         rows: 3,
    //     },
    //     {
    //         src: "../../../assets/portfolio/bookcase.jpg",
    //         cols: 2,
    //         rows: 2,
    //     },
    //     {
    //         src: "../../../assets/portfolio/cutting-boards-1.jpg",
    //         cols: 3,
    //         rows: 2,
    //     },
    //     {
    //         src: "../../../assets/portfolio/chandelier.jpg",
    //         cols: 3,
    //         rows: 2,
    //     },
    // ];

    constructor(private kcsService: KcsService) { }

    ngOnInit() {
        this.kcsService.getPortfolioImages().subscribe(data => this.portfolioImages = data);
        this.numberOfColumns = this.isMobile() ? 2 : 6;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event){
        this.numberOfColumns = this.isMobile() ? 2 : 6;
    }

    private isMobile(): boolean {
        return (window.innerWidth) <= 768;
    }
}