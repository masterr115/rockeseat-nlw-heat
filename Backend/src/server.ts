import { serverHttp } from "./app";

serverHttp.listen(process.env.APP_PORT, () =>
  console.log(`Server is running on PORT ${process.env.APP_PORT}`)
);
