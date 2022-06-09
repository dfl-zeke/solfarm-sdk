export function getTokenAccounts({ connection, wallet }: {
    connection: any;
    wallet: any;
}): Promise<{}>;
export function isMintAddressExisting(tokenAccounts: any, mintAddress: any): any;
export const ALL_FARMS: ({
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link: string;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    isHiddenLeverageFarm: boolean;
    disabled: boolean;
    highLiquidity?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    isNew?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    disabled: boolean;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    referrer: string;
    logos: any[];
    singleStake: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    coin?: undefined;
    pc?: undefined;
    dualYield?: undefined;
    marginIndex?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    marginIndex: number;
    tags: any[];
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    disabled: boolean;
    dualYield?: undefined;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isNew?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    isNew: any;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    disabled: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    dualYield: boolean;
    rewardEndSlot: number;
    hidden: boolean;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
})[];
export const ALL_VAULT_FARMS: ({
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link: string;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    isHiddenLeverageFarm: boolean;
    disabled: boolean;
    highLiquidity?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    isNew?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    disabled: boolean;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    referrer: string;
    logos: any[];
    singleStake: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    coin?: undefined;
    pc?: undefined;
    dualYield?: undefined;
    marginIndex?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    marginIndex: number;
    tags: any[];
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    disabled: boolean;
    dualYield?: undefined;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isNew?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    isNew: any;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    disabled: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    dualYield: boolean;
    rewardEndSlot: number;
    hidden: boolean;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
})[];
export const LEVERAGE_FARMS: ({
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link: string;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    isHiddenLeverageFarm: boolean;
    disabled: boolean;
    highLiquidity?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    isNew?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    disabled: boolean;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    referrer: string;
    logos: any[];
    singleStake: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    coin?: undefined;
    pc?: undefined;
    dualYield?: undefined;
    marginIndex?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    marginIndex: number;
    tags: any[];
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    disabled: boolean;
    dualYield?: undefined;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isNew?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    isNew: any;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    disabled: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    dualYield: boolean;
    rewardEndSlot: number;
    hidden: boolean;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
})[];
export function getFarmBySymbol(symbol: any): {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link: string;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    isHiddenLeverageFarm: boolean;
    disabled: boolean;
    highLiquidity?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    isNew?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    disabled: boolean;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    referrer: string;
    logos: any[];
    singleStake: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    coin?: undefined;
    pc?: undefined;
    dualYield?: undefined;
    marginIndex?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    marginIndex: number;
    tags: any[];
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    disabled: boolean;
    dualYield?: undefined;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isNew?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    isNew: any;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    disabled: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    dualYield: boolean;
    rewardEndSlot: number;
    hidden: boolean;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
};
export function getFarmByMintAddress(mintAddress: any): {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link: string;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    isNew: any;
    tags: any[];
    link?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    disabled: boolean;
    tags: any[];
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        detailLink: string;
        docs: {
            website: string;
        };
        socials: {
            Discord: string;
            Medium: string;
            Twitter: string;
            Telegram: string;
        };
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    isHiddenLeverageFarm: boolean;
    disabled: boolean;
    highLiquidity?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
        tags: string[];
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    isNew: any;
    tags: any[];
    disabled: boolean;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    isNew?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    tags: any[];
    disabled: boolean;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    referrer: string;
    logos: any[];
    singleStake: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    coin?: undefined;
    pc?: undefined;
    dualYield?: undefined;
    marginIndex?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    dualYield?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    marginIndex: number;
    tags: any[];
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    disabled: boolean;
    dualYield?: undefined;
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    slippageWarning: boolean;
    rewardEndSlot: number;
    tags: any[];
    highLiquidity: boolean;
    disabled: boolean;
    isNew?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    isNew: any;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    disabled: boolean;
    tags: any[];
    isNew?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    disabled: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    dualYield: boolean;
    rewardEndSlot: number;
    hidden: boolean;
    tags: any[];
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    logos: any[];
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    disabled: boolean;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    link: string;
    rewardEndSlot: number;
    tags: any[];
    marginIndex?: undefined;
    maxPositionLimitInUsd?: undefined;
    isNew?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
    isHiddenLeverageFarm?: undefined;
    referrer?: undefined;
    singleStake?: undefined;
    whitelisted?: undefined;
    migrated?: undefined;
    hidden?: undefined;
};
export function getRaydiumVaultBySymbol(symbol: any): {
    symbol: string;
    name: string;
    configName: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    hidden: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    whitelisted?: undefined;
    disabled?: undefined;
    migrated?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    highLiquidity: boolean;
    configName?: undefined;
    dualYield?: undefined;
    hidden?: undefined;
    slippageWarning?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    configName?: undefined;
    hidden?: undefined;
    whitelisted?: undefined;
    disabled?: undefined;
    migrated?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    configName?: undefined;
    dualYield?: undefined;
    hidden?: undefined;
    slippageWarning?: undefined;
    whitelisted?: undefined;
    disabled?: undefined;
    migrated?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    configName?: undefined;
    dualYield?: undefined;
    hidden?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    highLiquidity: boolean;
    configName?: undefined;
    dualYield?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    hidden: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    highLiquidity: boolean;
    configName?: undefined;
    dualYield?: undefined;
    slippageWarning?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    })[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    configName?: undefined;
    dualYield?: undefined;
    liquidityMining?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    highLiquidity?: undefined;
};
export function getRaydiumVaultByMintAddress(mintAddress: any): {
    symbol: string;
    name: string;
    configName: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    hidden: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    whitelisted?: undefined;
    disabled?: undefined;
    migrated?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    highLiquidity: boolean;
    configName?: undefined;
    dualYield?: undefined;
    hidden?: undefined;
    slippageWarning?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    slippageWarning: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    platform: string;
    configName?: undefined;
    hidden?: undefined;
    whitelisted?: undefined;
    disabled?: undefined;
    migrated?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    maxPositionLimitInUsd: number;
    link: string;
    rewardEndSlot: number;
    configName?: undefined;
    dualYield?: undefined;
    hidden?: undefined;
    slippageWarning?: undefined;
    whitelisted?: undefined;
    disabled?: undefined;
    migrated?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    configName?: undefined;
    dualYield?: undefined;
    hidden?: undefined;
    slippageWarning?: undefined;
    highLiquidity?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    highLiquidity: boolean;
    configName?: undefined;
    dualYield?: undefined;
    slippageWarning?: undefined;
    disabled?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    liquidityMining: boolean;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    hidden: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    rewardEndSlot: number;
    highLiquidity: boolean;
    configName?: undefined;
    dualYield?: undefined;
    slippageWarning?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    totalTulipEmission: number;
    saber: boolean;
    platform: string;
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    })[];
    marginIndex: number;
    whitelisted: boolean;
    disabled: boolean;
    maxPositionLimitInUsd: number;
    link: string;
    migrated: boolean;
    configName?: undefined;
    dualYield?: undefined;
    liquidityMining?: undefined;
    slippageWarning?: undefined;
    rewardEndSlot?: undefined;
    highLiquidity?: undefined;
};
export function getSaberVaultBySymbol(symbol: any): {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    })[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    sunnyPlatform: string;
    link: string;
    totalSBREmission: number;
    totalSunnyEmission: number;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    sunnyPlatform: string;
    link: string;
    totalSBREmission: number;
    totalSunnyEmission: number;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    sunnyPlatform: string;
    link: string;
    totalSBREmission: number;
    totalSunnyEmission: number;
};
export function getSaberVaultByMintAddress(mintAddress: any): {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    })[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    sunnyPlatform: string;
    link: string;
    totalSBREmission: number;
    totalSunnyEmission: number;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    sunnyPlatform: string;
    link: string;
    totalSBREmission: number;
    totalSunnyEmission: number;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddres: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    sunnyPlatform: string;
    link: string;
    totalSBREmission: number;
    totalSunnyEmission: number;
};
export function getOrcaVaultBySymbol(symbol: any): {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
};
export function getOrcaVaultByMintAddress(mintAddress: any): {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: ({
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    } | {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    })[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        tags: string[];
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
    hidden?: undefined;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
} | {
    symbol: string;
    name: string;
    coin: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    pc: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    hidden: boolean;
    mintAddress: string;
    decimals: number;
    dualYield: boolean;
    liquidityMining: boolean;
    totalTulipEmission: number;
    platform: string;
    marginIndex: number;
    maxPositionLimitInUsd: number;
};
export function getTulipVaultBySymbol(symbol: any): {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    singleStake: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    tags: any[];
    tag: string;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    singleStake: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    tag: string;
    tags?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    singleStake: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    tags: any[];
    tag: string;
};
export function getTulipVaultByMintAddress(mintAddress: any): {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    singleStake: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    tags: any[];
    tag: string;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    };
    mintAddress: string;
    decimals: number;
    singleStake: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
        referrer: string;
    }[];
    tag: string;
    tags?: undefined;
} | {
    symbol: string;
    name: string;
    reward: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    rewardB: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    };
    mintAddress: string;
    decimals: number;
    singleStake: boolean;
    platform: string;
    coins: {
        symbol: string;
        name: string;
        mintAddress: string;
        decimals: number;
    }[];
    tags: any[];
    tag: string;
};
export function getAPY(dailyPeriodicRate: any, numberOfPeriods: any): number;
