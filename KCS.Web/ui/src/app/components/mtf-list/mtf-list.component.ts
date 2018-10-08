import { Component, Input } from '@angular/core';

import { MtfItem } from '../../models/mtf-item.model';

@Component({
    selector: 'mtf-list',
    templateUrl: './mtf-list.component.html',
    styleUrls: ['./mtf-list.component.scss']
})
export class MtfListComponent {
    
    @Input()
    items: MtfItem[];
    
    constructor() { }
}
