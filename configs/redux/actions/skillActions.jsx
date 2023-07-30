import axios from "axios";

export const getSkillUser = (isLogin) => async (dispatch) => {
  try {
    const skills = await axios.get(
      `http://localhost:7474/skill/profile/${isLogin}`
    );
    const result = skills.data.data;
    console.log(result);
    dispatch({ type: "GET_ALL_SKILL_USER", payload: result });
  } catch (err) {
    console.error(err.message);
  }
};

export const createSkill = (data) => async (dispatch) => {
  try {
    const skills = await axios.post(`http://localhost:7474/skill`, data);
    const result = skills.data.data;
    console.log(result);
    dispatch({ type: "CREATE_SKILL", payload: result });
  } catch (err) {
    console.log(err.message);
  }
};

export const deleteSkill = (exp_id, setShow) => async (dispatch) => {
  try {
    const skills = await axios.delete(`http://localhost:7474/skill/${exp_id}`);
    const result = skills.data.data;
    console.log(result);
    setShow(false);
    dispatch({ type: "DELETE_SKILL", payload: result });
    window.location.reload();
  } catch (err) {
    console.log(err.message);
  }
};
