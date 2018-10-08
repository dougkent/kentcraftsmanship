import { Component, Input } from '@angular/core';

interface ImageSliderUrl {
    imageUrl: string;
    selected: boolean;
}

@Component({
    selector: 'image-slider',
    templateUrl: './image-slider.component.html',
    styleUrls: [ './image-slider.component.scss']
})
export class ImageSliderComponent {
    private imageSliderUrls: ImageSliderUrl[]

    @Input()
    set imageUrls(imageUrls: string[]){
        this.imageSliderUrls = [];

        imageUrls.forEach(imageUrl => {
            this.imageSliderUrls.push({
                imageUrl: imageUrl,
                selected: false
            });
        });

        this.selectImage(this.imageSliderUrls[0]);
    }

    constructor() { }

    selectImage(event: ImageSliderUrl) {
        this.imageSliderUrls.forEach(imageSliderUrl => {
            if(imageSliderUrl.imageUrl === event.imageUrl) {
                imageSliderUrl.selected = true;
            }
            else {
                imageSliderUrl.selected = false;
            }
        });
    }

    getSelectedImageUrl(): string {
        return this.imageSliderUrls.find(imageSliderUrl => imageSliderUrl.selected).imageUrl;
    }
}