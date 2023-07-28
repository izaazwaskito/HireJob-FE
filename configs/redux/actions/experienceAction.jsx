import axios from "axios";

export const getExperienceUser = (isLogin) => async (dispatch) => {
  try {
    const experiences = await axios.get(
      `http://localhost:7474/experience/profile/${isLogin}`
    );
    const result = experiences.data.data;
    console.log(result);
    dispatch({ type: "GET_ALL_EXPERIENCE_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const createExperience = (data) => async (dispatch) => {
  try {
    const experiences = await axios.post(
      `http://localhost:7474/experience`,
      data
    );
    const result = experiences.data.data;
    console.log(result);
    dispatch({ type: "CREATE_EXPERIENCE", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};

export const editExperience = (exp_id, data, setShow) => async (dispatch) => {
  try {
    const experiences = await axios.put(
      `http://localhost:7474/experience/${exp_id}`,
      data
    );
    const result = experiences.data.data;
    console.log(result);
    setShow(false);
    dispatch({ type: "EDIT_EXPERIENCE", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
