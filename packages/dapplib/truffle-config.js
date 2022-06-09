require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'just problem forget venture stumble deny outside comfort install knock equal general'; 
let testAccounts = [
"0xb415b28c8c8f5bdc08e7089a06b6696af5c6ea332ea980a3cf8a1d8913b9963d",
"0x3ba272e2df3bd935338d9266510a6f0aa982372cd8f93b9a96aece56c1114a5d",
"0x4e74d43538be48c3a53d9d5d4b5e5632a1c502b1a24395ab242acaf3ae6f27e1",
"0x5229a963a9964fcce81adc66972413de9aa19793b6234d55581b6118faf6457a",
"0xe82cf29b0d7193cdcbbf9ef1f8d5c027cdaf2fc070fce48eea880213f1205422",
"0x8af0b49f92d54447c743f72ac61956336d4fb7e0aab79883b38b7ab8e3d8e2ad",
"0x2487feba234b229c183ccbd79fb89c323f8c84f2a40672067248ddfba69472a8",
"0x4adf9f5dfc0157c95b713ce8c30a5614ae6f4aefc095b3ddcd30fbcc191db0a1",
"0x5c21131dad19f25e83004fe514190e8d74313da466d27fe6bbc11b068e195c59",
"0x4a2f5d9c82d32b98ea87a3e6679135d6a50f987cdb1e41cd9c507e6a2d9f67c4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

