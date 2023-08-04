import React, { useEffect, useState } from "react";
import { getSkillUser } from "../../configs/redux/actions/skillActions";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../pages/hiring/Hiring.module.css";
import { json } from "react-router-dom";
import axios from "axios";

const SkillShow = ({ wrk_id }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API}/skill/profile/${wrk_id}`)
      .then((response) => setData(response.data.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default SkillShow;
