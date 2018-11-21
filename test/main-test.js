'use strict';

describe('pos', () => {

  it('should print text', () => {

    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ];

    spyOn(console, 'log');

    printReceipt(tags);

    const expectText = `***<store earning no money>Receipt ***
Name: Sprite, Quantity: 5 bottles, Unit price: 3.00 (yuan), Subtotal: 12.00 (yuan)
Name: Litchi, Quantity: 2.5 kg, Unit price: 15.00 (yuan), Subtotal: 37.50 (yuan)
Name: Noodles, Quantity: 3 bags, Unit price: 4.50 (yuan), Subtotal: 9.00 (yuan)
----------------------
Total: 58.50 (yuan)
Saving: 7.50 (yuan)
**********************`;

    expect(console.log).toHaveBeenCalledWith(expectText);
  });
});
