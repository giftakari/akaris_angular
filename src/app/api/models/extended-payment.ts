/* tslint:disable */
/* eslint-disable */

/**
 * Note this field is deprecated in Payment schema and should be passed in FormOfPaymentPaymentCardExtendPayment schema
 */
export interface ExtendedPayment {

  /**
   * For Pagos Parceledos, specify the first installment amount. This will be the same currency as the payment
   */
  FirstInstallment?: number;

  /**
   * The number of installment payments to be charged by the payment card provider
   */
  NumberOfInstallments: number;

  /**
   * For Pagos Parceledos the OTATOCode
   */
  OTATOCode?: string;

  /**
   * For Pagos Parceledos, specify the remaining amount to be charged that will be spread across the number of installments. This will be the same currency as the payment
   */
  RemainingAmount?: number;
}
