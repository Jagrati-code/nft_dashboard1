# [NFT Sales Analytics Dashboard- By ITTECTS]

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)

![Product Gif](https://drive.google.com/file/d/11aEwb43Fe79W0APz5KY_m7pw1P5jmxFu/view?usp=share_link)

Imagine buying a piece of digital artwork on the Internet at a reasonable price and getting a unique digital token known which proves your authority over the artwork you bought. Wouldn't it be great? Well, that opportunity exists now, thanks to NFTs.

NFTs are currently taking the digital art and collectables world by storm. Just as everyone worldwide believed Bitcoin was the digital answer to currency, NFTs are now pitched as the digital answer to collectibles. Asa result, digital artists are seeing their lives changing thanks to the massive sales to a new crypto audience. 

If you are interested in NFTs and want to explore more about what they are, you have come to the right place. Let’s dive in and see what all the fuss is about!

**Why NFT Analytics Are Important**
Things can feel fast-paced and chaotic in the world of NFTs. That’s because they are! But don’t worry, you’re not alone in web3. To help make sense of the everchanging NFT landscape, traders look to NFT analytic tools for insights, trends, and a greater understanding of NFT trading dynamics on which they can base their decisions.
But before we break down why NFT analytics are so important, it’s essential to understand why the underlying technology of NFTs is important to collectors. Unlike fungibles (say BTC or BAT), which serve their own unique purpose, non-fungible tokens are one-of-a-kind digital assets that are backed by an underlying “receipt” confirmed on a decentralized blockchain. Due to the immutable nature of NFTs, they provide immense value to industries like art, gaming, and event access, where provable authentication is critical.
When collecting and trading NFTs, it is necessary to be making data-backed decisions; otherwise, you could fall prey to rug pulls or “being left holding the bag.”


#### Special thanks

During the development of this dashboard, we have used many existing resources from awesome developers. We want to thank them for providing their tools open source:

- [Chakra UI] - Modern Open source framework
- [ApexCharts.js] - Modern & Interactive Open-source charts
- [Quill Editor] - ReactJS Text Editor provided by Quill
- [React Table] - Collection of hooks for building powerful ReactJD tables
- [ReactJS] - A popular JavaScript library for building user interfaces


## Table of Contents

- [NFT Sales Analytics Dashboard By- ITTECTS]
- [Table of Contents](#table-of-contents)
- [Versions](#versions)
- [Quick start](#terminal-commands)
- [Documentation](#documentation)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)

## Versions

[<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/react-logo.jpg?raw=true" width="60" height="60" />]

| React | Chakra |
| ]------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 

## Terminal Commands

1. Download and Install NodeJs LTS version from [NodeJs Official Page](https://nodejs.org/en/download/).
2. Navigate to the root / directory and run yarn install/npm install to install our local dependencies.

## File Structure

Within the download you'll find the following directories and files:

```
vision-dashboard-chakra-free/
├── .gitattributes
├── .gitigonore
├── CHANGELOG.md
├── commit.sh
├── gulpfile.js
├── ISSUE_TEMPLATE.md
├── jsconfig.json
├── package.json
├── README.md
├── public
│   ├── favicon.png
│   ├── index.html
│   ├── apple-icon.png
│   ├── robots.txt
│   └── manifest.json
└── src
    ├── assets
    │   ├── img
    │   └── svg
    ├── components
    │   ├── Card
    │   │   ├── Card.js
    │   │   ├── CardBody.js
    │   │   └── CardHeader.js
    │   ├── Charts
    │   │   ├── BarChart.js
    │   │   └── LineChart.js
    │   ├── Configurator
    │   │   └── Configurator.js
    │   ├── FixedPlugin
    │   │   └── FixedPlugin.js
    │   ├── Footer
    │   │   └── Footer.js
    │   ├── GradientBorder
    │   │   └── GradientBorder.js
    │   ├── Icons
    │   │   ├── IconBox.js
    │   │   └── Icons.js
    │   ├── Layout
    │   │   ├── MainPanel.js
    │   │   ├── PanelContainer.js
    │   │   └── PanelContent.js
    │   ├── Menu
    │   │   └── ItemContent.js
    │   ├── Navbars
    │   │   ├── Searchbar
    │   │   │   └── SearchBar.js
    │   │   ├── AdminNavbar.js
    │   │   ├── AdminNavbarLinks.js
    │   │   └── AuthNavbar.js
    │   ├── Other
    │   │   ├── BillingRow.js
    │   │   ├── InvoicesRow.js
    │   │   └── TransactionRow.js
    │   ├── Separator
    │   │   └── Separator.js
    │   ├── Sidebar
    │   │   ├── Sidebar.js
    │   │   └── SidebarHelp.js
    │   └── Tables
    │       ├── BillingRow.js
    │       ├── DashboardTableRow.js
    │       ├── InvoicesRow.js
    │       ├── TablesProjectRow.js
    │       ├── TablesTableRow.js
    │       ├── TimelineRow.js
    │       └── TransactionRow.js
    ├── layouts
    │   ├── Admin.js
    │   ├── Auth.js
    │   └── RTL.js
    ├── theme
    │   ├── additions
    │   │   ├── card
    │   │   │   ├── Card.js
    │   │   │   ├── CardBody.js
    │   │   │   └── CardHeader.js
    │   │   ├── layout
    │   │   │   ├── MainPanel.js
    │   │   │   ├── PanelContainer.js
    │   │   │   └── PanelContent.js
    │   ├── components
    │   │   ├── badge.js
    │   │   ├── button.js
    │   │   ├── link.js
    │   │   └── drawer.js
    │   ├── foundations
    │   │   └── breakpoints.js
    │   ├── bgAdmin.js
    │   ├── bgAuth.js
    │   ├── styles.js
    │   ├── themeAdmin.js
    │   └── themeAuth.js
    ├── variables
    │   ├── charts.js
    │   └── general.js
    ├── views
    │   ├── Dashboard
    │   │   ├── Billing.js
    │   │   ├── Dashboard.js
    │   │   ├── Nft.js
    │   │   ├── Profile.js
    │   │   └── Tables.js
    │   ├── Pages
    │       ├── SignIn.js
    │       └── SignUp.js
    │   └── RTL
    │       └── RTLPage.js
    ├── index.js
    └── routes.js
```

## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">
