const request = require("supertest");
const app = require("../app");


//test post routes
describe("POST/products endpoints", ()=>{
  test("creating a new product", async ()=>{
    const response = await request(app).post("/api/v1/products").send({
      productName: "iPhone 12 pro max"
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("message", "Product created sucessfully");
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("product", "iPhone 12 pro max");
  }, 10000);

  test("return an error if productName is not provided", async()=>{
    const response = await request(app).post("/api/v1/products").send({});
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "Enter a product name"); 
  }, 10000);
});

//test get routes
describe("GET/products endpoints", ()=>{
   //test GET endpoints with productName as a query parameter
  test("get a product with productName as query param", async ()=>{
    const response = await request(app).get("/api/v1/products?productName=Boots");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id"); 
    expect(response.body).toHaveProperty("product", "Boots"); 
  });

  test("return an error if productName is not found in the db", async ()=>{
    const response = await request(app).get("/api/v1/products?productName=invalidProduct");
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("error", "product not found"); 
  });

  test("return an error if there's no productName query param", async ()=>{
    const response = await request(app).get("/api/v1/products");
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty("error", "productName query parameter required"); 
  });
  //test GET endpoints with id as route parameter
  test("get a product with the id as a route parameter", async ()=>{
    const response = await request(app).get("/api/v1/products/6717ab9d18ea13d5ba0615d9");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("id"); 
    expect(response.body).toHaveProperty("product", "Boots"); 
  });

  test("return an error if product id is not valid", async ()=>{
    const response = await request(app).get("/api/v1/products/invalidId");
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("error", "product not found"); 
  });
});

//test PUT routes
describe("PUT/products endpoints", ()=>{
  //test PUT endpoints with productName as a query parameter
 test("update a product with productName as query param", async ()=>{
   const response = await request(app).put("/api/v1/products?productName=Bag").send({
    productName: "Laptop"
   });
   expect(response.statusCode).toBe(200);
   expect(response.body).toHaveProperty("message", "product updated successfully"); 
   expect(response.body).toHaveProperty("id"); 
   expect(response.body).toHaveProperty("product", "Laptop"); 
 });

 test("return an error if productName is not found in the db", async ()=>{
   const response = await request(app).put("/api/v1/products?productName=invalidProduct");
   expect(response.statusCode).toBe(404);
   expect(response.body).toHaveProperty("error", "product not found"); 
 });

 test("return an error if there's no productName query param", async ()=>{
   const response = await request(app).put("/api/v1/products");
   expect(response.statusCode).toBe(400);
   expect(response.body).toHaveProperty("error", "productName query parameter required"); 
 });
 //test PUT endpoints with id as route parameter
 test("update a product with the id as a route parameter", async ()=>{
   const response = await request(app).put("/api/v1/products/6717ab9d18ea13d5ba0615df").send({
    productName: "Hoodies"
   })
   expect(response.statusCode).toBe(200);
   expect(response.body).toHaveProperty("message", "product updated successfully"); 
   expect(response.body).toHaveProperty("id"); 
   expect(response.body).toHaveProperty("product", "Hoodies");  
 });

 test("return an error if product id is not valid", async ()=>{
   const response = await request(app).put("/api/v1/products/invalidId");
   expect(response.statusCode).toBe(404);
   expect(response.body).toHaveProperty("error", "product not found"); 
 });
});

//test DELETE endpoints
describe("DELETE/products endpoints", ()=>{
  //test DELETE endpoints with productName as a query parameter
 test("get a product with productName as query param", async ()=>{
   const response = await request(app).delete("/api/v1/products?productName=T-shirt");
   expect(response.statusCode).toBe(200); 
   expect(response.body).toHaveProperty("message", "product deleted successfully"); 
 });

 test("return an error if productName is not found in the db", async ()=>{
   const response = await request(app).delete("/api/v1/products?productName=invalidProduct");
   expect(response.statusCode).toBe(404);
   expect(response.body).toHaveProperty("error", "product not found"); 
 });

 test("return an error if there's no productName query param", async ()=>{
   const response = await request(app).delete("/api/v1/products");
   expect(response.statusCode).toBe(400);
   expect(response.body).toHaveProperty("error", "productName query parameter required"); 
 });
 //test DELETE endpoints with id as route parameter
 test("delete a product with the id as a route parameter", async ()=>{
   const response = await request(app).delete("/api/v1/products/6717bcfd18ea13d5ba0615ea");
   expect(response.statusCode).toBe(200); 
   expect(response.body).toHaveProperty("message", "product deleted successfully"); 
 });

 test("return an error if product id is not valid", async ()=>{
   const response = await request(app).delete("/api/v1/products/invalidId");
   expect(response.statusCode).toBe(404);
   expect(response.body).toHaveProperty("error", "product not found"); 
 });
});

