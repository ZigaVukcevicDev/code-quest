import { NumericListPipe } from '@shared/pipes/numeric-list/numeric-list.pipe';

describe('NumericListPipe', () => {
  it('create an instance', () => {
    const pipe = new NumericListPipe();
    expect(pipe).toBeTruthy();
  });
});
