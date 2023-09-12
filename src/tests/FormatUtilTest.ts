import { expect } from 'chai';
import { currency } from '../scripts/modules/FormatUtil';

describe('currency', () => {
    it('should format a float as USD', () => {
        let value = 5.1;
        let output = currency(value);
        expect(output).to.equal('$5.10');
    });
});