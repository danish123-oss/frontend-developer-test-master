import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import Slider from "react-slick";
import { Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrowfun">
      {/* <i class="arrow right"  /> */}
      <img
        onClick={onClick}
        alt="menu"
        className="menu_icon3 "
        src="https://sadaora-documents.s3.us-west-1.amazonaws.com/p07dsvg9ymGroup.png"
      ></img>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="arrowfun2">
      <img
        onClick={onClick}
        alt="menu"
        className="menu_icon3 "
        src="https://sadaora-documents.s3.us-west-1.amazonaws.com/q581clvhhtVector.png"
      ></img>
    </div>
  );
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};
const mx = Metaplex.make(connection);
function Card() {
  const [nfts, setNFTs] = useState([]);
  const [address, setAddress] = useState(
    "3ijFZcJKmp1EnDbbuaumWYvEFbztx9NRupwTXTchK9bP"
  );
  const fetchNft = async () => {
    const asset = await mx
      .nfts()
      .findByMint({ mintAddress: new PublicKey(address) });
    setNFTs(asset);
  };
  useEffect(() => {
    fetchNft();
  }, []);
  console.log(nfts, "data==>");
  return (
    <React.Fragment>
      <Slider {...settings}>
        <div>
          <div className="card-head">
            <div className="flex justify-between">
              <h6 className="text-white text-sm ml-2 mt-4">Cyberlinx #2551</h6>
              <img
                alt="menu"
                className="menu_icon mr-2 mt-6"
                src="https://sadaora-documents.s3.us-west-1.amazonaws.com/ia7gy88bhxVector%20%284%29.png"
              ></img>
            </div>
            <div>
              <img
                className="ml-2  img_card mt-2"
                src={nfts?.json?.image}
                alt="img"
              ></img>
            </div>
            <div className="card-body ml-2 mr-2 mt-2 p-3">
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Owner</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.name}</h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Mint Address</h6>
                <h6 className="text-sm mr-4 color-scheme ">
                  {nfts?.mint?.address?._bn.words[0]}
                </h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Token</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.uri}</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-head">
            <div className="flex justify-between">
              <h6 className="text-white text-sm ml-2 mt-4">Cyberlinx #2551</h6>
              <img
                alt="menu"
                className="menu_icon mr-2 mt-6"
                src="https://sadaora-documents.s3.us-west-1.amazonaws.com/ia7gy88bhxVector%20%284%29.png"
              ></img>
            </div>
            <div>
              <img
                className="ml-2  img_card mt-2"
                src={nfts?.json?.image}
                alt="img"
              ></img>
            </div>
            <div className="card-body ml-2 mr-2 mt-2 p-3">
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Owner</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.name}</h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Mint Address</h6>
                <h6 className="text-sm mr-4 color-scheme ">
                  {nfts?.mint?.address?._bn.words[0]}
                </h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Token</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.uri}</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-head">
            <div className="flex justify-between">
              <h6 className="text-white text-sm ml-2 mt-4">Cyberlinx #2551</h6>
              <img
                alt="menu"
                className="menu_icon mr-2 mt-6"
                src="https://sadaora-documents.s3.us-west-1.amazonaws.com/ia7gy88bhxVector%20%284%29.png"
              ></img>
            </div>
            <div>
              <img
                className="ml-2  img_card mt-2"
                src={nfts?.json?.image}
                alt="img"
              ></img>
            </div>
            <div className="card-body ml-2 mr-2 mt-2 p-3">
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Owner</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.name}</h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Mint Address</h6>
                <h6 className="text-sm mr-4 color-scheme ">
                  {nfts?.mint?.address?._bn.words[0]}
                </h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Token</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.uri}</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-head">
            <div className="flex justify-between">
              <h6 className="text-white text-sm ml-2 mt-4">Cyberlinx #2551</h6>
              <img
                alt="menu"
                className="menu_icon mr-2 mt-6"
                src="https://sadaora-documents.s3.us-west-1.amazonaws.com/ia7gy88bhxVector%20%284%29.png"
              ></img>
            </div>
            <div>
              <img
                className="ml-2  img_card mt-2"
                src={nfts?.json?.image}
                alt="img"
              ></img>
            </div>
            <div className="card-body ml-2 mr-2 mt-2 p-3">
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Owner</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.name}</h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Mint Address</h6>
                <h6 className="text-sm mr-4 color-scheme ">
                  {nfts?.mint?.address?._bn.words[0]}
                </h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Token</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.uri}</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="card-head">
            <div className="flex justify-between">
              <h6 className="text-white text-sm ml-2 mt-4">Cyberlinx #2551</h6>
              <img
                alt="menu"
                className="menu_icon mr-2 mt-6"
                src="https://sadaora-documents.s3.us-west-1.amazonaws.com/ia7gy88bhxVector%20%284%29.png"
              ></img>
            </div>
            <div>
              <img
                className="ml-2  img_card mt-2"
                src={nfts?.json?.image}
                alt="img"
              ></img>
            </div>
            <div className="card-body ml-2 mr-2 mt-2 p-3">
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Owner</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.name}</h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Mint Address</h6>
                <h6 className="text-sm mr-4 color-scheme ">
                  {nfts?.mint?.address?._bn.words[0]}
                </h6>
              </div>
              <div className="content-body-card">
                <h6 className="text-white text-sm ml-4 ">Token</h6>
                <h6 className="text-sm mr-4 color-scheme ">{nfts?.uri}</h6>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </React.Fragment>
  );
}

export default Card;
