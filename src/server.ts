import { App } from "config/app";
import { ENV } from "config/env";

const app = App();

app.listen(ENV.port, () => {
  console.log(`Server is running on port ${ENV.port}`);
});
