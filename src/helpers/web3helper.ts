// React + Web3 Essentials
import * as ethers from "ethers";
import Resolution from "@unstoppabledomains/resolution";

const infuraAPIKey = "dd262cc008764b29bd6a15249db4772e";

export const allowedNetworks = [
  1, //for ethereum mainnet
  137, //for polygon mainnet
  56, // for bnb mainnet
  // 10, // for optimism mainnet
  42161, // arbitrum mainnet
  1101, // polygon zkevm mainnet
  122, // fuse mainnet
  7560, // Cyber mainnet
  8453, //base mainnet
  59144, // Linea mainnet
];

export enum ENV {
  PROD = "prod",
  STAGING = "staging",
  DEV = "dev",
  /**
   * **This is for local development only**
   */
  LOCAL = "local",
}

const Constants = {
  ENV,
  PAGINATION: {
    INITIAL_PAGE: 1,
    LIMIT: 10,
    LIMIT_MIN: 1,
    LIMIT_MAX: 50,
  },
  DEFAULT_CHAIN_ID: 5,
  DEV_CHAIN_ID: 99999,
  NON_ETH_CHAINS: [137, 80001, 56, 97, 10, 420, 1442, 1101],
  ETH_CHAINS: [1, 5],
};

export interface AddressValidatorsType {
  [key: string]: ({ address }: { address: string }) => boolean;
}

export function isValidETHAddress(address: string) {
  return ethers.utils.isAddress(address);
}

const AddressValidators: AddressValidatorsType = {
  // Ethereum
  eip155: ({ address }: { address: string }) => {
    return isValidETHAddress(address);
  },
  // Add other chains here
};

export function validateCAIP(addressInCAIP: string) {
  const [blockchain, networkId, address] = addressInCAIP.split(":");

  if (!blockchain) return false;
  if (!networkId) return false;
  if (!address) return false;

  const validatorFn = AddressValidators[blockchain];

  return validatorFn({ address });
}

export function getFallbackETHCAIPAddress(env: ENV, address: string) {
  let chainId = 1; // by default PROD

  if (env === Constants.ENV.DEV || env === Constants.ENV.STAGING) {
    chainId = 5;
  }

  return `eip155:${chainId}:${address}`;
}

/**
 * This helper
 *  checks if a VALID CAIP
 *    return the CAIP
 *  else
 *    check if valid ETH
 *      return a CAIP representation of that address (EIP155 + env)
 *    else
 *      throw error!
 */
export function getCAIPAddress(env: ENV, address: string, msg?: string) {
  if (validateCAIP(address)) {
    return address;
  } else {
    if (isValidETHAddress(address)) {
      return getFallbackETHCAIPAddress(env, address);
    } else {
      throw Error(`Invalid Address! ${msg}`);
    }
  }
}

// P = Partial CAIP
export const walletToPCAIP10 = (account: string): string => {
  if (account?.includes("eip155:")) {
    return account;
  }
  return "eip155:" + account;
};

export const walletToFullCAIP10 = (
  account: string,
  chainId: string,
  chain: string,
): string => {
  if (account?.includes(":")) {
    return account;
  }

  let prefix = "eip155";

  if (chain == "solana" || chainId === "5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp") {
    prefix = "solana";
  }

  if (chainId === "devnet") {
    prefix = "push";
  }

  return `${prefix}:${chainId}:${account}`;
};

export const fullCAIP10ToWallet = (wallet: string): string => {
  if (!wallet) return "";

  return wallet.replace("eip155:", "").split(":").pop() || "";
};

export const pCAIP10ToWallet = (wallet: string): string => {
  wallet = wallet?.replace("eip155:", "");
  return wallet;
};

export const toChecksumAddress = (address: string): string => {
  return ethers.utils.getAddress(address);
};

export const shortenText = (
  str: string,
  substringLengthStart: number,
  substringLengthEnd?: number,
): string => {
  return `${str?.substring(0, substringLengthStart)}...${str?.substring(
    str?.length - (substringLengthEnd ?? substringLengthStart),
  )}`;
};

export const getUdResolver = (): Resolution => {
  const l1ChainId = 1;
  const l2ChainId = 137;
  return Resolution.fromEthersProvider({
    uns: {
      locations: {
        Layer1: {
          network: "mainnet", // add config for sepolia once it's supported by UD
          provider: new ethers.providers.InfuraProvider(
            l1ChainId,
            infuraAPIKey,
          ),
        },
        Layer2: {
          network: "polygon-mainnet",
          provider: new ethers.providers.InfuraProvider(
            l2ChainId,
            infuraAPIKey,
          ),
        },
      },
    },
  });
};

export const traceStackCalls = () => {
  const stack = new Error().stack || "";
  const stackLines = stack.split("\n");
  const caller = stackLines[3] || "Caller not found"; // The 0th line is "Error", the 1st line is this function, the 2nd line is the function that called this function, and the 3rd line is the caller we're interested in.
  console.debug(
    `src::helpers::DebugHelper::traceStackCalls::Caller ${caller.trim()}`,
  );
};

export const retrieveUserPGPKeyFromStorage = (
  account: string,
): string | null => {
  const key = getUniquePGPKey(account);
  const value = localStorage.getItem(key);

  if (isPGPKey(value)) {
    return value;
  }

  return null;
};

const isPGPKey = (str: string | null) => {
  if (!str) return false;

  const pgpPublicKeyRegex =
    /-----BEGIN PGP PUBLIC KEY BLOCK-----[\s\S]*-----END PGP PUBLIC KEY BLOCK-----/;
  const pgpPrivateKeyRegex =
    /-----BEGIN PGP PRIVATE KEY BLOCK-----[\s\S]*-----END PGP PRIVATE KEY BLOCK-----/;

  return pgpPublicKeyRegex.test(str) || pgpPrivateKeyRegex.test(str);
};

const getUniquePGPKey = (account: string) => {
  const address = walletToPCAIP10(account);
  const uniqueKey = `push-user-${address}-pgp`;
  return uniqueKey;
};
