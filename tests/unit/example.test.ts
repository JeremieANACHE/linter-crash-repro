import { shallowMount, createLocalVue } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld.vue';
import vuetify from '@/plugins/vuetify';
import VueRouter from 'vue-router';
import VueI18n from 'vue-i18n';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const localVue = createLocalVue();
    localVue.use(vuetify);
    localVue.use(VueRouter);
    localVue.use(VueI18n);
    const wrapper = shallowMount(HelloWorld, {
      mocks: {
        $t: () => null
      },
      propsData: { msg },
      localVue
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
