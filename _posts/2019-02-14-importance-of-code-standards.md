---
layout: post
title: "Importance of code standards"
date: 2019-02-14 18:07:00 -0500
categories: programming
author: "Sagrario Meneses"
lang: en
---
Importance of code standards
============================

Standards are constantly present in our lives, they are important to maintain order in things, software engineering is not the exception, code standards are necessary to develop systems with quality.
For the companies of our time the quality of their digital applications represents growth and that is something that Linio knows.

What are code standards?
----------------------------------

They are a series of rules defined for a programming language or a specific programming style. Code standards ensure that developers who contribute in a project follow certain guidelines when writing code, that gives as a result a consistent product that is easy to read and maintain.

History
-------

The use of standards is very important in the quality of software, however, keeping all projects in perfect compliance with established standards is not an easy task, it requires a great effort and constancy on the part of the development team. It is very common during a company creation to start the development of a project without having established standards.

Something like that happened in Linio, at first we did not have standards and it was common that developers wrote code in their own way, resulting in a project difficult to understand and difficult to maintain, I still remember the hours we spent debugging a problem before being even close to where it might have originated.

“Slow and steady wins the race.” Linio's migration to good practices has been progressive, it was not a single day, it began to be adopted in the new projects and step by step it was demanded an adequate level in each change that was sent to our repositories, at the beginning was difficult to adapt between to not having rules established for the revision of code to be very aware of these rules for getting the approval about the change requested to push in to repositories.

Nowadays we have our own set of standards, also some automated processes, such as code style, with the help of a script we can detect lines of code that do not match our standards before trying to push them to the project, there are still many things to improve and standards to add, it is a constant work and we continue working on it.

How do I start the application of code standards in my projects?
----------------------------------------------------------------

Not all companies use the same tools in their development and it is very complicated to find the perfect standard that match our specific needs, it is a good start to achieve quality creating your own standards repository.

Considerations:
---------------

1. Take a base on official standards of the tools used in each project.

2. To obtain an easy-to-read code it is necessary to pay attention to the style of it; code segments, correct use of indentation, length of lines and spaces between them.

3. Naming variables, functions etc.

4. Establish limits in complexity or length of functions.

And most importantly, do not stop at the application of these rules, do not increase the technical debt in the projects, maybe today you have a very large project in which standards have never been applied and it seems a waste of time to start do it, but it is a worthwhile investment for build a quality product and also an engineering team with quality. If the implementation of these standards starts to be a real headache, it is necessary to consider a complete refactoring of your system "divide and conquer" is recommended to start module by module.

Advantages of the application of standards:
------------------------------------------

1. Early error detection: When looking to comply with the standards we established it has been easier to detect possible errors from the code review, preventing these problems from reaching production.

2. Reduction of complexity: Complying with the rules about code style helps build cleaner code, allowing us to easily detect opportunities to simplify our functions.

3. Easy to read code: Respecting the standards in our projects has allowed new team members to easily adapt to the way of work and better understand the code in the repositories.

4. Reusable code: We have code segments that can be consumed by more than one service, thanks to the use of good practices, making the repetition of code less frequent.
    
Recommended clean code principles:
----------------------------------

It is a good strategy to familiarize the team with the principles of clean code, below are some of the principles that inspired us to create our standards and to seek quality in our developments.

1. DRY - Do not repeat yourself.
2. YAGNI - You Are not Gonna Need It.
3. KISS - Keep it simple, stupid.
4. SOLID

     S - Single-responsiblity principle.
     
     O - Open-closed principle.
     
     L - Liskov substitution principle.
     
     I - Interface segregation principle.
     
     D - Dependency Inversion principle.


Conclusion:
----------
The implementation of standards in Linio resulted in:

* A reduction between 60 and 80% in incidents.
* Decrease in the number of hotfix deployments.
* A significant improvement in the quality of the development team.

As we can see the definition and use of standards provides many benefits, in my experience I enjoy the work more since we have a focus on quality code than before when there were no established rules and this has been given thanks to the work of all engineers in the team, it is about aiming all together at the same goal.
