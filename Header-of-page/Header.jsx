/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./Header.css";
import { BsGlobe } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FcGlobe } from "react-icons/fc";
import { GrTwitter, GrGoogle, GrLinkedin } from "react-icons/gr";
import { AiOutlineAlibaba } from "react-icons/ai";
import Button from "@mui/material/Button";


function WebsiteTitle() {
  return (
    <>
      <h1 className="titleOfWebsite">
        <AiOutlineAlibaba style={{fontSize:'1.5em'}}/>
        Alibaba.com
      </h1>
    </>
  );
}


function NavSubMenuButton({ children }) {
  return (
    <Button
      variant="contained"
      sx={{
        textTransform: "none",
        borderRadius: "20px",
        width: "100%",
        margin: "10px 0",
      }}
    >
      {children}
    </Button>
  );
}

const NavSubMenuDisplayContext = React.createContext();

function NavSubMenuDisplayContextProvider({ navItemIndex, ...props }) {
  const statesArray = [];
  const [displayOn, setDisplayOn] = React.useState("none");

  statesArray[navItemIndex] = [displayOn, setDisplayOn];
  return (
    <NavSubMenuDisplayContext.Provider
      value={statesArray[navItemIndex]}
      {...props}
    />
  );
}

function navSubMenuDisplayOnOrOff(itemRef, subMenuRef) {
  const [, setDisplayOn] = React.useContext(NavSubMenuDisplayContext);
  React.useEffect(() => {
    itemRef.current.addEventListener("mouseover", function () {
      setDisplayOn("block");
    });
    itemRef.current.addEventListener("mouseout", function () {
      setDisplayOn("none");

      subMenuRef.current.addEventListener("mouseout", function () {
        setDisplayOn("none");
      });
    });
  });
}

function NavLocationItem() {
  const navLocationRef = React.useRef();
  const navLocationSubMenuRef = React.useRef();
  const [displayOn] = React.useContext(NavSubMenuDisplayContext);
  navSubMenuDisplayOnOrOff(navLocationRef, navLocationSubMenuRef);

  return (
    <>
      <div ref={navLocationRef} className="navItem">
      <span className="navItemText">Ship to:</span>
        <FcGlobe /> <span className="navItemText">IRAN</span>
        <div
          className="navSubMenuOuterContainer navLocationSubMenu"
          ref={navLocationSubMenuRef}
          style={{ display: displayOn }}
        >
          <div className="navSubMenuInnerContainer">
            <ul className="navSubNenuList">
              <li>
                <h3>specify your location</h3>
              </li>
              <li>Shipping options and fees vary based on your location</li>
              <NavSubMenuButton>Sign in to add address</NavSubMenuButton>
              <li
                style={{ paddingBottom: "10px" }}
                className="navLocationOrItem "
              >
                or
              </li>
              <li>
                <input
                  type="text"
                  className="navInput navLocationSubMenuInputs"
                  placeholder="Enter keyword to search"
                />
              </li>
              <li>
                <input
                  type="text"
                  className="navInput navLocationSubMenuInputs"
                  placeholder="Enter city or ZIP code"
                />
              </li>
              <li>
                <NavSubMenuButton>Save</NavSubMenuButton>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

function NavLanguageItem() {
  const navLanguageRef = React.useRef();
  const navLanguageSubMenuRef = React.useRef();
  const [displayOn] = React.useContext(NavSubMenuDisplayContext);
  navSubMenuDisplayOnOrOff(navLanguageRef, navLanguageSubMenuRef);

  return (
    <>
      <li ref={navLanguageRef} className="navItem">
        <BsGlobe /> <span className="navItemText">English-USD</span>
        <div
          ref={navLanguageSubMenuRef}
          className="navSubMenuOuterContainer navLanguageSubMenu"
          style={{ display: displayOn }}
        >
          <div className="navSubMenuInnerContainer ">
            <ul className="navSubNenuList">
              <li>
                <h3>Set language and currency</h3>
              </li>
              <li>
                <li style={{ paddingBottom: "10px" }}>
                  Select your preferred language and currency. You can update
                  the settings at any time.
                </li>
                <label htmlFor="navLocationSubMenuFirstInput">Language</label>
                <input
                  id="navLocationSubMenuFirstInputs"
                  type="text"
                  className="navInput navLocationSubMenuInputs"
                  placeholder="English"
                />
              </li>
              <li>
                <label htmlFor="navLocationSubMenuSecondInput">currency</label>
                <input
                  id="navLocationSubMenuSecondInput"
                  type="text"
                  className="navInput navLocationSubMenuInputs"
                  placeholder="USD - US Dollor"
                />
              </li>
              <li>
                <NavSubMenuButton>Save</NavSubMenuButton>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

function NavSignInItem() {
  const navSignInRef = React.useRef();
  const navSignInSubMenuRef = React.useRef();
  const [displayOn] = React.useContext(NavSubMenuDisplayContext);
  navSubMenuDisplayOnOrOff(navSignInRef, navSignInSubMenuRef);

  return (
    <>
      <li ref={navSignInRef} className="navItem">
        <FaUser /> <span className="navItemText">Sign in</span>
        <div
          ref={navSignInSubMenuRef}
          className="navSubMenuOuterContainer navSignInSubMenu"
          style={{ display: displayOn }}
        >
          <div className="navSubMenuInnerContainer">
            <h3 style={{ marginBottom: "0px" }}>
              Welcome to Alibaba.com!
            </h3>
            <NavSubMenuButton>Sign in</NavSubMenuButton>
            <p style={{ textAlign: "center" }}>or,continue with:</p>
            <div className="navSignInSubMenuApps">
              
              {/* <GrFacebook className="navSignInSubMenuAppsIcon" /> */}
              <GrGoogle className="navSignInSubMenuAppsIcon" />
              <GrLinkedin className="navSignInSubMenuAppsIcon" />
              <GrTwitter className="navSignInSubMenuAppsIcon" />
            </div>
            <p className="navSignInSubMenuSmallSizeText">
              By signing in via social media, I agree to{" "}
              <span className="navSignInSubMenuSmallSizeTextLink">
                the Alibaba.com Free Membership Agreement and Privacy Policy
              </span>
              , and to receive emails about the platform’s products and
              services.
            </p>
            <span className="lineThineFullWidth"></span>
            <ul className="navSignInSubMenuLinks">
              <li className="navSignInSubMenuLinksItem">My Alibab</li>
              <li className="navSignInSubMenuLinksItem">Orders</li>
              <li className="navSignInSubMenuLinksItem">Messages</li>
              <li className="navSignInSubMenuLinksItem">RFQs</li>
              <li className="navSignInSubMenuLinksItem">Favorites</li>
              <li className="navSignInSubMenuLinksItem">Accounts</li>
              <span className="lineThineFullWidth"></span>
              <li className="navSignInSubMenuLinksItem ">Membership program</li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
}

function NavSignUpItem() {
  return (
    <>
      <li className="navItem">
        <Button
          variant="contained"
          sx={{
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          Sign up
        </Button>
      </li>
    </>
  );
}

function Nav() {
  return (
    <>
      <nav className="nav">
        <NavSubMenuDisplayContextProvider navItemIndex={0}>
          <NavLocationItem />
        </NavSubMenuDisplayContextProvider>
        <NavSubMenuDisplayContextProvider navItemIndex={1}>
          <NavLanguageItem />
        </NavSubMenuDisplayContextProvider>
        <NavSubMenuDisplayContextProvider navItemIndex={2}>
          <NavSignInItem />
        </NavSubMenuDisplayContextProvider>
        <NavSignUpItem />
      </nav>
    </>
  );
}

function Header() {
  return (
    <>
      <div className="headerOuterContainer">
        <div className="headerInnerContainer">
          <div className="topMenu">
            <WebsiteTitle />
            <Nav />
          </div>
        </div>
      </div>
    </>
  );
  
}

function App() {
  return(
    <>
      <Header/>
    </>
  )
}

export default App;
