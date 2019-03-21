# DevOne Quiz

## Introduction

On April 11th 2019, the [DevOne](https://devone.at/) conference takes place in Linz.

![DevOne Logo](devone-logo.png)

[DevOne](https://devone.at/) is probably the most exciting software development conference happening this year in our region. Thankfully, [Dynatrace](https://www.dynatrace.com/), the organizer behind *DevOne*, gave us **two free tickets** for students of HTL Perg.

We decided to setup a **quiz to select the recipients** of the the free tickets.

## Find Your Way Through the Maze

Your job is to find a way through a maze. Here is an example of such a maze with a size of 10 x 10 spots:

```txt
+---+---+---+---+---+---+---+---+---+---+
|   |                                   |
+   +   +---+---+---+---+---+---+---+   +
|   |   |               |       |       |
+   +   +---+   +---+   +---+   +   +   +
|   |       |   |               |   |   |
+   +---+   +   +   +---+---+---+   +   +
|       |   |   |   |           |   |   |
+   +   +   +   +---+   +---+   +   +   +
|   |       |       |       |   |   |   |
+   +---+---+---+   +---+   +   +   +   +
|   |                   |   |       |   |
+   +---+---+   +---+---+   +---+---+   +
|       |       |           |       |   |
+---+   +   +---+   +---+---+   +---+   +
|   |       |       |           |       |
+   +---+   +   +---+   +---+   +   +---+
|   |       |       |       |   |       |
+   +   +---+---+   +---+   +---+---+   +
|               |       |               |
+---+---+---+---+---+---+---+---+---+---+
```

Your job is to find a way through the maze from the left upper corner to the right lower corner. Here is a solution for the maze shown above:

```txt
+---+---+---+---+---+---+---+---+---+---+
| * | * * * * * * * * * * * * * * * * * |
+ * + * +---+---+---+---+---+---+---+ * +
| * | * |               |       |     * |
+ * + * +---+   +---+   +---+   +   + * +
| * | * * * |   |               |   | * |
+ * +---+ * +   +   +---+---+---+   + * +
| * * * | * |   |   |           |   | * |
+   + * + * +   +---+   +---+   +   + * +
|   | * * * |       |       |   |   | * |
+   +---+---+---+   +---+   +   +   + * +
|   |                   |   |       | * |
+   +---+---+   +---+---+   +---+---+ * +
|       |       |           |       | * |
+---+   +   +---+   +---+---+   +---+ * +
|   |       |       |           | * * * |
+   +---+   +   +---+   +---+   + * +---+
|   |       |       |       |   | * * * |
+   +   +---+---+   +---+   +---+---+ * +
|               |       |             * |
+---+---+---+---+---+---+---+---+---+---+
```

## The Challenge

Finding your way through a small maze like the one shown above would be too simple. So we created a larger one with 100 x 100 spots. You can [download it in zipped text format](https://github.com/rstropek/htl-mobile-computing/raw/master/2018-19/devone-quiz/maze.zip).

## The Rules

Do you want to win one of the tickets? Here is how you can:

1. [Download the maze](https://github.com/rstropek/htl-mobile-computing/raw/master/2018-19/devone-quiz/maze.zip)
1. Find a way through the maze from left upper corner to right lower corner and mark it using `*` characters as shown above
1. Store the solution in a text file, zip it, and send it to your teacher *Rainer Stropek*
1. The first two people who send a correct answer to Mr. Stropek get the tickets

BTW - our principal, Mr. Reisinger, has already agreed that the students winning the tickets are allowed to attend DevOne and be absent from school on the day of the conference. **However, you are responsible to make sure your absence from school isn't a problem (e.g. because of exams).**
