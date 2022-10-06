import { rest } from "msw";

import { MockResponse } from "./MockResponse";

export const handlers = [
  rest.get("", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(MockResponse));
  }),
];
