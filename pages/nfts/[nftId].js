import React, { useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import { useWeb3 } from '@3rdweb/hooks';
import { ThirdwebSDK } from '@3rdweb/sdk';
import { useRouter } from 'next/router';
import { MdQueryBuilder } from 'react-icons/md';
import NFTImage from '../../components/nft/NFTImage';
import GeneralDetails from '../../components/nft/GeneralDetails';
import ItemActivity from '../../components/nft/ItemActivity';
import Purchase from '../../components/nft/Purchase';
const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
};
const Nft = () => {
  const { provider } = useWeb3();
  const [selectedNft, setSelectedNft] = useState();
  const [listings, setListings] = useState([]);
  const router = useRouter();

  //   getting the nft module
  const nftModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-goerli.g.alchemy.com/v2/x00ivJkXDje1tf5LZptVyyx_krFUAIod'
    );
    // collection address
    return sdk.getNFTModule('0x26B1A8d9899D81Cad45Ec8Ec3C3F3D709e1421f4');
  }, [provider]);
  // getting all NFts in the collection
  useEffect(() => {
    if (!nftModule) return;
    (async () => {
      const nfts = await nftModule.getAll();

      const selectNftArray = nfts.filter(
        (nft) => nft.id === router.query.nftId
      );
      setSelectedNft(selectNftArray[0]);
      //   nfts.find
      // setSelectedNft(selectNftArray);
    })();
  }, [nftModule]);

  const marketPlaceModule = useMemo(() => {
    if (!provider) return;

    const sdk = new ThirdwebSDK(
      provider.getSigner()
      // 'https://eth-goerli.g.alchemy.com/v2/x00ivJkXDje1tf5LZptVyyx_krFUAIod'
    );
    return sdk.getMarketplaceModule(
      '0xdb72c4e9709EbDe30471d31dd3dd9c249c0A5Fe8'
    );
  }, [provider]);

  useEffect(() => {
    if (!marketPlaceModule) return;
    (async () => {
      setListings(await marketPlaceModule.getAllListings());
    })();
  }, [marketPlaceModule]);

  return (
    <div className='bg-[#17181A] h-screen'>
      <Header />
      <div className={style.wrapper}>
        <div className={style.container}>
          <div className={style.topContent}>
            <div className={style.nftImgContainer}>
              <NFTImage selectedNft={selectedNft} />
            </div>
            <div className={style.detailsContainer}>
              <GeneralDetails selectedNft={selectedNft} />
              <Purchase
                isListed={router.query.isListed}
                selectedNft={selectedNft}
                marketPlaceModule={marketPlaceModule}
                listings={listings}
              />
            </div>
          </div>
          <ItemActivity />
        </div>
      </div>
    </div>
  );
};

export default Nft;
