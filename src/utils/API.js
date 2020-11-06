import axios from "axios";

// Export an object with a "search" method that works for any api when passed that url as a query
export default {
  search: function(query) {
    return axios.get(query);
  }
};
