// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://job.nandanvarma.com", // Change this to your production URL.
	description:
		"Jobs for solo dudes.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "/ogImage.png", // Change this to your website's thumbnail.
		alt: "Jobs for solo dudes.", // Change this to your website's thumbnail description.
		width: 1080,
		height: 1920
	},
	siteName: "Jobs", // Change this to your website's name,
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Jobs", // Change this to your website's name.
	short_name: "Jobs", // Change this to your website's short name.
	description:
		"Jobs for solo dudes.", // Change this to your websites description.
	theme_color: "#30E130", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "minimal-ui",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
