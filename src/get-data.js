export default class GetData {
  async getResource() {
    const res = await fetch(
      "https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e"
    );
    if (!res.ok) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }
    return await res.json();
  }

  async getAllProducts() {
    const result = await this.getResource();
    return result;
  }
}
