/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { SearchAirService } from './services/search-air.service';
import { PriceAirService } from './services/price-air.service';
import { BrandService } from './services/brand.service';
import { FareRulesService } from './services/fare-rules.service';
import { ReservationService } from './services/reservation.service';
import { ReservationReceiptService } from './services/reservation-receipt.service';
import { WorkbenchManagementService } from './services/workbench-management.service';
import { WorkbenchManageOffersService } from './services/workbench-manage-offers.service';
import { WorkbenchTravelerUpdatableItemsService } from './services/workbench-traveler-updatable-items.service';
import { WorkbenchManageDocumentOverridesService } from './services/workbench-manage-document-overrides.service';
import { WorkbenchManageAccountingRemarksService } from './services/workbench-manage-accounting-remarks.service';
import { WorkbenchManageFormOfPaymentService } from './services/workbench-manage-form-of-payment.service';
import { WorkbenchManagePaymentService } from './services/workbench-manage-payment.service';
import { WorkbenchManageReservationCommentsService } from './services/workbench-manage-reservation-comments.service';
import { WorkbenchManageSpecialServicesService } from './services/workbench-manage-special-services.service';
import { WorkbenchManageTravelersService } from './services/workbench-manage-travelers.service';
import { WorkbenchManagePrimaryContactService } from './services/workbench-manage-primary-contact.service';
import { WorkbenchManageProductsService } from './services/workbench-manage-products.service';
import { WorkbenchManageOrganizationLoyaltyProgramService } from './services/workbench-manage-organization-loyalty-program.service';
import { WorkbenchManageAgencyServiceFeesService } from './services/workbench-manage-agency-service-fees.service';
import { WorkbenchManageTravelAgencyService } from './services/workbench-manage-travel-agency.service';
import { WorkbenchManageTravelAgencyCorporateCodeService } from './services/workbench-manage-travel-agency-corporate-code.service';
import { TicketService } from './services/ticket.service';
import { EmdService } from './services/emd.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    SearchAirService,
    PriceAirService,
    BrandService,
    FareRulesService,
    ReservationService,
    ReservationReceiptService,
    WorkbenchManagementService,
    WorkbenchManageOffersService,
    WorkbenchTravelerUpdatableItemsService,
    WorkbenchManageDocumentOverridesService,
    WorkbenchManageAccountingRemarksService,
    WorkbenchManageFormOfPaymentService,
    WorkbenchManagePaymentService,
    WorkbenchManageReservationCommentsService,
    WorkbenchManageSpecialServicesService,
    WorkbenchManageTravelersService,
    WorkbenchManagePrimaryContactService,
    WorkbenchManageProductsService,
    WorkbenchManageOrganizationLoyaltyProgramService,
    WorkbenchManageAgencyServiceFeesService,
    WorkbenchManageTravelAgencyService,
    WorkbenchManageTravelAgencyCorporateCodeService,
    TicketService,
    EmdService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
