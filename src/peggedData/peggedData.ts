import type { PeggedAsset } from "./types";

export type { PeggedAsset };

export const peggedCategoryList = ["stablecoins"]; // this should include all strings from union type PeggedCategory

/*
`chain` is the first chain of a protocol we tracked at defillama,
  so if a protocol launches on Ethereum and we start tracking it there, and then it launches on polygon and
  we start tracking it on both polygon and ethereum, then `chain` should be set to `Ethereum`.

`chains` is not used by the current code, but good to fill it out because it is used in our test to detect errors
*/

export default [
  {
    id: "1",
    name: "Tether",
    address: "0xdac17f958d2ee523a2206206994597c13d831ec7",
    symbol: "USDT",
    url: "https://tether.to/",
    description:
      "Tether tokens offer the stability and simplicity of fiat currencies coupled with the innovative nature of blockchain technology, representing a perfect combination of both worlds.",
    chain: "Ethereum",
    gecko_id: "tether",
    cmcId: "825",
    category: "stablecoins", // is for the frontend
    pegType: "peggedUSD", // should match balance key returned by adapter
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Polygon",
      "BSC",
      "Avalanche",
      "Solana",
      "Arbitrum",
      "Optimism",
      "Boba",
      "Metis",
      "Moonbeam",
      "KCC",
      "Moonriver",
      "Harmony",
      "Syscoin",
      "Heco",
      "OKExChain",
      "IoTeX",
      "Omni",
      "Aurora",
      "Algorand",
      "Milkomeda",
      "Kardia",
      "Telos",
      "Fuse",
      "TomoChain",
      "Meter",
      "Tron",
      "Liquidchain",
      "Bittorrent",
      "Crab",
      "EOS",
      "Statemine",
      "Evmos",
      "Oasis",
      "Terra",
      "Astar",
      "Gnosis",
      "Theta",
      "RSK",
      "REINetwork",
      "Loopring",
      "zkSync",
      "Shiden",
      "Fantom",
    ],
    twitter: "https://twitter.com/Tether_to",
  },
  {
    id: "2",
    name: "USD Coin",
    address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
    symbol: "USDC",
    url: "https://www.circle.com/usdc/",
    description: "Digital dollars for global business.",
    chain: "Ethereum",
    gecko_id: "usd-coin",
    cmcId: "3408",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Polygon",
      "BSC",
      "Solana",
      "Avalanche",
      "Arbitrum",
      "Optimism",
      "Boba",
      "Metis",
      "KCC",
      "Moonriver",
      "Harmony",
      "OKExChain",
      "Moonbeam",
      "Syscoin",
      "TomoChain",
      "Ronin",
      "Aurora",
      "Fuse",
      "Meter",
      "Telos",
      "Milkomeda",
      "Elastos",
      "Algorand",
      "Tron",
      "Terra",
      "Oasis",
      "Crab",
      "Evmos",
      "Astar",
      "Hedera",
      "Stellar",
      "Flow",
      "Gnosis",
      "Theta",
      "RSK",
      "REINetwork",
      "Loopring",
      "zkSync",
      "Shiden",
      "Fantom",
      "DFK",
    ],
    twitter: "",
  },
  {
    id: "3",
    name: "TerraUSD",
    address: "",
    symbol: "UST",
    url: "https://www.terra.money/",
    description: "Programmable money for the internet.",
    chain: "Terra",
    gecko_id: "terrausd",
    cmcId: "7129",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Terra",
      "Ethereum",
      "Polygon",
      "BSC",
      "Solana",
      "Harmony",
      "Fantom",
      "Aurora",
      "Avalanche",
      "Osmosis",
      "Moonbeam",
      "Oasis",
      "Celo",
      "Fuse",
      "Arbitrum",
      "Optimism",
      "Metis",
      "DFK",
    ],
    twitter: "https://twitter.com/terra_money",
  },
  {
    id: "4",
    name: "Binance USD",
    address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    symbol: "BUSD",
    url: "https://www.binance.com/en/busd",
    description:
      "BUSD is a 1:1 USD-backed stablecoin approved by the New York State Department of Financial Services (NYDFS), issued in partnership with Paxos.",
    chain: "Ethereum",
    gecko_id: "binance-usd",
    cmcId: "4687",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Harmony",
      "IoTeX",
      "OKExChain",
      "Moonriver",
      "Solana",
      "Polygon",
      "Fuse",
      "Meter",
      "Moonbeam",
      "Milkomeda",
      "Elastos",
      "Aurora",
      "Oasis",
      "Terra",
      "Shiden",
      "Astar",
      "Evmos",
      "Syscoin",
      "Boba",
      "Metis",
      "Fantom",
      "KCC",
      "RSK",
      "Theta",
    ],
    twitter: "https://twitter.com/PaxosGlobal",
  },
  {
    id: "5",
    name: "Dai",
    address: "0x6b175474e89094c44da98b954eedeac495271d0f",
    symbol: "DAI",
    url: "https://makerdao.com/",
    description:
      "Dai is a stable, decentralized currency that does not discriminate. Any individual or business can realize the advantages of digital money.",
    chain: "Ethereum",
    gecko_id: "dai",
    cmcId: "4943",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Solana",
      "Polygon",
      "BSC",
      "Optimism",
      "Harmony",
      "Avalanche",
      "Arbitrum",
      "Moonriver",
      "Aurora",
      "Fantom",
      "Moonbeam",
      "Syscoin",
      "Milkomeda",
      "Astar",
      "Oasis",
      "Evmos",
      "Gnosis",
      "Terra",
      "RSK",
      "REINetwork",
      "Loopring",
      "zkSync",
      "Aztec",
      "Velas",
      "Shiden",
      "Boba",
      "StarkNet",
    ],
    twitter: "https://twitter.com/MakerDAO",
  },
  {
    id: "6",
    name: "Frax",
    address: "0x853d955acef822db058eb8505911ed77f175b99e",
    symbol: "FRAX",
    url: "https://frax.finance/",
    description: "Frax is the world’s first fractional-algorithmic stablecoin.",
    chain: "Ethereum",
    gecko_id: "frax",
    cmcId: "6952",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Arbitrum",
      "Aurora",
      "Boba",
      "Fantom",
      "Evmos",
      "Harmony",
      "Moonbeam",
      "Moonriver",
      "Optimism",
      "Polygon",
      "Solana",
      "zkSync",
      "Milkomeda",
    ],
    twitter: "https://twitter.com/fraxfinance",
  },
  {
    id: "7",
    name: "TrueUSD",
    address: "0x0000000000085d4780b73119b644ae5ecd22b376",
    symbol: "TUSD",
    url: "https://trueusd.com/",
    description:
      "The first regulated stablecoin fully backed by the US Dollar.",
    chain: "Ethereum",
    gecko_id: "true-usd",
    cmcId: "2563",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "BSC",
      "Avalanche",
      "Polygon",
      "Arbitrum",
      "Fantom",
      "Tron",
      "Syscoin",
      "Heco",
      "Cronos",
    ],
    twitter: "https://twitter.com/tusdio",
  },
  {
    id: "8",
    name: "Liquity USD",
    address: "0x5f98805a4e8be255a32880fdec7f6728c6568ba0",
    symbol: "LUSD",
    url: "https://www.liquity.org/",
    description:
      "LUSD is an algorithmic, immutable, governance-free USD-pegged stablecoin used to pay out loans on the Liquity protocol. LUSD can be redeemed against the underlying Ether collateral at face value.",
    chain: "Ethereum",
    gecko_id: "liquity-usd",
    cmcId: "9566",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Ethereum", "Polygon", "Optimism"],
    twitter: "https://twitter.com/LiquityProtocol",
  },
  {
    id: "9",
    name: "Fei USD",
    address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    symbol: "FEI",
    url: "https://fei.money/",
    description:
      "Fei is a decentralized, scalable, and DeFi-native stablecoin protocol.",
    chain: "Ethereum",
    gecko_id: "fei-usd",
    cmcId: "8642",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Ethereum"],
    twitter: "https://twitter.com/feiprotocol",
  },
  {
    id: "10",
    name: "Magic Internet Money",
    address: "0x956f47f50a910163d8bf957cf5846d573e7f87ca",
    symbol: "MIM",
    url: "https://abracadabra.money/",
    description:
      "Abracadabra.money is a spell book that allows users to produce magic internet money.",
    chain: "Ethereum",
    gecko_id: "magic-internet-money",
    cmcId: "162",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: [
      "Ethereum",
      "Polygon",
      "Avalanche",
      "Arbitrum",
      "Fantom",
      "BSC",
      "Moonriver",
      "Boba",
      "Metis",
    ],
    twitter: "https://twitter.com/MIM_Spell",
  },
  {
    id: "11",
    name: "Pax Dollar",
    address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
    symbol: "USDP",
    url: "https://paxos.com/usdp/",
    description:
      "USDP gives customers the ability to store and send US Dollars with freedom, unrestricted by the limits of traditional banking.",
    chain: "Ethereum",
    gecko_id: "paxos-standard",
    cmcId: "3330",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Ethereum", "BSC"],
    twitter: "https://twitter.com/paxosglobal",
  },
  {
    id: "12",
    name: "Neutrino USD",
    address: "0x674c6ad92fd080e4004b2312b45f796a192d27a0",
    symbol: "USDN",
    url: "https://neutrino.at/",
    description:
      "Neutrino USD (USDN) is an algorithmic stablecoin pegged to the US dollar and backed by WAVES.",
    chain: "Waves",
    gecko_id: "neutrino",
    cmcId: "5068",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Waves", "Ethereum", "Polygon", "BSC"],
    twitter: "https://twitter.com/neutrino_proto",
  },
  {
    id: "13",
    name: "YUSD Stablecoin",
    address: "0x111111111111ed1d73f860f57b2798b683f2d325",
    symbol: "YUSD",
    url: "https://yeti.finance/",
    description:
      "Yeti Finance is a cross-margin lending protocol on Avalanche that allows users to borrow up to 21x against their portfolio and receive YUSD, an overcollateralized stablecoin.",
    chain: "Avalanche",
    gecko_id: "yusd-stablecoin",
    cmcId: "19577",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Avalanche"],
    twitter: "https://twitter.com/YetiFinance",
  },
  {
    id: "14",
    name: "USDD",
    address: "TPYmHEhy5n8TCEfYGqW2rPxsghSfzghPDn",
    symbol: "USDD",
    url: "https://usdd.io/",
    description:
      "USDD is a cryptocurrency issued by the TRON DAO Reserve with a stable price and diverse use cases.",
    chain: "Tron",
    gecko_id: "usdd",
    cmcId: "19891",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Tron", "Bittorrent", "Ethereum", "BSC"],
    twitter: "https://twitter.com/usddio",
  },
  {
    id: "15",
    name: "Dola",
    address: "0x865377367054516e17014ccded1e7d814edc9ce4",
    symbol: "DOLA",
    url: "https://www.inverse.finance/",
    description:
      "DOLA is a stablecoin pegged to the US Dollar.  It can also be used as collateral within the Frontier protocol to achieve high capital efficiency, leverage and native yield.",
    chain: "Ethereum",
    gecko_id: "dola-usd",
    cmcId: "19191",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Ethereum", "Fantom"],
    twitter: "https://twitter.com/InverseFinance",
  },
  {
    id: "16",
    name: "Parrot USD",
    address: "Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS",
    symbol: "PAI",
    url: "https://parrot.fi/",
    description:
      "The Parrot Protocol is a DeFi network built on Solana that will include the stablecoin PAI, a non-custodial lending market, and a margin trading vAMM.",
    chain: "Solana",
    gecko_id: "parrot-usd",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "birdeye",
    chains: ["Solana"],
    twitter: "https://twitter.com/gopartyparrot",
  },
  {
    id: "17",
    name: "HUSD",
    address: "0xdf574c24545e5ffecb9a659c229253d4111d87e1",
    symbol: "HUSD",
    url: "https://www.stcoins.com/",
    description:
      "Combining the stability of the U.S. dollar with the efficiency of blockchain technology, HUSD is designed to be secure, liquid and convenient.",
    chain: "Ethereum",
    gecko_id: "husd",
    cmcId: "4779",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Ethereum", "Tron", "Heco", "Elastos", "Solana"],
    twitter: "https://twitter.com/Stablecoin_HUSD",
  },
  {
    id: "18",
    name: "Nexus USD",
    address: "0x1b84765de8b7566e4ceaf4d0fd3c5af52d3dde4f",
    symbol: "NUSD",
    url: "https://synapseprotocol.com/",
    description:
      'nUSD, or "nexus" USD, is a cross-chain stablecoin fully backed by the nexus stablecoin liquidity pool on Ethereum consisting of DAI, USDC, and USDT.',
    chain: "Ethereum",
    gecko_id: "nexus-usd",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: null,
    chains: [
      "Ethereum",
      "BSC",
      "Polygon",
      "Avalanche",
      "Arbitrum",
      "Fantom",
      "Harmony",
      "Boba",
      "Optimism",
      "Cronos",
      "Metis",
      "DFK",
    ],
    twitter: "https://twitter.com/SynapseProtocol",
  },
  {
    id: "19",
    name: "Gemini Dollar",
    address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
    symbol: "GUSD",
    url: "https://www.gemini.com/dollar",
    description:
      "GUSD is a 1:1 USD-backed stablecoin issued by Gemini. Gemini customers can redeem a GUSD for $1 at Gemini.",
    chain: "Ethereum",
    gecko_id: "gemini-dollar",
    cmcId: "3306",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Ethereum", "Wanchain"],
    twitter: "https://twitter.com/gemini",
  },
  {
    id: "20",
    name: "Alchemix USD",
    address: "0xbc6da0fe9ad5f3b0d58160288917aa56653660e9",
    symbol: "ALUSD",
    url: "https://alchemix.fi/",
    description:
      "alUSD is a yield-backed synthetic stablecoin powered by the Alchemix protocol.",
    chain: "Ethereum",
    gecko_id: "alchemix-usd",
    cmcId: "8614",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Ethereum", "Arbitrum", "Optimism", "Fantom"],
    twitter: "https://twitter.com/AlchemixFi",
  },
  {
    id: "21",
    name: "flexUSD",
    address: "0xa774ffb4af6b0a91331c084e1aebae6ad535e6f3",
    symbol: "FLEXUSD",
    url: "https://coinflex.com/",
    description: "flexUSD is the first interest-earning stablecoin in crypto.",
    chain: "Ethereum",
    gecko_id: "flex-usd",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "coingecko",
    chains: ["Ethereum", "smartBCH"],
    twitter: "https://twitter.com/coinflexdotcom",
  },
  {
    id: "22",
    name: "sUSD",
    address: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
    symbol: "SUSD",
    url: "https://synthetix.io/",
    description:
      "Synthetix is a protocol for issuing and trading synthetic assets on Ethereum. Each synthetic asset (or Synth) is an ERC20 token which tracks the price of an external asset; for example each sUSD token tracks the price of the US dollar.",
    chain: "Ethereum",
    gecko_id: "nusd",
    cmcId: "2927",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Ethereum", "Arbitrum", "Optimism", "Fantom"],
    twitter: "https://twitter.com/synthetix_io",
  },
  {
    id: "23",
    name: "Origin Dollar",
    address: "0x2a8e1e676ec238d8a992307b495b45b3feaa5e86",
    symbol: "OUSD",
    url: "https://www.ousd.com/",
    description:
      "The first stablecoin that earns a yield while it’s still in your wallet.",
    chain: "Ethereum",
    gecko_id: "origin-dollar",
    cmcId: "7189",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Ethereum"],
    twitter: "https://twitter.com/originprotocol",
  },
  {
    id: "24",
    name: "Celo Dollar",
    address: "0x765de816845861e75a25fca122bb6898b8b1282a",
    symbol: "CUSD",
    url: "https://celo.org/",
    description:
      "Celo Dollars (cUSD) are stablecoins that follow the US Dollar and are native to the Celo blockchain's Reserve system. The Celo Reserve is a system of smart contracts that uses a portfolio of cryptocurrencies to expand and contract the supply cUSD, similar to MakerDAO's lending protocol.",
    chain: "Celo",
    gecko_id: "celo-dollar",
    cmcId: "7236",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "coingecko",
    chains: ["Celo", "Ethereum", "Solana"],
    twitter: "https://twitter.com/CeloOrg",
  },
  {
    id: "25",
    name: "Reserve",
    address: "0x196f4727526ea7fb1e17b2071b3d8eaa38486988",
    symbol: "RSV",
    url: "https://reserve.org/",
    description:
      "RSV is backed by a basket of on-chain collateral assets, held by the Reserve Vault smart contract. This basket is comprised of equal parts TUSD, PAX, and USDC.",
    chain: "Ethereum",
    gecko_id: "reserve",
    cmcId: "6727",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "uniswap",
    chains: ["Ethereum", "Gnosis"],
    twitter: "https://twitter.com/holareserve",
  },
  {
    id: "26",
    name: "mStable USD",
    address: "0xe2f2a5c287993345a840db3b0845fbc70f5935a5",
    symbol: "MUSD",
    url: "https://mstable.org/",
    description:
      "Trade and earn yield on your stablecoins on mStable, a decentralised and non-custodial protocol powered by $MTA.",
    chain: "Ethereum",
    gecko_id: "musd",
    cmcId: "5747",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "coingecko",
    chains: ["Ethereum", "Polygon", "Gnosis"],
    twitter: "https://twitter.com/mstable_",
  },
  {
    id: "27",
    name: "USDK",
    address: "0x1c48f86ae57291f7686349f12601910bd8d470bb",
    symbol: "USDK",
    url: "https://www.oklink.com/en",
    description:
      "USDK-Stablecoin Powered by Blockchain and US Licenced Trust Company.",
    chain: "Ethereum",
    gecko_id: "usdk",
    cmcId: "4064",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["Ethereum", "Polygon", "OKExChain", "Solana"],
    twitter: "https://twitter.com/OKLink",
  },
  {
    id: "28",
    name: "Vai",
    address: "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
    symbol: "VAI",
    url: "https://venus.io/",
    description:
      "Vai is Venus Protocol's native decentralized stablecoin that is minted and redeemed directly on the Venus platform running on Binance Smart Chain.",
    chain: "BSC",
    gecko_id: "vai",
    cmcId: "7824",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "chainlink",
    chains: ["BSC"],
    twitter: "https://twitter.com/VenusProtocol",
  },
  {
    id: "29",
    name: "TOR",
    address: "0x74e23df9110aa9ea0b6ff2faee01e740ca1c642e",
    symbol: "TOR",
    url: "https://tor.cash/",
    description:
      "TOR is a fully collateralized, backed by the Hector Treasury, stablecoin built on the Fantom Opera Chain.",
    chain: "Fantom",
    gecko_id: "tor",
    cmcId: "18105",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Fantom"],
    twitter: "https://twitter.com/HectorDAO_HEC",
  },
  {
    id: "30",
    name: "Dollar on Chain",
    address: "0xe700691dA7b9851F2F35f8b8182c69c53CcaD9Db",
    symbol: "DOC",
    url: "https://moneyonchain.com/doc-bitcoin-backed-stablecoin/",
    description:
      "Dollar on Chain is the ideal stablecoin for daily transactions and users seeking to hold current value without leaving the benefits of bitcoin.",
    chain: "RSK",
    gecko_id: "doc",
    cmcId: "7558",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: null,
    chains: ["RSK"],
    twitter: "https://twitter.com/moneyonchainok",
  },
  {
    id: "31",
    name: "SpiceUSD",
    address: "0xab05b04743e0aeaf9d2ca81e5d3b8385e4bf961e",
    symbol: "USDS",
    url: "https://app.spicetrade.ai/",
    description:
      "Spice Protocol has rolled out two tokens: Spice (Ticker: SPICE) is the base token and Spice USD (Ticker USDS) is soft-pegged to USD.",
    chain: "Avalanche",
    gecko_id: "spiceusd",
    cmcId: "20306",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Avalanche", "Ethereum", "Polygon", "BSC"],
    twitter: "https://twitter.com/spicetradeai",
  },
  {
    id: "32",
    name: "Sperax USD",
    address: "0xd74f5255d557944cf7dd0e45ff521520002d5748",
    symbol: "USDS",
    url: "https://sperax.io/",
    description:
      "Sperax USD (USDs) is primarily backed by crypto collateral which generates organic yield for it’s holders.",
    chain: "Arbitrum",
    gecko_id: "sperax-usd",
    cmcId: "17285",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Arbitrum"],
    twitter: "https://twitter.com/SperaxUSD",
  },
  {
    id: "33",
    name: "USDP Stablecoin",
    address: "0x1456688345527be1f37e9e627da0837d6f08c925",
    symbol: "USDP",
    url: "https://unit.xyz/",
    description:
      "USDP is a decentralized and unbiased stablecoin whose value is soft-pegged to US Dollar. It’s fully-backed by collateral, in the form of third-party cryptoassets, stored in the Unit Protocol.",
    chain: "Ethereum",
    gecko_id: "usdp",
    cmcId: "8886",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "coingecko",
    chains: ["Ethereum", "Gnosis", "BSC", "Fantom"],
    twitter: "https://twitter.com/unitprotocol",
  },
  {
    id: "34",
    name: "USD Balance",
    address: "0x6fc9383486c163fa48becdec79d6058f984f62ca",
    symbol: "USDB",
    url: "https://www.usdbalance.com/",
    description:
      "USDB is a revolutionary stablecoin developed by the financial strategists and developers at FantOHM DAO.",
    chain: "Fantom",
    gecko_id: "usd-balance",
    cmcId: "19224",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: ["Fantom"],
    twitter: "https://twitter.com/USDB_",
  },
  {
    id: "35",
    name: "MAI",
    address: "0xa3fa99a148fa48d14ed51d610c367c61876997f1",
    symbol: "MAI",
    url: "https://www.mai.finance/",
    description:
      "MAI is a stablecoin backed by collateral, and can only be minted with this collateral backing it. MAI is created when users deposit accepted tokens (currently MATIC) as collateral in vaults and in turn receive a loan against that collateral.",
    chain: "Fantom",
    gecko_id: "mimatic",
    cmcId: "10238",
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "dexscreener",
    chains: [
      "Polygon",
      "Fantom",
      "Avalanche",
      "Moonriver",
      "Harmony",
      "Cronos",
      "Optimism",
      "BSC",
      "Arbitrum",
      "Gnosis",
      "Solana",
      "IoTeX",
      "Aurora",
      "Celo",
      "Metis",
      "Milkomeda",
    ],
    twitter: "https://twitter.com/QiDaoProtocol",
  },
  {
    id: "36",
    name: "Ratio Stable Coin",
    address: "USDrbBQwQbQ2oWHUPfA8QBHcyVxKUq1xHyXsSLKdUq2",
    symbol: "USDR",
    url: "https://ratio.finance/",
    description:
      "USDr is the first-ever algorithmically risk-adjusted Collateralized Debt Position. Users can mint USDr using stable yield-bearing assets, starting with stablecoin LP from Saber.",
    chain: "Solana",
    gecko_id: "ratio-stable-coin",
    cmcId: null,
    category: "stablecoins",
    pegType: "peggedUSD",
    priceSource: "birdeye",
    chains: ["Solana"],
    twitter: "https://twitter.com/ratiofinance",
  },
] as PeggedAsset[];
