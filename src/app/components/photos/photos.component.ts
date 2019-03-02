import { Component, OnInit } from '@angular/core';
import { PhotosService} from '../../services/photos.service';
import { Photo } from 'src/app/models/photo';


@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photos: Photo[]=[];

  constructor(public photosService :PhotosService ) { }

  ngOnInit(){
    this.photosService.getPhotos()
    .subscribe(
      data=> {
              console.log(data);
              this.photos = data;
      },
      err=> console.log('err')
    )
 }

  click(){
        alert('Works!!');
    }

}
