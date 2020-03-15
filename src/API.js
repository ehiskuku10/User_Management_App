import axios from "axios";

export const allUsers = () => {
  return axios
    .get(`https://kuku-user-management-app.herokuapp.com/user`)
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};

export const oneUser = userId => {
  return axios
    .get(`https://kuku-user-management-app.herokuapp.com/user/${userId}`)
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};

export const editUser = (e, userId) => {
  return axios
    .put("https://kuku-user-management-app.herokuapp.com/user/edit/" + userId, {
      data: {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        dob: e.target.dob.value,
        address: e.target.address.value,
        phone: e.target.phone.value
      }
    })
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};

export const removeUser = userId => {
  return axios
    .delete(
      "https://kuku-user-management-app.herokuapp.com/user/delete/" + userId
    )
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};

export const createUser = e => {
  return axios
    .post("https://kuku-user-management-app.herokuapp.com/user/create/", {
      data: {
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        dob: e.target.dob.value,
        address: e.target.address.value,
        phone: e.target.phone.value
      }
    })
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};
