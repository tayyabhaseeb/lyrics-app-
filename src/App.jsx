import Header from "./components/Header";
import Search from "./components/Search";

import SongCont from "./components/SongCont";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Header />
      <Search />
      <SongCont />
    </AppContextProvider>
  );
}

export default App;
