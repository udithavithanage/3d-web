import { PropsWithChildren, useEffect, useState } from "react";

import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import TechStack from "./TechStack";

const MainContainer = ({ children }: PropsWithChildren) => {
  const [isDesktopView, setIsDesktopView] = useState<boolean>(() =>
    typeof window !== "undefined" ? window.innerWidth > 1024 : false
  );

  useEffect(() => {
    const resizeHandler = () => {
      setIsDesktopView(window.innerWidth > 1024);
      setSplitText();
    };

    resizeHandler();
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return (
    <div className="containefr-main">
      <Navbar />
      <SocialIcons />

      {/* Desktop-only character */}
      {isDesktopView && children}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Landing>{!isDesktopView && children}</Landing>
          <About />
          <WhatIDo />
          <Career />
          <Work />
          <TechStack />
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
