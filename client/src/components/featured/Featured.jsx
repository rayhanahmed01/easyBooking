import React from "react";
import "./featured.css";
import useFetch from "../../hooks/useFetch.js";

const Featured = () => {
  const { data, loading, error } = useFetch("/hotels/countByCity?cities=Dhaka,Cox Bazar,Sylhet,Kolkata,Bangkok,Singapore");
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait.."
      ) : (
        <>
          <div className="featuredItem">
            <img
                src="https://images.pexels.com/photos/11260693/pexels-photo-11260693.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Dhaka</h1>
              <h2>{data[0]}  properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
                src="https://images.pexels.com/photos/122107/pexels-photo-122107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Cox Bazar</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
                src="https://images.pexels.com/photos/7185237/pexels-photo-7185237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Sylhet</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
                src="https://images.pexels.com/photos/15915453/pexels-photo-15915453/free-photo-of-symmetrical-view-of-a-white-palace-against-blue-sky-reflecting-in-a-pond.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Kolkata</h1>
              <h2>{data[3]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
                src="https://images.pexels.com/photos/2402000/pexels-photo-2402000.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Bangkok</h1>
              <h2>{data[4]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
                src="https://images.pexels.com/photos/777059/pexels-photo-777059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
                <h1>Singapore</h1>
              <h2>{data[5]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
