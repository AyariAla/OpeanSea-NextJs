import Link from 'next/link';
import React from 'react';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { IoIosArrowDroprightCircle } from 'react-icons/io';

// FIXME:  contentwrapp - h - screen
const style = {
  wrapper: `relative `,
  // before rendering children divs process the bg image with low opacity so it doesn't bleed on children divs
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s250')] before:bg-cover before:bg-center before:opacity-20 before:blur`,
  contentWrapper: `flex relative justify-center flex-wrap items-center w-screen min-h-screen h-full`,
  //   taking half of the width of the containing div
  copyContainer: `w-1/2 `,
  title: `relative text-white text-[46px] font-bold mr-[10px]`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] mt-7`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-xl flex items-center text-white `,
  author: `flex flex-col justify-center ml-4 text-bold`,
  name: `text-xl font-bold`,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
};

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              <h2>Discover, collect, and sell extraordinary NFTs</h2>
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
            <div className='text-semibold absolute bottom-5  my-10 flex cursor-pointer items-center text-2xl text-[#2181e2] hover:text-[#494c53] '>
              <IoIosArrowDroprightCircle className='mt-0.5 mr-4' />
              <Link href='/'> Learn more about OpenSea</Link>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className='w-full rounded-t-xl'
              src='https://lh3.googleusercontent.com/ujepnqpnL0nDQIHsWxlCXzyw4pf01yjz1Jmb4kAQHumJAPrSEj0-e3ABMZlZ1HEpJoqwOcY_kgnuJGzfXbd2Tijri66GXUtfN2MXQA=s550'
              alt=''
            />
            <div className={style.infoContainer}>
              <img
                className='h-[3rem] rounded-full'
                src='https://lh3.googleusercontent.com/qQj55gGIWmT1EnMmGQBNUpIaj0qTyg4YZSQ2ymJVvwr_mXXjuFiHJG9d3MRgj5DVgyLa69u8Tq9ijSm_stsph8YmIJlJQ1e7n6xj=s64'
                alt=''
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a
                  className='text-lg font-semibold text-[#1868b7]'
                  href='https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/2324922113504035910649522729980423429926362207300810036887725141691069366277'
                >
                  hola-kanola
                </a>
              </div>
              <div className='ml-56 flex cursor-pointer items-center text-2xl transition duration-500 ease-out hover:text-black'>
                <AiOutlineInfoCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
