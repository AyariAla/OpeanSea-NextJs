import Header from '../components/Header';
import Hero from '../components/Hero';
import { useWeb3 } from '@3rdweb/hooks';
import { useEffect } from 'react';
import { client } from '../lib/sanityClient';
import toast, { Toaster } from 'react-hot-toast';
import bgk from '../assets/pexels.jpg';

// const Home: NextPage = () => {
const style = {
  wrapper: `bg-[#17181A] overflow-x-hidden`,
  walletConnectWrapper: `flex flex-col justify-center items-center h-screen w-screen bg-[#3b3d42]`,
  button: `border border-[#282b2f] bg-[#2081e2] p-[0.8rem] text-xl font-semibold rounded-lg cursor-pointer text-black`,
  details: `text-lg text-center text=[#282b2f] font-semibold mt-4`,
};
const Home = () => {
  // Using web3 hook to get the user address and log him in
  const { address, connectWallet } = useWeb3();
  ///////////////////////////////////////////////////////
  const welcomeUser = (userName, toastHandler = toast) => {
    toastHandler.success(
      `Welcome back ${userName != 'Unnamed' ? ` ${userName}` : ''}!`,
      {
        style: {
          background: '#04111d',
          color: '#fff',
        },
      }
    );
  };

  // Adding user to sanity db with the use effect
  useEffect(() => {
    if (!address) return; // IIFE Immediately invoked functonal expressions
    (async () => {
      const userDoc = {
        _type: 'users',
        _id: address,
        userName: 'Unnamed',
        walletAddress: address,
      };
      const result = await client.createIfNotExists(userDoc);
      welcomeUser(result.userName);
    })();
  }, [address]);

  return (
    <div className={style.wrapper}>
      <Toaster position='top-center' reverseOrder={false} />
      {address ? (
        <>
          <Header />
          <Hero />
        </>
      ) : (
        <div className={style.walletConnectWrapper}>
          {/* <button
            className={style.button}
            onClick={() => connectWallet('injected')}
          >
            Connect wallet
          </button> */}
          <a
            href='#_'
            class='relative inline-block px-4 py-2 font-medium group'
          >
            <span class='absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
            <span class='absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black'></span>
            <span
              class='relative text-black group-hover:text-white'
              onClick={() => connectWallet('injected')}
            >
              Connect wallet
            </span>
          </a>
          <div className={style.details}>
            You need Chrome to be
            <br /> able to use this app.
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
