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