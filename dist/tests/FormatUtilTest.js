Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const FormatUtil_1 = require("../scripts/modules/FormatUtil");
describe('currency', () => {
    it('should format a float as USD', () => {
        let value = 5.1;
        let output = (0, FormatUtil_1.currency)(value);
        (0, chai_1.expect)(output).to.equal('$5.10');
    });
});
//# sourceMappingURL=FormatUtilTest.js.map