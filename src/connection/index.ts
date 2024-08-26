"use client"
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 2. Set chains
const OpenCampus = {
  chainId: 656476,
  name: 'Open-campus-chain',
  currency: 'EDU',
  explorerUrl: 'https://etherscan.io',
  rpcUrl: process.env.NEXT_PUBLIC_rpc_url || '',
}

// 3. Create a metadata object
const metadata = {
  name: 'LearningFi',
  description: 'A decentralized student grant and loaning platform',
  url: 'https://mywebsite.com', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: '...', // used for the Coinbase SDK
  defaultChainId: 1 // used for the Coinbase SDK
})

// 5. Create a AppKit instance
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [OpenCampus],
    projectId: process.env.NEXT_PUBLIC_project_ID || "",
    enableAnalytics: false, // Optional - defaults to your Cloud configuration,
    themeVariables: {
        '--w3m-color-mix': '#005A5A',
        '--w3m-color-mix-strength': 4
      }
  });

  export function AppKit({ children }: any) {
    return children
  }
