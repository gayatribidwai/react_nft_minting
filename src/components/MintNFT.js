import React, { useState } from "react";
import { create } from "ipfs-http-client";

const MintNFT = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleMintNFT = async () => {
    if (!name || price <= 0 || !file) {
      console.error("Please provide name, price, and select a file");
      return;
    }

    // Upload the file to IPFS
    const ipfs = create({ host: "ipfs.infura.io", port: 5001, protocol: "https" });
    const fileData = new FormData();
    fileData.append("file", file);
    const uploadResult = await ipfs.addAll(fileData);

    // Get the IPFS URL of the uploaded file
    const ipfsUrl = `https://ipfs.io/ipfs/${uploadResult.path}`;
    console.log()

    // Call the smart contract function to mint the NFT
    // Pass the 'name', 'price', and 'ipfsUrl' to the smart contract function
    // Add your smart contract minting logic here

    // Reset the form fields
    setName("");
    setPrice(0);
    setFile(null);
  };

  return (
    <div>
      <h2>Mint NFT</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(event) => setPrice(parseFloat(event.target.value))}
          />
        </div>
        <div>
          <label htmlFor="file">File:</label>
          <input type="file" id="file" onChange={handleFileChange} />
        </div>
        <button type="button" onClick={handleMintNFT}>
          Mint NFT
        </button>
      </form>
    </div>
  );
};

export default MintNFT;
