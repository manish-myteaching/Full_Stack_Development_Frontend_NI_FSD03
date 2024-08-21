import { PriceFormat } from './price-format.pipe';

describe('PriceFormatPipePipe', () => {
  it('create an instance', () => {
    const pipe = new PriceFormat();
    expect(pipe).toBeTruthy();
  });
});
