import axios from "axios"

export default ({
  readFile(file) {
      const formData = new FormData();
      formData.append("file", file);         
    
      return axios.post(process.env.VUE_APP_SERVICE + "readFile", formData ,{
        headers: {
          "Content-Type": "multipart/form-data",
        }
      });
  },
  validate(transactions) {
      return axios.post(process.env.VUE_APP_SERVICE + "validate", transactions ,{
        headers: {
          "Content-Type": "application/json"
        }
      })
  },
  convert(bananaRecords) {
    return axios.post(process.env.VUE_APP_SERVICE + "convert", bananaRecords);   
  }  
})
