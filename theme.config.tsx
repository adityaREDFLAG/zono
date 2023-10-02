import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Zono</span>,
  project: {
    link: 'https://github.com/zono-bot',
  },
  chat: {
    link: 'https://zono.bloxy.pro/server',
  },
  docsRepositoryBase: 'https://github.com/adityaredflag/zono',
  footer: {
    text: 'Zono Website',
  },
}
export default {
    navigation: {
      prev: true,
      next: true
    }
  }