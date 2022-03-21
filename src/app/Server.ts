import { Application } from './Application';
import { logger } from '../utils/logger';

export class Server {
  constructor() {
    Application.instance.app.listen(process.env.PORT, () =>
      logger.info(
        `
      -----------------------------------------------
      Server Started! Express: http://localhost:${process.env.PORT}
      -----------------------------------------------
      `
      )
    );
  }
}
