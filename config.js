require("dotenv").config({ path: "./.env" });

module.exports = {
    goerli: {
        network: "goerli",
        chainId: 4,
        rpc_url: `https://goerli.infura.io/v3/${process.env.INFURA_KEY}`,
        mnemonic: process.env.MNEMONIC,
        priv_key: process.env.PRIVATE_KEY,
        NFTContractAddress: "0xEB81a4390a986fe3962d1C1432739753D2312129",
    }
};
