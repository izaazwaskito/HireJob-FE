import axios from "axios";
import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const getPortofolioUser = (isLogin) => async (dispatch) => {
  try {
    const portofolios = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/portofolio/profile/${isLogin}`
    );
    const result = portofolios.data.data;
    dispatch({ type: "GET_ALL_PORTOFOLIO_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const createPortofolio = (porto, photo) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("por_name", porto.por_name);
    formData.append("por_repository", porto.por_repository);
    formData.append("por_photo", photo);
    formData.append("wrk_id", porto.wrk_id);
    const portofolios = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/portofolio`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    const result = portofolios.data.data;
    dispatch({ type: "CREATE_PORTOFOLIO", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};

export const editPortofolio =
  (por_id, porto, photo, setShow) => async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("por_name", porto.por_name);
      formData.append("por_repository", porto.por_repository);
      formData.append("por_photo", photo);
      formData.append("wrk_id", porto.wrk_id);
      const portofolios = await axios.put(
        `${process.env.NEXT_PUBLIC_API}/portofolio/${por_id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      const result = portofolios.data.data;
      setShow(false);
      dispatch({ type: "EDIT_PORTOFOLIO", payload: result });
      window.location.reload();
    } catch (err) {
      console.log(err.message);
    }
  };

export const deletePortofolio = (por_id, setShow) => async (dispatch) => {
  try {
    const portofolios = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/portofolio/${por_id}`
    );
    const result = portofolios.data.data;
    if (portofolios.data.status === "success") {
      Toast.fire({
        icon: "success",
        title: "Delete success",
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
    setShow(false);
    dispatch({ type: "DELETE_PORTOFOLIO", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
