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
export const getSkillUser = (isLogin) => async (dispatch) => {
  try {
    const skills = await axios.get(
      `${process.env.NEXT_PUBLIC_API}/skill/profile/${isLogin}`
    );
    const result = skills.data.data;
    dispatch({ type: "GET_ALL_SKILL_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const createSkill = (skill) => async (dispatch) => {
  try {
    const skills = await axios.post(
      `${process.env.NEXT_PUBLIC_API}/skill`,
      skill
    );

    if (skills.data.message === "Skill Already") {
      Toast.fire({
        icon: "error",
        title: "Skill Already",
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
    const result = skills.data.data;
    dispatch({ type: "CREATE_SKILL", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteSkill = (skill_id) => async (dispatch) => {
  try {
    const skills = await axios.delete(
      `${process.env.NEXT_PUBLIC_API}/skill/${skill_id}`
    );
    const result = skills.data.data;
    if (skills.data.status === "success") {
      Toast.fire({
        icon: "success",
        title: "Delete success",
      });
      setTimeout(function () {
        window.location.reload();
      }, 2000);
    }
    dispatch({ type: "DELETE_SKILL", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};
