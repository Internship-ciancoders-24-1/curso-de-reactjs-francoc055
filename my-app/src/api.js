export class DataService {
  constructor() {
    this.baseUrl = "http://localhost:3002/";
  }

  // Método para obtener todos los datos
  static async getAllData() {
    try {
      const response = await fetch('http://localhost:3002/data');
      const data = await response.json();
        return data;    
    } catch (error) {
      console.error("Error al obtener todos los datos:", error);
      throw error;
    }
  }

  // Método para obtener un dato por su ID
  static async getDataById(id) {
    try {
      const response = await fetch(`http://localhost:3002/data/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error al obtener el dato con ID ${id}:`, error);
      throw error;
    }
  }

  // Método para crear un nuevo dato
  static async createData(newData) {
    try {
      const response = await fetch('http://localhost:3002/data/', {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error al crear un nuevo dato:", error);
      throw error;
    }
  }

  // Método para actualizar un dato por su ID
  static async updateDataById(id, updatedData) {
    try {
      const response = await fetch(`http://localhost:3002/data/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error al actualizar el dato con ID ${id}:`, error);
      throw error;
    }
  }

  // Método para eliminar un dato por su ID
  static async deleteDataById(id) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Error al eliminar el dato con ID ${id}:`, error);
      throw error;
    }
  }
}
