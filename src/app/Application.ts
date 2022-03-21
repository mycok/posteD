import express, { Express } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';

export class Application {
  static instance = new Application();

  readonly app: Express;

  private constructor() {
    this.app = express();
    this.middlewareSetup();
  }

  private middlewareSetup() {
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(helmet({
      contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'", "'unsafe-inline'"],
          styleSrc: ["'self'", "'unsafe-inline'"],
          imgSrc: ["'self'", "data:", "*.amazon.com"]
        }
      },
      referrerPolicy: {
        policy: 'same-origin'
      }
    }));
  }
}
