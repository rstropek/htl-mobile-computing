# "Natural Language Processing" Exercise

## Introduction

Your job is to write a tool that can perform a [sentiment analysis](https://en.wikipedia.org/wiki/Sentiment_analysis) on a text entered by the user. It should analyze whether the statement is positive (e.g. *Wow, this is great :-)*) or negative (e.g. *I really hate your product. It is a waste of money :-(*). You should use a machine learning (aka *Artificial Intelligence* aka *Deep Learning*) approach to solve this problem.

Of course, developing your own *Deep Neural Network* for natural language processing would take far too much time. Therefore, you should use Microsoft's [Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/). They offer various Web APIs with which you can interact with powerful machine learning systems for vision, speech, search, etc. They can also perform [sentiment analysis](https://azure.microsoft.com/en-us/services/cognitive-services/text-analytics/).

## Specification

* Write a command line tool using **Node.js** and **TypeScript**.

* The tool should ask the user for a sentence.

* The tool has to send the entered sentence to *Cognitive Services* for analysis.

* The tool should print the result in the form *Your sentence is x% positive.*.

* After printing the result, the user has to be asked for a new sentence. The program should exit if the user enters an empty string.

Here is an example of the tool's output:

```
Please enter a sentence (empty answer for exit): Wow, this is great :-)
Your sentence is 100% positive.
Please enter a sentence (empty answer for exit): I really hate your product. It is a waste of money :-(
Your sentence is 0% positive.
Please enter a sentence (empty answer for exit):
```

## Hints

* **Before you start coding**, take some time to make yourself familiar with the services that [Microsoft Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/) offer. You can use the offering's website to interactively try the different machine learning services.

* Next, create a **free** trial API key for [Microsoft Cognitive Services](https://azure.microsoft.com/en-us/services/cognitive-services/). It is free. The number of requests you can make is limited but sufficient for this exercise.

* For calling the sentiment analysis service, use the NPM package `typed-rest-client`. You are also going to need the NPM package `@types/node` as a **development dependency**.

* For letting the user enter a text via *stdin*, use the NPM package that we already covered in our Node.js introduction lessons.

* Take a look at the [Sentiment Analysis Web API](https://westus.dev.cognitive.microsoft.com/docs/services/TextAnalytics.V2.0/operations/56f30ceeeda5650db055a3c9). If necessary, use a search engine to find a JavaScript sample for sentiment analysis in Microsoft's documentation.

* Here is an example for how to send data to the sentiment Web API:

```
const res = await client.post(
    'https://westcentralus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment',
    JSON.stringify({'documents': [{'id': '1', 'language': 'en', 'text': 'Wow, I really like your product :-)'}]}),
    {'Ocp-Apim-Subscription-Key': '5be4b...........................'});
console.log(await res.readBody());
```

## Solution

You can find a sample solution (deliberately without comments) in [*app.ts*](app.ts), [*package.json*](package.json) and [*tsconfig.json*](tsconfig.json). However, before you take a look at it, try to find your own solution!
