import _ from 'lodash';
import ApiResource from '@/models/api-resource';
import FIXTURE from './api-resource-fixture';

const r = new ApiResource(FIXTURE);
const meth = r.methods()[0];
const param = meth.apiParameters()[0];

describe('ApiParameter', () => {
  describe('#displayName()', () => {
    it('should return the display name of the parameter', () => {
      expect(param.displayName()).to.equal('Return metadata only');
    });
  });

  describe('#componentType()', () => {
    it('should return the type of component to use', () => {
      const compTypes = _.map(meth.apiParameters(), apiParam => apiParam.componentType());
      expect(compTypes).to.deep.equal([
        'boolean',
        'boolean',
        'number',
        'string',
        'string',
        'datetime',
        'enum',
      ]);
    });
  });
});
