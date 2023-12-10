/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./Main.css";
import { MdOutlinePlayCircle } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillHdd } from "react-icons/ai";
import { BsFolderCheck } from "react-icons/bs";
import { BiWindows } from "react-icons/bi";
import { GiRank3 } from "react-icons/gi";
import { MdFiberNew } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { MdAttachMoney } from "react-icons/md";
import { FaCheckSquare } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { RiShipFill } from "react-icons/ri";
import { GiAutoRepair } from "react-icons/gi";

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function TemporaryDrawer({
  buttonText,
  itemsList = ["inbox", "sent", "received"],
}) {
  const [state, setState] = React.useState({
    top: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onMouseLeave={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List sx={{ padding: "20px" }}>
        {[...itemsList].map((text, index) => (
          <ListItem
            key={text}
            disablePadding
            sx={{ textTransform: "capitalize" }}
          >
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            // onMouseEnter={toggleDrawer(anchor, true)}
            onClick={toggleDrawer(anchor, true)}
            sx={{ color: "white", textTransform: "none" }}
          >
            {" "}
            {buttonText}
          </Button>
          <Drawer anchor={anchor} open={state[anchor]}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

function BannerNavItemsAllCategoriesSubmenu() {
  return (
    <>
      <ul className="bannerNavSubMenuList">
        <li> top categories</li>
        <li> Home</li>
        <li> industrial</li>
        <li> health & personal Care</li>
        <li> fashion & beauty</li>
        <li> sports & entertainment</li>
        <li> tools & home improvement</li>
        <li> raw materials</li>
        <li> maintenance,repair & operations</li>
      </ul>
    </>
  );
}

function BannerNavItemsFeaturedSelectionsSubmenu() {
  return (
    <div className="bannerNavItemsFeaturedSelectionsSubMenu">
      <div className="bannerNavItemsFeaturedSelectionsSubMenuItem">
        <GiRank3 style={{ fontSize: "3em" }} />
        <h6 style={{ margin: "0" }}>top ranking</h6>
      </div>
      <div className="bannerNavItemsFeaturedSelectionsSubMenuItem">
        <MdFiberNew style={{ fontSize: "3em" }} />
        <h6 style={{ margin: "0" }}>new arrivlas</h6>
      </div>
      <div className="bannerNavItemsFeaturedSelectionsSubMenuItem">
        <AiOutlineSave style={{ fontSize: "3em" }} />
        <h6 style={{ margin: "0" }}>saving spotlights</h6>
      </div>
    </div>
  );
}

function BannerNavItemsTradeAssuranceSubmenu() {
  return (
    <div className="bannerNavItemsTradeAssurnaceSubMenu">
      <div className="banneerNAvItemsTradeAsuurnaceSubMenuLeftItems">
        <p
          className="banneerNAvItemsTradeAsuurnaceSubMenuLeftItemsTitels"
          style={{ fontSize: "1.3em" }}
        >
          <MdAttachMoney
            style={{
              borderRadius: "5px",
              backgroundColor: "gold",
              color: "ghostWhite",
            }}
          />{" "}
          trade Assurnace
        </p>
        <p
          className="banneerNAvItemsTradeAsuurnaceSubMenuLeftItemsTitels"
          style={{ fontWeight: "700", fontSize: "2em" }}
        >
          enjoy protection from payment to delivery
        </p>
        <Button
          variant="contained"
          sx={{
            width: "45%",
            borderRadius: "20px",
            textTransform: "none",
          }}
        >
          learn more
        </Button>
      </div>
      <div className="banneerNAvItemsTradeAsuurnaceSubMenuRightItems">
        <div className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxes">
          <FaCheckSquare className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxesIcons" />
          sefe & easy payment
        </div>
        <div className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxes">
          <FaMoneyBillTransfer className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxesIcons" />
          money-back policy
        </div>
        <div className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxes">
          <RiShipFill className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxesIcons" />
          shipping & logistics services
        </div>
        <div className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxes">
          <GiAutoRepair className="banneerNAvItemsTradeAsuurnaceSubMenuRightItemsBoxesIcons" />
          after-sales protections
        </div>
      </div>
    </div>
  );
}

function BannerNavItemsBuyerCentralSubmenu() {
  return (
    <div className="bannerNavItemsBuyerCentralSubMenu">
      <div className="bannerNavItemsBuyerCentralSubMenuColumns">
        <ul className="bannerNavSubMenuList">
          <li>
            <strong>get started</strong>
          </li>
          <li>what is alibab.com</li>
        </ul>
      </div>
      <div className="bannerNavItemsBuyerCentralSubMenuColumns">
        <ul className="bannerNavSubMenuList">
          <li>
            <strong>why alibaba.com</strong>
          </li>
          <li>how sourcing works</li>
          <li>membership program</li>
        </ul>
      </div>
      <div className="bannerNavItemsBuyerCentralSubMenuColumns">
        <ul className="bannerNavSubMenuList">
          <li>
            <strong>trade service</strong>
          </li>
          <li>trade assurance</li>
          <li>logistic services</li>
          <li>letter of credit</li>
          <li>production monitoring & inspection services</li>
        </ul>
      </div>
      <div className="bannerNavItemsBuyerCentralSubMenuColumns">
        <ul className="bannerNavSubMenuList">
          <li>
            <strong>resources</strong>
          </li>
          <li>success stories</li>
          <li>blogs</li>
          <li>indutry reports</li>
          <li>help center</li>
        </ul>
      </div>
      <div className="bannerNavItemsBuyerCentralSubMenuColumns">
        <ul className="bannerNavSubMenuList">
          <li>
            <strong>webinars</strong>
          </li>
          <li>overview</li>
          <li>meet the peers</li>
          <li>eccomerce academy</li>
          <li>how to source on alibaba.com</li>
        </ul>
      </div>
    </div>
  );
}

function BannerNav() {
  return (
    <div className="bannerNav">
      <div className="bannerNavLeftItemsFather bannerNavWholeItemsFather">
        <div className="bannerNavItems bannerNavLeftItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">
                <AiOutlineMenu /> All categories
              </span>
            }
            itemsList={[
              <>
                <BannerNavItemsAllCategoriesSubmenu />
              </>,
            ]}
          />
        </div>
        <div className="bannerNavItems bannerNavLeftItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">Featured Selections</span>
            }
            itemsList={[
              <>
                <BannerNavItemsFeaturedSelectionsSubmenu />
              </>,
            ]}
          />
        </div>
        <div className="bannerNavItems bannerNavLeftItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">Trade Assurance</span>
            }
            itemsList={[
              <>
                <BannerNavItemsTradeAssuranceSubmenu />
              </>,
            ]}
          />
        </div>
      </div>
      <div className="bannerNavRightItemsFather bannerNavWholeItemsFather">
        <div className="bannerNavItems bannerNavRightItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">Buyer Central</span>
            }
            itemsList={[
              <>
                <BannerNavItemsBuyerCentralSubmenu />
              </>,
            ]}
          />
        </div>
        <div className="bannerNavItems bannerNavRightItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">Become a Supplier</span>
            }
          />
        </div>
        <div className="bannerNavItems bannerNavRightItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">Help Center</span>
            }
          />
        </div>
        <div className="bannerNavItems bannerNavRightItems">
          <TemporaryDrawer
            buttonText={
              <span className="bannerNavItemsTitle">Get the app</span>
            }
          />
        </div>
      </div>
    </div>
  );
}

function BannerContent() {
  return (
    <div className="bannerContents">
      <h5 className="bannerTopOfTitleLink">
        <MdOutlinePlayCircle style={{ fontSize: "1.5em" }} />
        Learn about Alibaba.com
      </h5>
      <h3 className="bannerTitle">
        The leading B2B ecommerce platform for global trade
      </h3>
      <div style={{ position: "relative" }}>
        <input type="text" className="bannerInput" placeholder="nike shoes" />
        <div className="bannerInputSearchButton">
          <AiOutlineSearch /> Search
        </div>
      </div>
      <div className="searchSuggestionItemsFather">
        <div className="searchSuggestionChildren">Frequently searched:</div>
        <div
          className="searchSuggestionChildren
    searchSuggestionOptions"
        >
          toys
        </div>
        <div
          className="searchSuggestionChildren
    searchSuggestionOptions"
        >
          women`s clothing
        </div>
        <div
          className="searchSuggestionChildren
    searchSuggestionOptions"
        >
          airpods pro
        </div>
        <div
          className="searchSuggestionChildren 
    searchSuggestionOptions"
        >
          nike shoes
        </div>
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div className="bannerOuterContainer">
      <div className="bannerInnerContainer">
        <BannerNav />
        <BannerContent />
      </div>
    </div>
  );
}

function LowerPartOfBanner() {
  return (
    <div className="lowerPartOfBannerOuterContainer">
      <div className="lowerPartOfBannerInnerContainer">
        <div className="lowerPartOfBannerItems">
          <AiFillHdd className="lowerPartOfBannerItemsIcons" />
          <h3 style={{ margin: "20px 0" }}>Millions of bussines offerings</h3>
          <p>
            Explore products and suppliers for your business from millions of
            offerings worldwide.
          </p>
        </div>
        <div className="lowerPartOfBannerItems">
          <AiOutlineSave className="lowerPartOfBannerItemsIcons" />
          <h3 style={{ margin: "20px 0" }}>Assured quality and transactions</h3>
          <p>
            Ensure production quality from verified suppliers, with your orders
            protected from payment to delivery.
          </p>
        </div>
        <div className="lowerPartOfBannerItems">
          <BsFolderCheck className="lowerPartOfBannerItemsIcons" />
          <h3 style={{ margin: "20px 0" }}>One-stop trading solution</h3>
          <p>
            Order seamlessly from product/supplier search to order management,
            payment,and fulfillment.
          </p>
        </div>
        <div className="lowerPartOfBannerItems">
          <BiWindows className="lowerPartOfBannerItemsIcons" />
          <h3 style={{ margin: "20px 0" }}>Personalized trading experience</h3>
          <p>
            Get curated benefits, such as discounted samples and dedicated
            support,tailored to your business growth stage.
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Banner />
      <LowerPartOfBanner />
    </div>
  );
}

export default App;
