import {createInterface} from 'readline';
const rl = createInterface(process.stdin, process.stdout);

import * as trc from 'typed-rest-client/HttpClient';
const client = new trc.HttpClient('node-client');

function askAndAnalyze() {
  rl.question('Please enter a sentence (empty answer for exit): ', async answer => {
    if (answer) {
      const res = await client.post(
          'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
          JSON.stringify({'documents': [{'id': '1', 'language': 'en', 'text': answer}]}),
          {'Ocp-Apim-Subscription-Key': '5be4b...........................'});
      const body: any = JSON.parse(await res.readBody());
      console.log(`Your sentence is ${Math.round(body.documents[0].score * 100)}% positive.`);
      setTimeout(askAndAnalyze, 0);
    } else {
        rl.close();
    }
  });
}

askAndAnalyze();
