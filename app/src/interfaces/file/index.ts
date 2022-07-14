import { defineInterface } from '@directus/shared/utils';
import InterfaceFile from './file.vue';
import PreviewSVG from './preview.svg?raw';

export default defineInterface({
	id: 'file',
	name: '$t:interfaces.file.file',
	description: '$t:interfaces.file.description',
	icon: 'note_add',
	component: InterfaceFile,
	types: ['uuid'],
	localTypes: ['file'],
	group: 'relational',
	relational: true,
	options: [
		{
			field: 'folder',
			name: '$t:interfaces.system-folder.folder',
			type: 'uuid',
			meta: {
				width: 'half',
				interface: 'system-folder',
				note: '$t:interfaces.system-folder.field_hint',
			},
			schema: {
				default_value: undefined,
			},
		},
		{
			field: 'storage',
			name: '$t:interfaces.system-storage.storage',
			type: 'string',
			meta: {
				width: 'half',
				interface: 'system-storage',
				note: '$t:interfaces.system-storage.field_hint',
			},
			schema: {
				default_value: undefined,
			},
		},
	],
	recommendedDisplays: ['file'],
	preview: PreviewSVG,
});
