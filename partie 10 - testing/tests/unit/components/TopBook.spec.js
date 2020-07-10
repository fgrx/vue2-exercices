import { shallowMount } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import axios from 'axios';

import TopBook from '@/components/TopBook';

jest.mock('axios', () => ({
	get: jest.fn()
}));

describe('TopBook component', () => {
	it('should display Mon tire de livre', async () => {
		const mockBook = { book: { title: 'Mon Titre de livre' } };
		axios.get.mockReturnValue(Promise.resolve({ data: mockBook }));

		jest.spyOn(window, 'alert').mockImplementation(() => {});

		const wrapper = shallowMount(TopBook);

		await flushPromises();

		expect(wrapper.vm.book).toEqual(mockBook);
		expect(wrapper.find('[data-test-id="bookTitle"]').text()).toContain('Mon Titre de livre');
		console.log('livre ', wrapper.vm.book);
	});
});
