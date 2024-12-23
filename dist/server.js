"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./config/app");
const env_1 = require("./config/env");
const app = (0, app_1.App)();
app.listen(env_1.ENV.port, () => {
    console.log(`Server is running on port ${env_1.ENV.port}`);
});
//# sourceMappingURL=server.js.map