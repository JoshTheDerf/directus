<template>
	<v-select
		:model-value="value"
		:disabled="disabled"
		:items="items"
		:placeholder="t('interfaces.system-storage.select_storage')"
		@update:model-value="$emit('input', $event)"
	/>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useServerStore } from '@/stores/';
import { useI18n } from 'vue-i18n';

export default defineComponent({
	props: {
		value: {
			type: String,
			default: null,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['input'],
	setup() {
		const { t } = useI18n();

		const serverStore = useServerStore();

		const storage = serverStore.info.storage as {
			disks: Record<string, { driver: string }>;
		};

		const items = computed(() => {
			return [
				{ text: t('interfaces.system-storage.system_default'), value: null },
				...Object.entries(storage.disks).map(([location, config]) => ({
					text: `${location} (${config.driver})`,
					value: location,
				})),
			];
		});

		return { items, t };
	},
});
</script>
