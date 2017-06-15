import { mutations } from '@/store/index';

const { LOAD_API_MODEL, SELECT_OPERATION } = mutations;

describe('store', () => {
  describe('#mutations', () => {
    it('should update the store with a new model', () => {
      const mockState = { apiModel: {} };
      LOAD_API_MODEL(mockState, { thisModel: 'isFake' });
      expect(mockState.apiModel.thisModel).to.equal('isFake');
    });

    it('should update the store with a new selection for the operation', () => {
      const mockState = { currentOperationKey: null, currentResourceKey: null };
      const mockOperation = {
        key: () => 'op-key',
        resource: () => ({ key: () => 'resource-key' }),
      };
      SELECT_OPERATION(mockState, mockOperation);

      expect(mockState.currentOperation.key()).to.equal('op-key');
      expect(mockState.currentResource.key()).to.equal('resource-key');
    });
  });
});
