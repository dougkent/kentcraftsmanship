import { Component, OnInit } from '@angular/core';

import { MtfItem } from '../../models/mtf-item.model';

@Component({
    selector: 'app-mtf',
    templateUrl: './mtf.component.html',
    styleUrls: ['./mtf.component.scss']
})

export class MtfComponent implements OnInit {

    items: MtfItem[];

    constructor() { }

    ngOnInit() {
        this.items = [
            {
                name: 'Bunk Bed',
                description: 'These bunk bed plans were designed specifically for construction for an orphange in Haiti using a circular saw, drills, impact drivers, and socket wrenches. The dimensions of the bunk beds were made according to the orphange directors specifications for the mattresses he had ordered which were a non-standard size. All of the hardware was bought in the U.S. and brought with us on the trip.',
                imageUrls: [
                    '../../../assets/mission-trip-furniture/kent-craftsmanship-bunk-beds.jpg',
                    '../../../assets/mission-trip-furniture/kent-craftsmanship-bunk-bed.jpg'
                ],
                pdfUrl: '../../../assets/mission-trip-furniture/kent-craftsmanship-bunk-bed.pdf',
            },
            {
                name: 'Picnic Table',
                description: 'These picnic table plans were designed specifically for an open air cafeteria in an orphanage in Haiti. They can be constructed using just a circular saw, drills, and impact drivers. All of the hardware was bought in the U.S. and brought with us on the trip.',
                imageUrls: [
                    '../../../assets/mission-trip-furniture/kent-craftsmanship-picnic-tables.jpg',
                    '../../../assets/mission-trip-furniture/kent-craftsmanship-picnic-table.jpg'
                ],
                pdfUrl: '../../../assets/mission-trip-furniture/kent-craftsmanship-picnic-table.pdf',
            }
        ]
    }
}