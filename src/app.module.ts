import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserResolver } from './modules/user/user.resolver';
import { TweetResolver } from './modules/tweet/tweet.resolver';
import { UserService } from './modules/user/user.service';
import { TweetService } from './modules/tweet/tweet.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    UserResolver,
    TweetResolver,
    UserService,
    TweetService,
  ],
})
export class AppModule {}
