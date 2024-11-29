import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				'base-100': 'hsl(226, 45%, 47%, 50%)',
				'base-200': '#5e82fc',
				'light-100': '#98addd',
				'light-200': '#e7e9f6'
			}
		}
	},

	plugins: [
		typography,
		forms,
		containerQueries,
	],

} satisfies Config;
