import { shallowMount } from '@vue/test-utils';
import Acheter from '@/components/Acheter';

import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify);

describe('Acheter.vue', () => {
	it('should display Acheter', () => {
		const book = { quantity: 10 };
		const wrapper = shallowMount(Acheter, {
			propsData: {
				book
			}
		});

		expect(wrapper.text()).toMatch('Acheter');
	});

	it('should display épuisé', () => {
		const book = { quantity: 0 };
		const wrapper = shallowMount(Acheter, {
			propsData: {
				book
			}
		});

		expect(wrapper.text()).toContain('Epuisé');
	});

	it('should trigger buy action', async () => {
		const book = { quantity: 10 };

		const wrapper = shallowMount(Acheter, {
			propsData: {
				book
			}
		});

		const buyActionMock = jest.fn();
		wrapper.vm.buyAction = buyActionMock;

		wrapper.find('[data-test-id="buttonBuyAction"]').trigger('click').then(() => {
			expect(buyActionMock).toBeCalled();
		});
	});

	it('should be large', () => {
		const book = { quantity: 10 };

		const wrapper = shallowMount(Acheter, {
			propsData: {
				book,
				large: false
			}
		});

		expect(wrapper.find('.v-size--x-large')).toBeTruthy;
	});
});
