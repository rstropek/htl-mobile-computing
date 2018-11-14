# Thesaurus

## Introduction

Your job is to implement a command-line [Thesaurus](https://en.wikipedia.org/wiki/Thesaurus) tool in Node.js using TypeScript. Use the [openthesaurus.de](https://www.openthesaurus.de/) word database as the data source for your tool. You can download the database in text format [here](https://www.openthesaurus.de/export/OpenThesaurus-Textversion.zip).

**This example will be a good preparation for the upcoming exam.** If you can complete it (without the extra challenges mentioned below) within two hours, you are well prepared for the exam.

## Requirements

1. Use *TypeScript* and *Node.js* to solve this exercise.

1. Apply all the best practices we discussed for Node.js and TypeScript projects (e.g. scripts in *package.json*, TypeScript configuration file, *.gitignore* file, etc.).

1. Do *not* use any ready-made thesaurus tools from NPM. Feel free to use any lower level tools (e.g. packages to read text files) from NPM that seem helpful to you.

1. Your thesaurus tool should accept a list of words in the command line. If no words were given in the command line, print an error message like *Please specify words*. Example for a valid call: `node thesaurus.js Cherrytomate MDF`

1. For every given word you have to find synonyms in the thesaurus database and print them on *stdout*. A partly match should count as a match (e.g. *MDF* is part of *MDF-Platte*, therefore it is a match). There can be multiple matches for a word. The chapter *Test Cases* below shows examples for calls and corresponding results.

1. If your tool did not find any matches in the thesaurus database, print an error message like *No matches found*.

## Extra Challenges

1. Do not load the entire thesaurus file into memory (e.g. because of memory restraints). Read and process it line-by-line instead.

1. Implement an interactive mode that can be started with `node thesaurus.js -i`. In interactive mode, the program runs in a loop in which the user can enter a word and the system prints synonyms. This loop runs until the user enters `\q`.

You can earn an extra point for your homework for each of the extra challenges mentioned above.

That's not enough? You want a harder challenge? Try to implement automated tests with [Jasmine](https://jasmine.github.io/setup/nodejs.html). You find a nice tutorial that helps you getting started [here](https://jasmine.github.io/tutorials/your_first_suite.html). This extra challenge is completely optional and it is not relevant for the upcoming exam.

## Test Cases

### No Matches Found

Command line: `node thesaurus.js Perg`

Expected error message: *No matches found*

### No Words

Command line: `node thesaurus.js`

Expected error message: *Please specify words*

### Single Word, Multiple Matches

Command line: `node thesaurus.js Dummy`

Expected result:

```txt
Dummy-Variable:
  Scheinvariable
  Stellvertreter-Variable
Dummy:
  Attrappe
  Puppe
```

### Multiple Words, Single Match for each Word

Command line: `node thesaurus.js Cherrytomate MDF`

Expected result:

```txt
Cherrytomate:
  Cocktailtomate
  Kirschtomate
MDF-Platte:
  mitteldichte Faserplatte
  mitteldichte Holzfaserplatte
```
