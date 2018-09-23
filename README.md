# db-gateway - typescript

**This is an experiment!**

This is an experiment in using TypeScript to create a generic
facade for basic database operations that loosely follows the DataMapper
pattern. I'm specifically not implementing anything to handle complex
data models and lazy/eager-loaded dependencies at the moment.

The idea is going to be to embrace the underlying query language of whichever
database server you're using, rather than trying to build an abstraction
on top of it.

This code is written while I'm learning TypeScript and comparing it with
Go for the server side of web application development.
