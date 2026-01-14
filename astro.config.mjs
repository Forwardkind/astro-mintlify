import react from '@astrojs/react'
import starlight from '@astrojs/starlight'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://docs.forwardkind.com',
  integrations: [
    starlight({
      title: 'Forwardkind',
      logo: {
        light: './src/assets/fk-favicon.png',
        dark: './src/assets/light-logo.svg',
      },
      customCss: ['./src/styles/custom.css', './src/styles/tailwind.css'],
      social: {
        github: 'https://github.com/Forwardkind',
      },
      components: {
        Header: './src/components/Header.astro',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            {
              label: 'Overview & Welcome',
              slug: 'getting-started/overview',
            },
            {
              label: 'Who This Is For',
              slug: 'getting-started/audience',
            },
            {
              label: 'How to Use This Portal',
              slug: 'getting-started/how',
            },
            {
              label: 'Our Commitment',
              slug: 'getting-started/commitment',
            },
            {
              label: 'How to Get Involved',
              slug: 'getting-started/get-involved',
            },
          ],
        },
        {
          label: 'About Us',
          items: [
            {
              label: 'Mission, Vision & Values',
              slug: 'about-us/mission',
            },
            {
              label: 'Co-op Structure & Model',
              slug: 'about-us/model',
            },
            {
              label: 'Legal Documents & Policies',
              slug: 'about-us/legal-policy',
            },
          ],
        },
        {
          label: 'Membership',
          items: [
            {
              label: 'About Membership',
              slug: 'membership/about-membership',
            },
            {
              label: 'Member Benefits',
              slug: 'membership/benefits',
            },
            {
              label: 'Community Expectations',
              slug: 'membership/community-expectations',
            },
          ],
        },
        {
          label: 'Governance',
          items: [
            {
              label: 'About Governance',
              slug: 'governance/about-governance',
            },
            {
              label: 'Decision Making',
              slug: 'governance/decision-making',
            },
            {
              label: 'Change & Amendments',
              slug: 'governance/change-amendments',
            },
            {
              label: 'Accountability',
              slug: 'governance/accountability',
            },
            {
              label: 'Financial Transparency',
              slug: 'governance/financial-transparency',
            },
          ],
        },
        {
          label: 'Resources',
          items: [
            {
              label: 'Glossary',
              slug: 'resources/glossary',
            },
            {
              label: 'Learning & Education',
              slug: 'resources/learning',
            },
            {
              label: 'Tools We Use',
              slug: 'resources/tools',
            },
          ],
        },
      ],
    }),
    tailwind(),
    react(),
  ],
})
