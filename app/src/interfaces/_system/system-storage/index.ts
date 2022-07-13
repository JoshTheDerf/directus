import { defineInterface } from '@directus/shared/utils';
import InterfaceSystemStorage from './system-storage.vue';

export default defineInterface({
	id: 'system-storage',
	name: '$t:interfaces.system-storage.storage',
	description: '$t:interfaces.system-storage.description',
	icon: 'storage',
	component: InterfaceSystemStorage,
	types: ['string'],
	system: true,
	recommendedDisplays: ['raw'],
	options: {},
});
