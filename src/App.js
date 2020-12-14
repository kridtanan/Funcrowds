import React, { useEffect} from "react";
import { Switch, Route } from "react-router";

import Home from "./pages/Home";
import Manual from "./pages/Manual";
import Feature from "./pages/Feature";
import ContactUs from "./pages/ContactUs";
import PackageFuncrowds from "./pages/PackageFuncrowds";
import PackageLine from "./pages/PackageLine";
import PackageWechat from "./pages/PackageWechat";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import AppContainer from "./appContainer";
import { useRecoilState } from "recoil";
import { language } from "./store"; 
import translate from "./functional/translate";


export default function App(props) {
  
  const [currentLanguage] = useRecoilState(language);

  useEffect(()=>{
    translate(currentLanguage);
  },[currentLanguage])

  

  return (
    <>
      <Navigation currentLanguage={currentLanguage}></Navigation>
      <Switch>
        <AppContainer>
          <Route exact path="/" component={Home} />
          <Route path="/feature" render={() => <Feature />} />
          <Route path="/manual" render={() => <Manual />} />
          <Route path="/package-funcrowds" component={PackageFuncrowds} />
          <Route path="/package-line" component={PackageLine} />
          <Route path="/package-wechat" component={PackageWechat} />
          <Route path="/contact-us" component={ContactUs} />
        </AppContainer>
      </Switch>
      <Footer />
      
    </>
  );
}
