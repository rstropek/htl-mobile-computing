import { VatCategoriesService, VatCategory } from './vat-categories.service';

describe('VatCategoriesService', () => {
  it('should return correct VAT for drinks', () => {
    const service = new VatCategoriesService();

    expect(service.getVat(VatCategory.Drinks)).toBe(10);
  });

  it('should return correct VAT for food', () => {
    const service = new VatCategoriesService();

    expect(service.getVat(VatCategory.Food)).toBe(20);
  });

  it('should return NaN for unknown category', () => {
    const service = new VatCategoriesService();

    expect(service.getVat(undefined)).toBeNaN();
  });
});
