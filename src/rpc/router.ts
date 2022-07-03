import * as trpc from "@trpc/server";
import { z } from "zod";

const cart: unknown[] = [];

export const appRouter = trpc
  .router()
  .query("getProductList", {
    async resolve(req) {
      return [
        {
          _id: "1",
          _name: "Milk",
          _price: "25",
        },
      ];
    },
  })
  .query("getCart", {
    async resolve() {
      return cart;
    },
  })
  .mutation("addToCart", {
    input: z.object({ _id: z.string(), _quantity: z.number() }),
    async resolve(req) {
      return cart.push(req.input);
    },
  });

// export type definition of API
export type AppRouter = typeof appRouter;
