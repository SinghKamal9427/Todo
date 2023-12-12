import React, { useEffect, useState } from "react";
import Card from "./utilis/card";
import CardTodo from "./utilis/cardTodo";
import ModalCustom from "./utilis/modal";
import axios from "axios";
import Header from "./layout/header";

export default function Browser() {
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      await axios
        .get("http://localhost:4000/getTodos", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((res) => {
          setData(res.data);
        });
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="container p-4 overflow-scroll">
      <Header/>
      <div className="text-2xl font-bold pb-8">Browser All</div>
      <div className="flex flex-wrap gap-4 ">
        {data?.map((val, id) => {
          return (
            <CardTodo
              keys={val._id}
              title={val?.todoName}
              description={val?.todoDescriptions}
            />
          );
        })}
      </div>
    </div>
  );
}
