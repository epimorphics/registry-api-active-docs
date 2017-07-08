import { mutations } from '@/store/index';

const {
  LOAD_API_MODEL,
  SELECT_OPERATION,
  SET_API_ABSOLUTE_URI,
  SELECT_API_PARAM,
  UNSELECT_API_PARAM,
  CLEAR_API_PARAMS,
  SET_API_ACTION,
  SET_API_RESULT,
  CLEAR_API_RESULT,
  SET_API_PAYLOAD,
  CLEAR_API_PAYLOAD,
  SET_API_RETURN_HEADERS,
  CLEAR_API_RETURN_HEADERS,
  CLEAR_API_SEGMENT_VARIABLES,
  SET_API_SEGMENT_VARIABLE,
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

  it('should update the store with a new API URI', () => {
    const mockState = { absoluteURI: null };
    SET_API_ABSOLUTE_URI(mockState, 'http://foo/bar/wombles');

    expect(mockState.absoluteURI).to.equal('http://foo/bar/wombles');
  });

  it('should add an API parameter on request', () => {
    const mockState = { queryParams: [] };
    SELECT_API_PARAM(mockState, { foo: 'bar' });

    expect(mockState.queryParams).to.have.length(1);
    expect(mockState.queryParams[0]).to.deep.equal({ foo: 'bar' });
  });

  it('should remove an API parameter on request', () => {
    const mockState = { queryParams: [{ foo: 'bar' }] };
    UNSELECT_API_PARAM(mockState, 'foo');

    expect(mockState.queryParams).to.have.length(0);
  });

  it('should remove an API parameter on request, even if the value is falsey', () => {
    const mockState = { queryParams: [{ foo: 0 }] };
    UNSELECT_API_PARAM(mockState, 'foo');

    expect(mockState.queryParams).to.have.length(0);
  });

  it('should remove all current API params on request', () => {
    const mockState = { queryParams: [{ foo: 'bar' }, { p: 'q' }, { life: 42 }] };
    CLEAR_API_PARAMS(mockState);

    expect(mockState.queryParams).to.have.length(0);
  });

  it('should set the current API action when requested', () => {
    const mockState = { apiAction: null };
    SET_API_ACTION(mockState, 'post');

    expect(mockState.apiAction).to.equal('post');
  });

  it('should record the API result when requested', () => {
    const mockState = { apiResult: null };
    SET_API_RESULT(mockState, '{"foo": "bar"}');

    expect(mockState.apiResult).to.equal('{"foo": "bar"}');
  });

  it('should clear the API result when requested', () => {
    const mockState = { apiResult: '{"foo": "bar"}' };
    CLEAR_API_RESULT(mockState);

    expect(mockState.apiResult).to.equal('');
  });

  it('should record the API payload when requested', () => {
    const mockState = { apiPayload: null };
    SET_API_PAYLOAD(mockState, '{"foo": "bar"}');

    expect(mockState.apiPayload).to.equal('{"foo": "bar"}');
  });

  it('should clear the API payload when requested', () => {
    const mockState = { apiPayload: '{"foo": "bar"}' };
    CLEAR_API_PAYLOAD(mockState);

    expect(mockState.apiPayload).to.equal('');
  });

  it('should record the API headers when requested', () => {
    const mockState = { apiReturnHeaders: null };
    SET_API_RETURN_HEADERS(mockState, '200 OK');

    expect(mockState.apiReturnHeaders).to.equal('200 OK');
  });

  it('should clear the API headers when requested', () => {
    const mockState = { apiReturnHeaders: '200 OK' };
    CLEAR_API_RETURN_HEADERS(mockState);

    expect(mockState.apiReturnHeaders).to.equal('');
  });

  it('should clear the API segment variables when requested', () => {
    const mockState = { apiSegmentVariables: { foo: 'bar' } };
    CLEAR_API_SEGMENT_VARIABLES(mockState);

    expect(mockState.apiSegmentVariables).to.deep.equal({});
  });

  it('should set an API segment variable when requested', () => {
    const mockState = { apiSegmentVariables: { foo: '42' } };
    SET_API_SEGMENT_VARIABLE(mockState, { foo: 'bar' });

    expect(mockState.apiSegmentVariables).to.deep.equal({ foo: 'bar' });
  });
});
