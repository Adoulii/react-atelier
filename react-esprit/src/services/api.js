import axios from "axios";

const url = "http://localhost:3001/events";

export default class DataService {
  static async getallEvents(id) {
    id = id || "";

    return await axios.get(`${url}/${id}`);
  }

  static async addEvent(event) {
    return await axios.post(url, event);
  }

  static async editEvent(id, event) {
    return await axios.put(`${url}/${id}`, event);
  }

  static async deleteEvent(id) {
    return await axios.delete(`${url}/${id}`);
  }
}
