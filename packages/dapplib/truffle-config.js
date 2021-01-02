require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid nation flock system egg develop remember unique install battle flock tiger'; 
let testAccounts = [
"0x1881f38ce05ea49ae973b37a195abe2791f114a48f3567aa4ccbfe1b2a3b5b26",
"0xdbec5211995110de252ae172784c9bad6a114675592434ef8648613a39a35930",
"0x791f808a96f69dc64d478d7ab90599f7d5606dea372f5d22fb63c1bf8840c922",
"0x3a8a1ca7729d44b009deb1c6a7d4805b81fea70b717dbfec3a0c46d3dba2f3d6",
"0xd8cdb0d002a739b3b8e8b3bcbc64159c44e6a9eb7d8b1b531fe3e387cce0785c",
"0x417082012ded4b902677a8537cf8a1ae44c484247a85030f3bcb6546435b2f51",
"0x2968f11885e946c988332a7d1ab95f904904a41c54187bf8ba1ed71bbfc54cec",
"0x4cd5a9e91288b1e7bb1f9c737037557476e312da783b81bfd9de9de7056036b4",
"0x0323b7ef5ff99b2074a6a4cdf92c7a84cac20800f1015b0bdd49bf5aaad93539",
"0x69a21942210acfbdd13ff3970924c2c47b05c5f9ae9f93684d3966263b095f3a"
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
            version: '^0.5.11'
        }
    }
};
