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

  params: CreateBrand$Params = {
    body: {
      "@type": "CatalogProductOfferingsRequestAir",
      "maxNumberOfUpsellsToReturn": 4,
      "contentSourceList": [
        "GDS"
      ],
      "PassengerCriteria": [
        {
          "@type": "PassengerCriteria",
          "number": 1,
          "passengerTypeCode": "ADT"
        }
      ],
      "SearchCriteriaFlight": [
        {
          "@type": "SearchCriteriaFlight",
          "departureDate": "2023-10-17",
          "From": {
            "value": "DEN"
          },
          "To": {
            "value": "PHX"
          },
          "DepartureTimeRange": {
            "start": "11:00:00",
            "end": "13:00:00"
          }
        }
      ]


    }

  };

  constructor(private brandService: BrandService) {

  }

  ngOnInit() {
    this.brandService.createBrand(this.params)
  }
}
