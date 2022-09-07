require("dotenv").config({ path: "./.env" });

module.exports = {
    goerli: {
        network: "goerli",
        chainId: 4,
        rpc_url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
        mnemonic: process.env.MNEMONIC,
        priv_key: process.env.PRIVATE_KEY,
        NFTContractAddress: "0x485e4bFccf3c3230883Dccbef9C9DC3A8fbb1f1D",
    }
};
