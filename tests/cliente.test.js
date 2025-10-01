const request = require("supertest");
const app = require("../src/app");
const pool = require("../src/db");

let server;

beforeAll(async () => {
  // inicia o servidor
  server = app.listen(3001);
  
  // limpa a tabela
  await pool.query("DELETE FROM clientes");
});

afterAll(async () => {
  // fecha o pool do PostgreSQL
  await pool.end();
  
  // fecha o servidor
  await new Promise((resolve) => server.close(resolve));
});

describe("Testes de Clientes", () => {
  test("Deve cadastrar um cliente", async () => {
    const res = await request(server)
      .post("/clientes")
      .send("nome=Teste&email=teste@example.com");
    expect(res.status).toBe(302); // redireciona
  });

  test("Deve listar clientes", async () => {
    const res = await request(server).get("/");
    expect(res.status).toBe(200);
    expect(res.text).toContain("teste@example.com");
  });
});
