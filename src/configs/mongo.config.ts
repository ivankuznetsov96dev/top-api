import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoString(configService),
    // ...getMongoOptions(),
  };
};

const getMongoString = (configService: ConfigService) => {
  return `mongodb://${configService.get('MONGO_LOGIN')}:${configService.get(
    'MONGO_PASSWORD',
  )}@${configService.get('MONGO_HOST')}:${configService.get(
    'MONGO_PORT',
  )}/${configService.get('MONGO_AUTHDATABASE')}`;
};

/*
MARK: longer supported options. 
  Mongoose 6 always behaves as if useNewUrlParser, useUnifiedTopology, and useCreateIndex are true, 
  and useFindAndModify is false
*/

// const getMongoOptions = () => {
//   return {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//   };
// };
