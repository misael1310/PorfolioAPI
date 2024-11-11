import { CorsOptions } from "cors";
import { ENV } from "./env";

const allowedOrigins = ENV.allowOrigins?.split(",");

const corsOptions: CorsOptions = {
  origin: allowedOrigins,
  methods: "GET",
};

export { corsOptions };
