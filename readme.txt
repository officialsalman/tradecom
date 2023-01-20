This  Application will run on Node v 18.12.1
npm run dev



*/ Errors /*

BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
any of the ObjectId's invalid in your code? When an invalid ObjectId() is used, this error generally occurs
DB> ObjectId("6348acd2e1a47ca32e79f46f") /// <--- Valid ObjectId
ObjectId("6348acd2e1a47ca32e79f46f") /// <--- No error

DB> ObjectId("6348acd2e1a47ca32e79f46fX") /// <--- Invalid ObjectId
BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer

Invalid options object. Dev Server has been initialized using an options object that does not match the API schema

(node:1681) [DEP_WEBPACK_DEV_SERVER_ON_AFTER_SETUP_MIDDLEWARE] DeprecationWarning: 'onAfterSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
(Use node --trace-deprecation ... to show where the warning was created)
(node:1681) [DEP_WEBPACK_DEV_SERVER_ON_BEFORE_SETUP_MIDDLEWARE] DeprecationWarning: 'onBeforeSetupMiddleware' option is deprecated. Please use the 'setupMiddlewares' option.
