import { InvoiceCalculatorService } from './invoice-calculator.service';
import { VatCategory } from './vat-categories.service';

describe('InvoiceCalculatorService', () => {
  it('should calculate price excl. VAT correctly', () => {
    const service = new InvoiceCalculatorService(undefined);
    expect(service.CalculatePriceExclusiveVat(12, 20)).toBe(10);
  });

  it('should calculate invoice correctly', () => {
    const dummyVat = 20;
    const dummyVatFactor = 1 + dummyVat / 100;
    const vatCategoriesServiceMock = {
      getVat: jasmine.createSpy('getVat').and.returnValue(dummyVat)
    };

    const service = new InvoiceCalculatorService(vatCategoriesServiceMock);

    const result = service.CalculateInvoice([
      { product: 'Pizza', priceInclusiveVat: 6, vatCategory: VatCategory.Food },
      { product: 'Drink', priceInclusiveVat: 3, vatCategory: VatCategory.Drinks },
    ]);

    expect(vatCategoriesServiceMock.getVat).toHaveBeenCalledTimes(2);

    expect(result).not.toBeFalsy();

    expect(result.totalPriceInclusiveVat).toBe(9);
    expect(result.totalPriceExclusiveVat).toBe(9 / dummyVatFactor);

    expect(result.invoiceLines.length).toBe(2);
    expect(result.invoiceLines[0].priceExclusiveVat).toBe(6 / dummyVatFactor);
    expect(result.invoiceLines[1].priceExclusiveVat).toBe(3 / dummyVatFactor);
  });
});
