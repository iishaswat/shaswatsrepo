// create a variable to hold your NFTs
const nftCollection = [];

// this function will generate a unique transaction ID
function generateTransactionId() {
    return 'tx-' + Date.now() + '-' + Math.floor(Math.random() * 10000);
}

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT(_price, _type, _rarity, _owner) {
    const transactionId = generateTransactionId();
    const nft = {
        "transactionId": transactionId,
        "price": _price,
        "type": _type,
        "rarity": _rarity,
        "owner": _owner
    };
    nftCollection.push(nft);
    console.log("Minted NFT with transaction ID: " + transactionId);
}

// create a "loop" that will go through an "array" of NFTs
// and print their metadata with console.log()
function displayNFTs() {
    for (let i = 0; i < nftCollection.length; i++) {
        console.log("\nNFT ID \t\t: " + (i + 1));
        console.log("Transaction ID \t: " + nftCollection[i].transactionId);
        console.log("Price \t\t: $" + nftCollection[i].price);
        console.log("Type \t\t: " + nftCollection[i].type);
        console.log("Rarity \t\t: " + nftCollection[i].rarity);
        console.log("Owner \t\t: " + nftCollection[i].owner);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalNFTs() {
    console.log("\nTotal number of NFTs: " + nftCollection.length);
}

// call your functions below this line
mintNFT(1000, "Art", "Rare", "Alice");
mintNFT(5000, "Music", "Epic", "Bob");
mintNFT(2500, "Game", "Legendary", "Charlie");
mintNFT(750, "Art", "Common", "Dave");
mintNFT(3000, "Collectible", "Uncommon", "Eve");
displayNFTs();
getTotalNFTs();
