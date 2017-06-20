import { mutations } from '@/store/index';

const {
  LOAD_API_MODEL,
  SELECT_OPERATION,
  SET_API_BASE_URI,
  SET_API_RELATIVE_URI,
  SELECT_API_PARAM,
  UNSELECT_API_PARAM,
} = mutations;

describe('mutations', () => {
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

  it('should update the store with a new API base URI', () => {
    const mockState = { baseURI: null };
    SET_API_BASE_URI(mockState, 'http://foo/bar/wombles');

    expect(mockState.baseURI).to.equal('http://foo/bar/wombles');
  });

  it('should update the store with a new API relative URI', () => {
    const mockState = { relativeURI: null };
    SET_API_RELATIVE_URI(mockState, 'marvin');

    expect(mockState.relativeURI).to.equal('marvin');
  });

  it('should add an API parameter on request', () => {
    const mockState = { queryParams: [] };
    SELECT_API_PARAM(mockState, 'foo', 'bar');

    expect(mockState.queryParams).to.have.length(1);
    expect(mockState.queryParams[0]).to.deep.equal({ foo: 'bar' });
  });

  it('should remove an API parameter on request', () => {
    const mockState = { queryParams: [{ foo: 'bar' }] };
    UNSELECT_API_PARAM(mockState, 'foo', 'bar');

    expect(mockState.queryParams).to.have.length(0);
  });
});
