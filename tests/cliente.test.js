const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db");

beforeAll(async () => {
  await pool.query("DELETE FROM clientes");
});

afterAll(async () => {
  await pool.end();
});

describe("Testes de Clientes", () => {
  test("Deve cadastrar um cliente", async () => {
    const res = await request(app)
      .post("/clientes")
      .send("nome=Teste&email=teste@example.com");
    expect(res.status).toBe(302); // redireciona
  });

  test("Deve listar clientes", async () => {
    const res = await request(app).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("teste@example.com");
  });
});
