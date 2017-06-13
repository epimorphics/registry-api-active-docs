import Vue from 'vue';
import ElementUI from 'element-ui';
import ActiveApiDoc from '@/components/ActiveApiDoc';

Vue.use(ElementUI);

describe('ActiveApiDoc.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ActiveApiDoc);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.o-index-container')).to.exist; // eslint-disable-line no-unused-expressions
    expect(vm.$el.querySelector('.o-api-description-container')).to.exist; // eslint-disable-line no-unused-expressions
  });
});
