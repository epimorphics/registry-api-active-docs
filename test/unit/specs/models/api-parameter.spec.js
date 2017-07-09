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
      const expectedTypes = [
        'boolean',
        'boolean',
        'number',
        'enum',
        'enum',
        'datetime',
        'enum',
        'string',
        'string',
        'date',
        'date',
        'date',
        'date',
      ];

      _.each(compTypes, (t, i) => {
        expect(t, `compTypes[${i}]`).to.equal(expectedTypes[i]);
      });
    });
  });

  describe('#enumValues', () => {
    it('should return the enumeration of values', () => {
      expect(meth.apiParameters()[3].enumValues()).to.deep.equal(['any', 'accepted']);
    });
  });

  describe('#name', () => {
    it('should return the name of the parameter', () => {
      expect(param.name()).to.equal('non-member-properties');
    });
  });

  describe('#hasDefaultValue', () => {
    it('should return true if a default value is specified', () => {
      const notFormatParam = _.find(meth.apiParameters(), p => p.name() !== '_format');
      expect(notFormatParam.hasDefaultValue()).to.equal(false);

      const formatParam = _.find(meth.apiParameters(), p => p.name() === '_format');
      expect(formatParam.hasDefaultValue()).to.equal(true);
    });
  });

  describe('#defaultValue', () => {
    it('should return a default value if specified', () => {
      const notFormatParam = _.find(meth.apiParameters(), p => p.name() !== '_format');
      expect(_.isUndefined(notFormatParam.defaultValue())).to.equal(true);

      const formatParam = _.find(meth.apiParameters(), p => p.name() === '_format');
      expect(formatParam.defaultValue()).to.equal('json-ld');
    });
  });
});
