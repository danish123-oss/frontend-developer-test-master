import React, { useEffect } from "react";
function SideBar() {
  useEffect(() => {
    fun();
  }, []);
  const fun = () => {
    const links = document.querySelectorAll(".side-img");
    if (links.length) {
      links.forEach((link) => {
        link.addEventListener("click", (e) => {
          links.forEach((link) => {
            link.classList.remove("vl");
          });
          e.preventDefault();
          link.classList.add("vl");
        });
      });
    }
  };
  return (
    <React.Fragment>
      <div className="d-flex">
        <div className="text-white my-10 mx-6  ">
          <img
            src="https://sadaora-documents.s3.us-west-1.amazonaws.com/x534vay91wlogoacon.png"
            alt="logo"
            className="logo"
          ></img>
        </div>
        <div className="my-14 mx-6 side-menu mb-3  ">
          <div className="text-white mb-10 d-flex2">
            <img
              className="side-img mt-2"
              alt="home"
              src="https://sadaora-documents.s3.us-west-1.amazonaws.com/3vafo0kcmjVector%20300.png"
            ></img>
            {/* <div className="vl"></div> */}
          </div>
          <div className="text-white mb-10">
            <img
              className="side-img"
              alt="home"
              src="https://sadaora-documents.s3.us-west-1.amazonaws.com/5ineg9vypyIcon%20%282%29.png"
            ></img>
          </div>
          <div className="text-white">
            <img
              className="side-img mb-3"
              alt="home"
              src="https://sadaora-documents.s3.us-west-1.amazonaws.com/ninawquc1kicon%20%283%29.png"
            ></img>
          </div>
        </div>
        <div className="my-14 mx-7 side-menu">
          <div className="text-white mb-2">
            <img
              className="side-img2 mt-2 mb-2"
              alt="home"
              src="https://sadaora-documents.s3.us-west-1.amazonaws.com/4d0rxxma15notifications%20%281%29.png"
            ></img>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideBar;
