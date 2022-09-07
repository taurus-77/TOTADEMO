import { ethers } from "ethers";
import NFTABI from "./artifacts/TotaNFT.json";

class NFT {
    /**
     *
     * @param {ethers.providers.Web3Provider} provider an ethers Provider object to use for signing transactions
     * @param {string} NFTContractAddress the ethereum network address of the Tota NFT contract
     */
    constructor(provider, NFTContractAddress) {
        this.provider = provider;
        this.chainId = this.provider._network.chainId;
        this.signer = this.provider.getSigner();
        this.NFTContract = new ethers.Contract(NFTContractAddress, NFTABI, this.signer);
    }

    /**
     * Parses the given stringified voucher object and calls the tota smart contract to verify the voucher. 
     * Upon succesful verification, the smart contract transfers the NFT object to the redeemer.
     *
     * @param {NFTVoucher} voucher The signed NFT voucher that can be redeemed by an ethereum address.
     */
    async redeemVoucher(voucher, noOfNFTs) {
        const NFTContract = this.NFTContract;
        const signerAddress = await this.signer.getAddress();

        let perNFTPrice = 0.001 * noOfNFTs;

        try {
            console.log(await NFTContract.redeem(voucher, { value: ethers.utils.parseEther(perNFTPrice.toString()) }));
            NFTContract.on("Transfer", (from, to, tokenId) => {
                if (from != ethers.constants.AddressZero)
                    console.log("From : ", from, "To :", to, "Token ID :", tokenId.toString());
            });
        } catch (err) {
            return Promise.reject(err);
        }
    }

}

module.exports = { NFT };