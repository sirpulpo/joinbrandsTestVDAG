import axios from 'axios';

class InfoGeneralService {
  infoGeneral(empl_id) {
    return axios
      .get(`${process.env.VUE_APP_API}/colaborador/infoKioskosOperador`, {
        params: {
          empl_id,
        },
      })
      .then((res) => {
        if (res.data && res.data[0]) {
          localStorage.setItem("usr", JSON.stringify(res.data[0]));
        }
        return Promise.resolve(res.data[0]);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err.response.data);
      });
  }
}

export default new InfoGeneralService();