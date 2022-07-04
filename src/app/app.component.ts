import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    album: Array<any> = []; 
  constructor(private _lightbox: Lightbox,) {
    this.album = []
    for (let i = 1; i <= 4; i++) {
      const src = '../assets/' + i + '.png';
      const caption = 'Image ' + i ;
      const thumb = '../assets/' + i + '.png';
      const album = {
         src: src,
         caption: caption,
         thumb: thumb,
         downloadUrl:src,
         data:src
      };

      this.album.push(album);
    }
  }

  
  open(index: number): void {
    this._lightbox.open(this.album, index,{ wrapAround: false, showZoom: true, showRotate: true, centerVertically: true, fitImageInViewPort:true});
    // this._lightbox.setConfig({thumbPosition: ThumbnailsPosition.Top,})
  }

  close(): void {
    this._lightbox.close();
  }
}
