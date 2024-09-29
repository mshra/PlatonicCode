# PlatonicCode

Develop a Gen AI powered tool to make a teaching assistant to teach a student using the Socratic teaching method. The Socratic method is where the assistant asks probing questions and leads the student to the answer instead of revealing the answer. Given this is a hard problem, we want to restrict it to one particular topic viz. Learning of Data Structures and Algorithms. Feel free to narrow it down even further if it helps make a high-quality assistant e.g. only for Algorithms of Sorting. That is a topic that should be familiar to most software engineers working on this. As an example, if a test-case times out, the assistant shouldn’t just say: “It timed out because it was a large input size”. It should first pick the right question to ask the student e.g. “What can you say about the difference between this test-case and the other test-cases that passed?” Then depending on what answer the student gives, ask the next relevant question, eventually making the student see that this test-case is quite large and some particular section of their code timed out processing that size. Hence that section needs to be optimized. Several studies have shown that the Socratic method of teaching is very effective for learning, but it is very challenging to scale for any commercial viability anywhere in education, because of a. limited supply of effective teachers who can do this and b. it is not very effective in 1xMany teaching, needing it to be 1x1. AI assistants have the potential to overcome both of these challenges.

[Claude solution](https://claude.ai/chat/1d463202-5d39-4a64-83ec-e0c9975c1907)

## TODO

- [ ] Landing Page
- [x] Setting up authentication
- [x] Storing information in database
- [x] Editor integrated
- [ ] Set up a problem(on /problems) - start with Binary Search or Algorithms of sorting
