This  Application will run on Node v 18.12.1
npm run dev



*/ Errors /*

BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer
any of the ObjectId's invalid in your code? When an invalid ObjectId() is used, this error generally occurs
DB> ObjectId("6348acd2e1a47ca32e79f46f") /// <--- Valid ObjectId
ObjectId("6348acd2e1a47ca32e79f46f") /// <--- No error

DB> ObjectId("6348acd2e1a47ca32e79f46fX") /// <--- Invalid ObjectId
BSONTypeError: Argument passed in must be a string of 12 bytes or a string of 24 hex characters or an integer