import React from "react";
import Card from "./card";
function Content() {
  return (
    <React.Fragment>
      <div className="content-main">
        <div className="flex justify-between">
          <div className="mt-7 ml-10 bg-color">
            <img
              className="icon ml-2 mr-2"
              src="https://sadaora-documents.s3.us-west-1.amazonaws.com/8s4rdgninyicon.png"
              alt=""
            ></img>
            <h6 className="text-white">ETH/USDT</h6>
            <h6 className="text mr-2">1137.62 +2.62%↑</h6>
          </div>
          <div className="mt-7 mr-10 bg-color">
            <img
              className="icon ml-2 mr-2"
              src="https://sadaora-documents.s3.amazonaws.com/w1oa177xomavatar.png"
              alt=""
            ></img>
            <h6 className="text-white">Zash</h6>
            <h6 className="text-white mr-2">User ID: 11026666</h6>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mt-7 ml-10">
            <h2 className="text-white text-xl">Dashboard</h2>
          </div>
          <div className="mt-7 mr-10">
            <div className="bg-white rounded-xl">
              <img
                className="icon ml-2 mr-2 mt-2 mb-2"
                src="https://sadaora-documents.s3.us-west-1.amazonaws.com/au2ojyrvijrefresh%20icon.png"
                alt=""
              ></img>
            </div>
          </div>
        </div>
        <div className="mt-7 ml-10">
          <Card />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Content;
