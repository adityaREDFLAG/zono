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
  banner: {
    key: 'Inivte Swift.',
    text: (
      <a href="https://zono.bloxy.pro/swift" target="_blank">
        🎉 Invite Swift. →
      </a>
    )
  }
}
