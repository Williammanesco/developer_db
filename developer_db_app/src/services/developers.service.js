import http from "../helpers/developers-api";

class DevelopersService {
  async getAll() {
    return await http.get("/developers");
  }

  async getById(id) {
    return await http.get(`/developers/${id}`);
  }

  async create(data) {
    return await http.post("/developers", data);
  }

  async update(id, data) {
    return await http.put(`/developers/${id}`, data);
  }

  async delete(id) {
    return await http.delete(`/developers/${id}`);
  }

}

export default new DevelopersService();