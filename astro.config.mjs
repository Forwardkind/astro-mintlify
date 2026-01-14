import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://forwardkind.github.io',
  base: '/astro-mintlify',
  integrations: [
    starlight({
      title: 'starmint',
      logo: {
        light: './src/assets/dark-logo.svg',
        dark: './src/assets/light-logo.svg',
      },
      customCss: ['./src/styles/custom.css', './src/styles/tailwind.css'],
      social: {
        github: 'https://github.com/alexwhitmore/astro-mintlify',
      },
      components: {
        Header: './src/components/Header.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Introduction',
              slug: 'getting-started/introduction',
            },
            {
              label: 'Quickstart',
              slug: 'getting-started/quickstart',
            },
          ],
        },
        {
          label: 'Essentials',
          items: [
            {
              label: 'Creating Pages',
              slug: 'essentials/creating-pages',
            },
            {
              label: 'Theming',
              slug: 'essentials/theming',
            },
            {
              label: 'Images',
              slug: 'essentials/images',
            },
            {
              label: 'Deployments',
              slug: 'essentials/deployments',
            },
          ],
        },
        {
          label: 'Components',
          items: [
            {
              label: 'Badge',
              slug: 'components/badge',
            },
            {
              label: 'Asides',
              slug: 'components/asides',
            },
            {
              label: 'Tabs',
              slug: 'components/tabs',
            },
          ],
        },
      ],
    }),
    tailwind(),
    react(),
  ],
})
