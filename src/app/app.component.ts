import { Component, OnInit } from '@angular/core';
import { CreateBrand$Params } from './api/fn/brand/create-brand';
import { BrandService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'akaris_angular';

  

  constructor(private brandService: BrandService) {

  }

  ngOnInit() {

  }
}
