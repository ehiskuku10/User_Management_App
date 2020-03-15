import axios from "axios";

export const allUsers = () => {
  return axios
    .get(`http://127.0.0.1:5050/user`)
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};

export const oneUser = userId => {
  return axios
    .get(`http://127.0.0.1:5050/user/${userId}`)
    .then(res => res)
    .catch(err => {
      return err.response.data;
    });
};

export const editUser = (e, userId) => {
  return axios
    .put("http://127.0.0.1:5050/user/edit/" + userId, {
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
    .delete("http://127.0.0.1:5050/user/delete/" + userId)
    .then(res => res)
    .catch(err => err);
};

export const createUser = e => {
  return axios
    .post("http://127.0.0.1:5050/user/create/", {
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
