import { shallowMount } from '@vue/test-utils';

import DisplayName from '@/components/DisplayName';

describe('Composant DisplayName', () => {
	it('should not run test', () => {
		expect(1).toEqual(1);
	});

	it('Should display no text', () => {
		const wrapper = shallowMount(DisplayName);
		expect(wrapper.find('[data-test-id="message"]').exists()).toBe(false);
	});

	it('Should display name', async () => {
		const wrapper = shallowMount(DisplayName, { propsData: { introduction: 'Mon nom est ' } });
		wrapper.find("[data-test-id='fieldName']").text('Fabien');
		wrapper.vm.nom = 'Fabien';
		await wrapper.vm.displayNomAction();
		expect(wrapper.find('[data-test-id="message"]').text()).toContain('Mon nom est Fabien');
		wrapper.find('[data-test-id="buttonAction"]').trigger('click').then(() => {
			expect(wrapper.find('[data-test-id="message"]').text()).toContain('Fabien');
		});
	});
});
