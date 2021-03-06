# KapBot #
KapBot is a Twitch Chatbot powered by AWS Lex and Lambda.

# Screenshots #

#### Chatbot within Slack ####
![slack example](https://github.com/scottfoster/kapbot/raw/master/img/example.png)

#### Lex Configuration ####
![lex configuration](https://github.com/scottfoster/kapbot/raw/master/img/lex.png)

# Installation #
```
1. git clone git@github.com:scottfoster/kapbot.git .
2. Create a Twitch Client ID at https://www.twitch.tv/kraken/oauth2/clients/new
3. Replace XXXXX in serverless.yml with your Twitch Client ID
4. npm install
5. serverless deploy
6. Create bot, intents and utterances in Lex
```

# License #

Copyright 2017 Scott Foster

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
