# TRPC Example

* TRPC - [trpc.io](https://trpc.io)
* Express - [Express.JS](https://expressjs.com)
* Typescript - [Typescript](https://www.typescriptlang.org/)

## Setup

```shell
nvm install
nvm use
yarn install
```


## Dev Server

```shell
yarn dev
```

## cURL

```shell
curl "http://localhost:8000/trpc/getProductList"

# {"id":null,"result":{"type":"data","data":[{"_id":"1","_name":"Milk","_price":"25"}]}}

curl -X POST "http://localhost:8000/trpc/addToCart" -d '{"_id":"10", "_quantity": 10}'
# {"id":null,"result":{"type":"data","data":1}}

curl "http://localhost:8000/trpc/getCart"
# {"id":null,"result":{"type":"data","data":[{"_id":"10","_quantity":10}]}}

```
