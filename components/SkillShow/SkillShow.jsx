import React, { useEffect, useState } from "react";
import { getSkillUser } from "../../configs/redux/actions/skillActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../pages/hiring/Hiring.module.css";
import { json } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkillShow = ({ wrk_id }) => {
  const [data, setData] = useState([]);
  const [loading, isLoading] = useState(false);
  useEffect(() => {
    isLoading(true);
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/skill/profile/${wrk_id}`)
      .then((response) => {
        isLoading(false);
        setData(response.data.data);
      })
      .catch((error) => console.log(error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton count={1} height={"40px"} />
      ) : (
        <div className="col-md-12 mt-3 d-flex flex-wrap">
          {data.map((item, Index) => (
            <div
              className={`ps-2 pe-2 mb-2 ${styles.flexBox}`}
              key={Index.skill_id}
            >
              {item.skill_name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillShow;
