import request from "supertest";
import app from "../app";

describe("GET /healthz", () => {
  it("returns 200 with status ok and service users", async () => {
    const res = await request(app).get("/healthz");
    expect(res.status).toBe(200);
    expect(res.body.status).toBe("ok");
    expect(res.body.service).toBe("users");
    expect(typeof res.body.timestamp).toBe("string");
  });
});
