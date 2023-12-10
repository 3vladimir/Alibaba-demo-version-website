/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import * as React from "react";
import "./Footer.css";
  
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";

function FooterUpPart() {
  return (
    <div className="footerUpPartOuterContainer">
      <div className="footerUpPartInnerContainer">
        <div className="footerUPPartColumnsFather">
          <div className="footerUpPartColumns">
            <ul className="footerLists">
              <li className="footerUpPartColumnsItems footerUpPartColumnsTitleItem">
                <strong>Get support</strong>
              </li>
              <li className="footerUpPartColumnsItems">Help Center</li>
              <li className="footerUpPartColumnsItems">Live chat</li>
              <li className="footerUpPartColumnsItems">check order status</li>
              <li className="footerUpPartColumnsItems">Refunds</li>
              <li className="footerUpPartColumnsItems">report abuse</li>
            </ul>
          </div>
          <div className="footerUpPartColumns">
            <ul className="footerLists">
              <li className="footerUpPartColumnsItems footerUpPartColumnsTitleItem">
                <strong>Trade Assurance</strong>
              </li>
              <li className="footerUpPartColumnsItems">
                Safe and easy payments
              </li>
              <li className="footerUpPartColumnsItems">Money-back policy</li>
              <li className="footerUpPartColumnsItems">On-time shipping</li>
              <li className="footerUpPartColumnsItems">
                After-sales protectionUp            </li>
              <li className="footerUpPartColumnsItems"></li>
              <li className="footerUpPartColumnsItems">
                Product monitoring services
              </li>
            </ul>
          </div>
          <div className="footerUpPartColumns">
            <ul className="footerLists">
              <li className="footerUpPartColumnsItems footerUpPartColumnsTitleItem">
                <strong>Source on Alibaba.com</strong>
              </li>
              <li className="footerUpPartColumnsItems">
                Request for Quotation
              </li>
              <li className="footerUpPartColumnsItems">Membership program</li>
              <li className="footerUpPartColumnsItems">
                Alibaba.com Logistics
              </li>
              <li className="footerUpPartColumnsItems">Sales tax and VAT</li>
              <li className="footerUpPartColumnsItems">Alibaba.com Reads</li>
            </ul>
          </div>
          <div className="footerUpPartColumns">
            <ul className="footerLists">
              <li className="footerUpPartColumnsItems footerUpPartColumnsTitleItem">
                <strong>Sell on Alibaba.com</strong>
              </li>
              <li className="footerUpPartColumnsItems">Start selling</li>
              <li className="footerUpPartColumnsItems">Seller Central</li>
              <li className="footerUpPartColumnsItems">
                Become a Verified Supplier
              </li>
              <li className="footerUpPartColumnsItems">Partnerships</li>
              <li className="footerUpPartColumnsItems">
                Download the app for suppliers
              </li>
            </ul>
          </div>
          <div className="footerUpPartColumns">
            <ul className="footerLists">
              <li className="footerUpPartColumnsItems footerUpPartColumnsTitleItem">
                <strong>Get to know us</strong>
              </li>
              <li className="footerUpPartColumnsItems">About Alibaba.com</li>
              <li className="footerUpPartColumnsItems">
                Corporate responsibility
              </li>
              <li className="footerUpPartColumnsItems">News center</li>
              <li className="footerUpPartColumnsItems">Careers</li>
            </ul>
          </div>
        </div>
        <div className="footerUpPartContactWays">
          <div className="footerUpPartSocialNetworksList">
            <FaSquareFacebook className="footerUpPartSocialNetworksIcons" />
            <FaLinkedinIn className="footerUpPartSocialNetworksIcons" />
            <FaTwitter className="footerUpPartSocialNetworksIcons" />
            <FaInstagram className="footerUpPartSocialNetworksIcons" />
            <FaYoutube className="footerUpPartSocialNetworksIcons" />
            <FaTiktok className="footerUpPartSocialNetworksIcons" />
          </div>
          <div className="footerUpPartApplicationLinks">
            Trade on the go with the{" "}
            <strong style={{ cursor: "pointer", textDecoration: "underLine" }}>
              Alibaba.com app
              <div
                className="footerUpPartApplicationLinksIcon"
                style={{ margin: "0 15px" }}
              >
                <FaApple style={{ fontSize: "2em" }} /> App store
              </div>
              <div className="footerUpPartApplicationLinksIcon">
                <FaGooglePlay style={{ fontSize: "2em", color: "green" }} />{" "}
                Google Play
              </div>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterDownPart() {
  return (
    <div className="footerDownPartOuterContainer">
      <div className="footerDownPartInnerContainer">
        <div>
          <span className="footerDownPartItems">AliExpress</span> |{" "}
          <span className="footerDownPartItems">1688.com</span> |{" "}
          <span className="footerDownPartItems">Tmall Taobao World</span> |{" "}
          <span className="footerDownPartItems">ALipay</span> |{" "}
          <span className="footerDownPartItems">Lazada</span> |{" "}
          <span className="footerDownPartItems">Taobao Global</span>
        </div>
        <div style={{ margin: "10px 0" }}>
          <span className="footerDownPartItems">Policies and rules</span> -{" "}
          <span className="footerDownPartItems">Legal Notice</span> -{" "}
          <span className="footerDownPartItems">Product Listing Policy</span> -{" "}
          <span className="footerDownPartItems">
            Intellectual Property Protection
          </span>{" "}
          - <span className="footerDownPartItems">Privacy Policy</span> -{" "}
          <span className="footerDownPartItems">Terms of Use</span> -{" "}
          <span className="footerDownPartItems">Integrity Compliance</span>
        </div>
        <div>
          <span className="footerDownPartItems">
            © 1999-2023 Alibaba.com. All rights reserved.
          </span>
          <span className="footerDownPartItems">
            浙公网安备 33010002000092号
          </span>
          <span className="footerDownPartItems">浙B2-20120091-4</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <FooterUpPart />
      <FooterDownPart />
    </div>
  );
}

export default App;
