import matchers from "@testing-library/jest-dom/matchers";
import { server } from "src/__mocks__/server";
import { expect } from "vitest";

expect.extend(matchers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
