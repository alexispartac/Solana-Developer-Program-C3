import * as dotenv from "dotenv";
dotenv.config();

import { getExplorerLink, getKeypairFromEnvironment } from "@solana-developers/helpers";
import { createMint } from '@solana/spl-token';
import { Connection, clusterApiUrl } from '@solana/web3.js';


async function createTokenMint() {

    console.log("Creating token mint...");

    const connection = new Connection(clusterApiUrl( "devnet" ));
    const keypair = getKeypairFromEnvironment("SECRET_KEY");

    const mint = await createMint( connection, keypair, keypair.publicKey, null, 9 );

    const link = getExplorerLink( "address", mint.toBase58(), "devnet" );

    console.log(`✅ Mint created: ${link}`);

}

createTokenMint();

