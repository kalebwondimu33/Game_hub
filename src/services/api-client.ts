import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3ab3fcb3b1ea4e7385ea1f00fa53948f",
  },
});
