import { useState } from "react";
import { restDataList } from "../utils/data";
import Card from "./Card";

const Body = () => {
  const [list, setList] = useState(restDataList);
  const [text, setText] = useState("");

  return (
    <div className="body">
      <div className="container-field">
        {/* Search bar */}
        <div className="search-box">
          <input
            type="text"
            value={text}
            name="search"
            placeholder="Search for restaurants here"
            onChange={(e) => setText(e.target.value)}
          />

          <button
            className="search-icon"
            onClick={() => {
              let SearchRest = list.filter((data) =>
                data?.info?.name.toLowerCase().includes(text.toLowerCase())
              );
              setList(SearchRest);
            }}
          >
            <i className="fa fa-search"></i>
          </button>
        </div>

        <button
          className="search"
          onClick={() => {
            let newList = list.filter((data) => data?.info?.avgRating >= 4);
            setList(newList);
          }}
        >
          Top RATED restaurants
        </button>

        <button
          className="search"
          onClick={() => {
            let fastDeliver = list.filter(
              (data) => data.info.sla.deliveryTime >= 21
            );
            setList(fastDeliver);
          }}
        >
          Fast Delivery
        </button>

      </div>

      <div className="container">
        <div className="card-container">
          {list.map((restdata) => (
            <Card key={restdata.info.id} data={restdata} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Body;
