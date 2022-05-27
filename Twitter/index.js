import { TwitterApi } from 'twitter-api-v2';

// Instanciate with desired auth type (here's Bearer v2 auth)
const twitterClient = new TwitterApi('<YOUR_APP_USER_TOKEN>');

// Tell typescript it's a readonly app
const roClient = twitterClient.readOnly;

// Play with the built in methods
const user = await roClient.v2.userByUsername('plhery');
await twitterClient.v1.tweet('Hello, this is a test.');
// You can upload media easily!
await twitterClient.v1.uploadMedia('./big-buck-bunny.mp4');