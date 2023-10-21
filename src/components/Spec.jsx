
import React from 'react'
import img from '../assets/small.png'
import {Contract, ethers} from 'ethers'
import { rentContractABI, rentContractAddress } from '../blockinteraction'

export default function Spec() {
 async function callContract(action) {
    try {
      if (window.ethereum) {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner()
        const numberContract = new Contract(rentContractAddress, rentContractABI, signer);

        if (action === 'rent') {
          // Call the rent function on the contract
          const rentTxn = await numberContract.rentAsset();
          await rentTxn.wait();
        } else if (action === 'buy') {
          // Call the buy function on the contract
          const buyTxn = await numberContract.buyAsset();
          await buyTxn.wait();
        }
      } else {
        console.log('Metamask not detected. Please install Metamask.');
        // You can show a user-friendly message or redirect to a Metamask installation guide
      }
    } catch (error) {
      console.error('Error:', error);
    }
 }

 // ... rest of your code



  return (

    <div className='flex w-[1200px] mx-auto justify-between items-center h-[32rem] text-white'>
        <div className='w-[700px]'>
            <h1 className='text-3xl font-bold pb-3'>Valorant - Spectrum Bundle</h1>
            <h3 className='text-xl font-semibold pb-3'>Description : </h3>
            <p className='text-xl pb-6'>The Spectrum Collection is a collection of cosmetics in VALORANT. Its contents were initially available to be obtained when the collection was first released as a bundle in the Store. After this, only its weapon skins can be obtained whenever they become available in a player's daily Featured Store Offers.
The collection was created in collaboration with Zedd, who worked on its audio elements.</p>

<button onClick={() => callContract('rent')} className='p-3 text-black bg-white rounded-2xl rounded-br-[1.1rem] rounded-tr-[1.1rem] font-extrabold  w-40 text-[1.05rem] border-black border-[5px] border-b-[8px] border-r-[8px] mr-5'>RENT ASSET</button>
<button onClick={() => callContract('buy')} className='p-3 text-black bg-white rounded-2xl rounded-br-[1.1rem] rounded-tr-[1.1rem] font-extrabold  w-40 text-[1.05rem] border-black border-[5px] border-b-[8px] border-r-[8px]'>BUY NOW</button>
           <script src = "blockinteraction.js"></script>
            <script src="https://cdn.ethers.io/lib/ethers-5.2.umd.min.js"
        type="application/javascript"></script>
        </div>

        <div className=' w-72 h-96 items-center justify-center text-center'>
            <img src={img} className="h-[430px] w-[370px] pb-2"alt="" />
            {/* <p className='text-xl pb-2'>RENTING STARTS AT <br/> <span className='font-bold text-2xl'>0.0041 ETH</span></p>
            <p className='text-xl pb-2'>BUY NOW FOR <br/> <span className='font-bold text-2xl'>0.071 ETH</span></p> */}

        </div>
    </div>
  )
}
