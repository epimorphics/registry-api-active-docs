import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import ActiveApiIndexEntry from '@/components/ActiveApiIndexEntry';

Vue.use(ElementUI);
Vue.use(Vuex);

function mockStore() {
  return new Vuex.Store({
    state: {
      currentOperation: {
        key: () => 'mock-key',
      },
    },
  });
}

function mockOperation(keyName) {
  return {
    operation: {
      key: () => keyName,
      displayName: () => 'mock',
      action: () => 'get',
    },
  };
}

describe('ActiveApiIndexEntry.vue', () => {
  it('should render correct contents when no operation is passed', () => {
    const Constructor = Vue.extend(ActiveApiIndexEntry);
    const vm = new Constructor({
      propsData: mockOperation('mock-key-no-match'),
      store: mockStore(),
    }).$mount();

    const cssClasses = vm.$el.className.split(' ');
    expect(cssClasses).to.include('c-api-index-entry');
    expect(cssClasses).to.not.include('u-selected');
  });

  it('should render correct contents when an operation with a different key is passed', () => {
    const Constructor = Vue.extend(ActiveApiIndexEntry);
    const vm = new Constructor({
      propsData: mockOperation('mock-key-no-match'),
      store: mockStore(),
    }).$mount();

    const cssClasses = vm.$el.className.split(' ');
    expect(cssClasses).to.include('c-api-index-entry');
    expect(cssClasses).to.not.include('u-selected');
  });

  it('should render correct contents when a matching operation is passed', () => {
    const Constructor = Vue.extend(ActiveApiIndexEntry);
    const vm = new Constructor({
      propsData: mockOperation('mock-key'),
      store: mockStore(),
    }).$mount();

    const cssClasses = vm.$el.className.split(' ');
    expect(cssClasses).to.include('c-api-index-entry');
    expect(cssClasses).to.include('u-selected');
  });
});
