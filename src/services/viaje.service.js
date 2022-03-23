import axios from 'axios';
const testEnv = process.env.VUE_APP_TEST;

class ViajeService {
  async getViajesList(empl_id) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/viajesTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/viajes`;
    // console.log({testEnv, uri});  
    return axios
      .get(uri, {
        params: {
          empl_id,
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.result);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err.response.data);
      });
  }

  async getAdminViajesList() {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/admin/viajesTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/admin/viajes`;
    // console.log({testEnv, uri});  
    return axios
      .get(uri, {
        params: {
          // empl_id,
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.result);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err.response.data);
      });
  }

  async getQrInfo(wo) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/qrinfoTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/qrinfo`;
    // console.log({testEnv, uri}); 
    return axios
      .get(uri, {
        params: {
          wo,
        },
      })
      .then((res) => {
        // console.log({res});
        // console.log(res.data.result);
        return Promise.resolve(res.data.result);
      })
      .catch((err) => {
        // console.log("service ->", err.response.data);
        return Promise.reject(err.response.data);
      });
  }

  async historicoViajeAdmin(oc) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/historicoViajeAdminTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/historicoViajeAdmin`;

    return axios
      .get(uri, {
        params: {
          oc,
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.result);
      })
      .catch((err) => {
        return Promise.reject(err.response.data);
      });
  }

  async historicoInfo(oc) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/historicoInfoTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/historicoInfo`;

    return axios
      .get(uri, {
        params: {
          oc,
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.result);
      })
      .catch((err) => {
        return Promise.reject(err.response.data);
      });
  }

  async updtBndrPdfQr(obj) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/updtBndrPdfQrTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/updtBndrPdfQr`;
    // console.log({testEnv, uri}); 
    return axios
      .get(uri, {
        params: {
          wo: obj.wo,
          oc: obj.oc,
          name: obj.name,
          no_factprovee: obj.no_factprovee,
          serieCertificado: obj.serieCertificado,
          folioFiscal: obj.folioFiscal,
          folioFactura: obj.folioFactura,
        },
      })
      .then((res) => {
        // console.log({res});
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        // console.log("service ->", err.response.data);
        return Promise.reject(err.response.data);
      });
  }

  async updtNoFactProvee(obj) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/updtNoFactProveeTesting`
      : `${process.env.VUE_APP_API}/cartaPorte/updtNoFactProvee`;
    // console.log({testEnv, uri}); 
    return axios
      .post(uri, obj)
      .then((res) => {
        return Promise.resolve(res.data);
      })
      .catch((err) => {
        console.log({ err });
        return Promise.reject(err.response);
      });
  }

  async busquedaViajeAdmin(param) {
    const uri = testEnv === "true"
      ? `${process.env.VUE_APP_API}/cartaPorte/busquedaViajeAdminesting`
      : `${process.env.VUE_APP_API}/cartaPorte/busquedaViajeAdmin`;

    return axios
      .get(uri, {
        params: {
          param,
        },
      })
      .then((res) => {
        return Promise.resolve(res.data.result);
      })
      .catch((err) => {
        return Promise.reject(err.response.data);
      });
  }
}

export default new ViajeService();
