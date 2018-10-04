import { Component, OnInit } from '@angular/core';

import { KcsService } from '../../services/kcs.service';
import { ImageTile } from '../../models/image-tile.model';

@Component({
    selector: 'app-portfolio',
    templateUrl: './portfolio.component.html',
    styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

    tiles: ImageTile[];

    constructor(private kcsService: KcsService) { }

    ngOnInit() {
        this.kcsService.getPortfolioImages().subscribe(data => this.tiles = data);
    }
}