require("dotenv").config({ path: "./.env" });

module.exports = {
    rinkeby: {
        network: "rinkeby",
        chainId: 4,
        rpc_url: `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,
        mnemonic: process.env.MNEMONIC,
        priv_key: process.env.PRIVATE_KEY,
        NFTContractAddress: "0x2b3DbEf992F5Dc3839Ea5ea12999Df86B4dC7B4b",
    }
};
