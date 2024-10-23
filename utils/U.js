openapi: 3.0.0
info:
  title: BensonatePd
  version: 1.0.0
  description: >-
    This is a simple product management system API documentation by Benson
    Christopher
paths:
  /api/v1/products:
    post:
      tags:
        - Products
      summary: Create a new product
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              required:
                - productName
              properties:
                productName:
                  type: string
                  example: Phone
      responses:
        '201':
          description: sucess
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Product created successfully
                  id:
                    type: string
                    example: 6718f720ce4a1b209fc3d298
        '400':
          description: Bad request
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: Enter a product name

    get:
      tags:
        - Products
      summary: Get products by product name
      parameters:
        - name: productName
          in: query
          required: true
          description: The name of the product to be searched
          schema:
            type: string
      responses:
        '200':
          description: Successful
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    example: 6718f720ce4a1b209fc3d298
                  product:
                    type: string
                    example: Phone
        '404':
          description: Product not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: "product not found" 
        '400':
          description: No query param
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: "productName query parameter required"  
                    

  /api/v1/products/{id}:
    get:
      tags:
        - Products
      summary: Get a product by product ID
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
          description: Product ID
      responses:
        '200':
          description: Request Successful
          content:
            application/json:
              schema:
                type: object
                properties:
                  id:
                    type: string
                    example: 6718f720ce4a1b209fc3d298
                  product:
                    type: string
                    example: Phone
        '404':
          description: Product not found
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: "Product not found"
