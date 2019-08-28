import * as axios from "axios"

export default {
    methods: {     
      readFile: function(file) {
         const formData = new FormData();
         formData.append("file", file);         
       
         return axios.post(process.env.VUE_APP_SERVICE + "readFile", formData ,{
           headers: {
             "Content-Type": "multipart/form-data"
           }
         });
      },
      validate: function(transactions) {
         return axios.post(process.env.VUE_APP_SERVICE + "validate", transactions ,{
            headers: {
              "Content-Type": "application/json"
            }
          })
      }     
   }
}