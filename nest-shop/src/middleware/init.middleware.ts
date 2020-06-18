
// @Injectable()
// export class InitMiddleware implements NestMiddleware {
//   use(req: any, res: any, next: () => void) {
//     console.log('init');
//     next();
//   }
// }
export function InitMiddleware(req, res, next) {
  console.log('init');
  next();
}
