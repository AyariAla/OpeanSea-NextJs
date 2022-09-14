import '../styles/globals.css';
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
// Chain id represents Rinkeby network
// The injected connector is a web3 connect method used by metamask

const supportedChainsIds = [5];
// 4 for rinkeby 5 for goerly
const connectors = {
  injected: {},
};
function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebWeb3Provider
      supportedChainsIds={supportedChainsIds}
      connectors={connectors}
    >
      <Component {...pageProps} />
    </ThirdwebWeb3Provider>
  );
}

export default MyApp;
