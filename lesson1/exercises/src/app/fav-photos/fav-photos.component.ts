import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My favorite pictures!';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://image.shutterstock.com/image-photo/bernese-mountain-puppy-basket-outdoors-600w-558354661.jpg';
  image3 = 'https://image.shutterstock.com/image-photo/kitten-grass-sun-260nw-486546004.jpg';

  constructor() { }

  ngOnInit() {
  }

}