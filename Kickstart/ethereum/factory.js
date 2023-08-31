import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  CampaignFactory.abi,
  "0x885aAdACCBeAbaB27aF973f2758817f41BB09D7A"
);

export default instance;