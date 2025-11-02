// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	ssr: true,

	content: {
		experimental: { nativeSqlite: true },
	},
	app: {
		head: {
			meta: [
				{
					name: 'robots',
					content: 'noindex',
				},
			],
		},
	},

	modules: ['@nuxt/content', '@nuxt/image', '@nuxt/test-utils', '@nuxt/ui'],
})
