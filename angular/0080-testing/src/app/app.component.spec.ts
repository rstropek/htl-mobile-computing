import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { InvoiceCalculatorService, InvoiceLine, Invoice, InvoiceLineComplete } from './invoice-calculator.service';
import { FormsModule } from '@angular/forms';

class InvoiceCalculatorServiceMock {
  public CalculateInvoice(invoiceLines: InvoiceLine[]): Invoice {
    const completeInvoiceLines = invoiceLines.map<InvoiceLineComplete>(l => {
      return {
        product: l.product,
        vatCategory: l.vatCategory,
        priceInclusiveVat: l.priceInclusiveVat,
        priceExclusiveVat: 42
      };
    });
    return {
      invoiceLines: completeInvoiceLines,
      totalPriceExclusiveVat: 42,
      totalPriceInclusiveVat: 84,
      totalVat: 126
    };
  }
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: InvoiceCalculatorService, useValue: new InvoiceCalculatorServiceMock() }
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should disable add button if description of price are empty', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    const ne: HTMLElement = de.nativeElement;
    const app: AppComponent = de.componentInstance;

    const addButton: HTMLButtonElement = ne.querySelector('#add-button');

    fixture.detectChanges();
    expect(addButton.disabled).toBeTruthy();

    app.product = 'Pizza';
    app.priceInclusiveVat = 6;
    app.vatCategoryString = 'Food';
    fixture.detectChanges();

    expect(addButton.disabled).toBeFalsy();
  });

  it('should add invoice line correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    const ne: HTMLElement = de.nativeElement;
    const app: AppComponent = de.componentInstance;

    fixture.detectChanges();

    let invoiceLines = ne.querySelectorAll<HTMLTableRowElement>('#invoice-lines');
    expect(invoiceLines.length).toBe(0);

    const productInput: HTMLInputElement = ne.querySelector('#product-input');
    productInput.value = 'Pizza';
    productInput.dispatchEvent(new Event('input'));
    const vatCategoryInput: HTMLSelectElement = ne.querySelector('#vat-category-input');
    vatCategoryInput.value = 'Food';
    vatCategoryInput.dispatchEvent(new Event('input'));
    const priceInclusiveVatInput: HTMLInputElement = ne.querySelector('#priceInclusiveVat-input');
    priceInclusiveVatInput.value = '6';
    priceInclusiveVatInput.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    const addButton: HTMLButtonElement = ne.querySelector('#add-button');
    addButton.click();

    fixture.detectChanges();

    invoiceLines = ne.querySelectorAll<HTMLTableRowElement>('#invoice-lines');
    expect(invoiceLines.length).toBe(1);

    expect(invoiceLines[0].children[0].textContent).toBe('Pizza');
    expect(invoiceLines[0].children[1].textContent).toBe('6.00');
    expect(invoiceLines[0].children[2].textContent).toBe('42.00');
  });

  it('should calculate totals correctly', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement;
    const ne: HTMLElement = de.nativeElement;
    const app: AppComponent = de.componentInstance;

    app.product = 'Pizza';
    app.priceInclusiveVat = 6;
    app.vatCategoryString = 'Food';
    app.addInvoice();

    fixture.detectChanges();

    const totalPriceInclusiveVatInput: HTMLTableDataCellElement = ne.querySelector('#totalPriceInclusiveVat');
    expect(totalPriceInclusiveVatInput.textContent).toBe('84.00');
    const totalPriceExclusiveVatInput: HTMLTableDataCellElement = ne.querySelector('#totalPriceExclusiveVat');
    expect(totalPriceExclusiveVatInput.textContent).toBe('42.00');
  });
});
