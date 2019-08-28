<template>
  <div class="file-uploader">
    <div class="container">
      <input type="file" id="file" @change="filesChange($event.target.files)">
      <label for="file">{{label}}</label>
    </div>
  </div>
</template>

<script>
import * as axios from "axios"
import rest from "@/api/Rest.js"

export default {
  name: "FileUploader",
  mixins: [rest],
  data() {
    return {
      label: "Choose a file"
    };
  },
  methods: {
    filesChange(fileList) {      
      this.label = fileList[0].name;
      this.readFile(fileList[0])
        .then(readFileResponse => {
          this.$emit("uploaded", readFileResponse.data);
          
          this.validate(readFileResponse.data)
            .then(validatedResponse => this.$emit("validated", validatedResponse.data))
            .catch(error => console.log(error));
        })  
        .catch(error => console.log(error));     
    }
  }
};

</script>

<style scoped>
input {
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
}
input + label {
  max-width: 80%;
  font-size: 1.25rem;
  /* 20px */
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
  /* 10px 20px */
}
input:focus + label,
input + label:hover {
  background-color: red;
}
input + label {
  font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
  cursor: pointer;
}
input:focus + label {
  outline: 1px dotted #000;
  outline: -webkit-focus-ring-color auto 5px;
}
input + label * {
  pointer-events: none;
}
input + label {
  color: #f1e5e6;
  background-color: #d3394c;
}
</style>
