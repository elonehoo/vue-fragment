/**
 * @vitest-environment jsdom
 */
 import Vue,{defineComponent} from 'vue';
 import { mount } from '@vue/test-utils';
 import { Fragment } from '..';
 import {test,expect} from 'vitest'

 Vue.config.ignoredElements = [/./];

 test('Basic usage', () => {
   const FragComponent = defineComponent({
     template: '<fragment>hello</fragment>',
     components: {
       Fragment,
     },
   });

   const fragApp = {
     template: '<app><frag-component /></app>',
     components: {
       FragComponent,
     },
   };

   const wrapper = mount(fragApp);
   expect(wrapper.html()).toBe('<app>hello</app>')
 });
