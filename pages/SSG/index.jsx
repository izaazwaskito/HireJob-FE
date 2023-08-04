import React, { useEffect, useState } from "react";
import Image from "next/image";
import profile from "../../public/profile.jpg";
import Navbar from "../../components/Navbar/Navbar";
import defaultprofile from "../../public/defaultprofile.png";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import Pagination from "../../components/Pagination/Pagination";
import SkillShow from "../../components/SkillShow/SkillShow";

export async function getStaticProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/worker/profile`);
  return {
    props: { worker: res.data.data },
  };
}

function SSG({ worker }) {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const onSelectionChange = (e) => {
    const sortDirection = e.target.value;
    setSort(sortDirection);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = worker.slice(firstPostIndex, lastPostIndex);

  return (
    <>
      <header>
        <Navbar />
        <nav className="navbar" style={{ backgroundColor: "#5E50A1" }}>
          <div className="container" style={{ maxWidth: 1650 }}>
            <a className="navbar-brand text-light fw-semibold">Top Jobs</a>
          </div>
        </nav>
      </header>
      <main style={{ display: "relative" }}>
        <div className="container pb-4" style={{ maxWidth: 1650 }}>
          <div className="input-group mb-3 pt-5">
            <input
              type="text"
              className="form-control w-50"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="form-select "
              aria-label="Default select example"
              onChange={onSelectionChange}
              x
            >
              <option selected>Sort</option>
              <option value="asc">Sort by name</option>
              <option value="desc">Sort by place</option>
            </select>
            <button
              className="btn"
              style={{
                border: "1px solid #5E50A1",
                color: "#FFF",
                height: "55px",
                width: "120px",
                backgroundColor: "#5E50A1",
                borderRadius: "4px",
                margin: "auto",
              }}
            >
              Search
            </button>
          </div>
          <div className="pb-4" style={{ backgroundColor: "white" }}>
            <div className="container" style={{ maxWidth: 1650 }}>
              <div className="row mt-5">
                {currentPosts
                  .filter((data) => {
                    return search.toLowerCase() === ""
                      ? data
                      : data.wrk_name
                          .toLowerCase()
                          .includes(search.toLowerCase());
                  })
                  .sort((a, b) => {
                    return sort === "asc"
                      ? a.wrk_name > b.wrk_name
                        ? 1
                        : -1
                      : a.wrk_place > b.wrk_place
                      ? 1
                      : -1;
                  })
                  .map((item) => (
                    <div className="col-md-12  border-bottom">
                      <div className="row mt-4 mb-3" key={item.wrk_id}>
                        <div className="col-md-2 col-12  d-flex">
                          <div
                            style={{ marginLeft: "auto", marginRight: "auto" }}
                          >
                            <Image
                              src={
                                item.wrk_photo == "null" ||
                                item.wrk_photo == null
                                  ? defaultprofile
                                  : item.wrk_photo
                              }
                              width={145}
                              height={145}
                              style={{
                                borderRadius: "50%",
                                objectFit: "cover",
                              }}
                              alt="profile"
                            />
                          </div>
                        </div>
                        <div className="col-md-8 col-12 ">
                          <p className="mb-1 fw-semibold">{item.wrk_name}</p>
                          <p className="mb-1 fw-semibold">{item.wrk_jobdesk}</p>
                          <p className="mb-1" style={{ color: "#9EA0A5" }}>
                            {item.wrk_place}
                          </p>
                          <p className="mb-1" style={{ color: "#9EA0A5" }}>
                            {item.wrk_desc}
                          </p>
                          <p className="mb-3" style={{ color: "#9EA0A5" }}>
                            {item.wrk_email}
                          </p>
                          {/* <SkillShow wrk_id={item.wrk_id} /> */}
                        </div>
                        <div className="col-md-2 col-12 mt-4">
                          <Link
                            className="d-flex"
                            href={`/hiring/${item.wrk_id}`}
                          >
                            <button
                              className="btn"
                              style={{
                                border: "1px solid #5E50A1",
                                color: "#FFF",
                                height: "55px",
                                width: "150px",
                                backgroundColor: "#5E50A1",
                                borderRadius: "4px",
                                margin: "auto",
                              }}
                            >
                              Lihat Profile
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <Pagination
                totalPosts={data.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default SSG;
