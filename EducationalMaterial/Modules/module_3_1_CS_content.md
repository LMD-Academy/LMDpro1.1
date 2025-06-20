# Module 3.1.CS: Programming Fundamentals (Python Focus)

**Level:** 3 (Professional - Specialization)
**Major:** Computer Science / Cybersecurity (CS)

**Estimated Content Length:** 20-25 A4 Pages

**Prerequisites:** Module 1.5 (Technology & Data Literacy Basics), Logical thinking ability.

**Learning Objectives:**
*   Understand fundamental programming concepts (algorithms, data types, variables, control structures).
*   Master core Python syntax and semantics (operators, expressions, statements).
*   Implement programs using fundamental Python data structures (lists, tuples, dictionaries, sets).
*   Develop modular code using functions and understand scope.
*   Learn basic input/output operations and file handling in Python.
*   Understand principles of object-oriented programming (OOP) in Python (classes, objects, inheritance, polymorphism - introductory).
*   Introduce basic error handling using try-except blocks.

---

## 1. Introduction: The Language of Computation

At the heart of computer science and cybersecurity lies the ability to instruct computers precisely what to do. Programming is the process of designing, writing, testing, and maintaining the source code of computer programs. This code, written in a specific programming language, translates human intentions into instructions that a computer can execute. Python has become an exceptionally popular language across various domains, including web development, data science, automation, cybersecurity, and scientific computing, largely due to its readability, extensive libraries, and gentle learning curve, making it an ideal starting point for mastering programming fundamentals.

This module, the first in the Level 3 Computer Science / Cybersecurity specialization, provides a comprehensive introduction to the core concepts of programming, using Python as the primary language. We will start with the absolute basics, defining what algorithms are and exploring fundamental programming building blocks like data types, variables, and control structures (sequential, conditional, iterative). You will gain hands-on experience with Python's syntax, learning how to use operators, form expressions, and write clear statements. We will delve into Python's versatile built-in data structures – lists, tuples, dictionaries, and sets – understanding their characteristics and common use cases. A key focus will be on writing modular and reusable code through functions, including understanding parameter passing and variable scope. You will learn how to interact with users through basic input/output operations and how to read from and write to files. We will also introduce the foundational principles of Object-Oriented Programming (OOP) – classes, objects, inheritance, and polymorphism – concepts crucial for building larger, more complex software systems. Finally, we will cover basic error handling techniques using try-except blocks to make programs more robust. Mastering these programming fundamentals in Python provides a solid foundation for tackling more advanced computer science topics, software development practices, and cybersecurity scripting challenges in subsequent modules.

## 2. Fundamental Programming Concepts

Before diving into Python syntax, let's understand some universal programming concepts.

*   **Algorithm:** A step-by-step procedure or set of rules for solving a specific problem or accomplishing a task. Algorithms must be unambiguous, finite, and effective.
    *   *Example (Making Tea):* 1. Boil water. 2. Put tea bag in cup. 3. Pour boiling water into cup. 4. Wait 3 minutes. 5. Remove tea bag. 6. Add milk/sugar (optional).
*   **Program:** An implementation of an algorithm in a specific programming language.
*   **Source Code:** The human-readable text written by a programmer in a programming language.
*   **Compiler/Interpreter:** A program that translates source code into machine code (instructions the computer's processor can directly execute). Python is typically *interpreted*, meaning code is executed line by line, although compilation to bytecode occurs behind the scenes.
*   **Syntax:** The set of rules that defines the combinations of symbols that are considered to be correctly structured programs in a specific language (like grammar in human language).
*   **Semantics:** The meaning of syntactically correct strings in a language.
*   **Data Types:** Classifications that specify which type of value a variable has and what type of mathematical, relational, or logical operations can be applied to it without causing an error (e.g., integer, floating-point number, string, boolean).
*   **Variables:** Named storage locations in memory that hold data values. The value can typically be changed during program execution.
*   **Control Structures:** Mechanisms that determine the order in which statements are executed.
    *   **Sequence:** Statements are executed one after another in the order they appear.
    *   **Selection (Conditional):** Executes different blocks of code based on whether a condition is true or false (e.g., `if`, `else`).
    *   **Iteration (Looping):** Repeats a block of code multiple times (e.g., `for`, `while`).
*   **Debugging:** The process of finding and fixing errors (bugs) in source code.

## 3. Python Syntax and Semantics Basics

Python is known for its clean and readable syntax.

*   **Statements:** Instructions that the Python interpreter can execute (e.g., assignment statements, `print` statements, `if` statements).
*   **Expressions:** Combinations of values, variables, operators, and function calls that evaluate to a single value (e.g., `5 + 3`, `x * 2`, `len("hello")`).
*   **Indentation:** Python uses whitespace (indentation, typically 4 spaces) to define blocks of code (e.g., code inside an `if` statement or a `for` loop). This is crucial and part of the syntax, unlike many other languages that use braces `{}`.
    ```python
    x = 15 # Example value
    if x > 10:
        print("x is greater than 10") # Indented block
        y = x * 2
    print("This line is outside the if block")
    ```
*   **Comments:** Used to explain code. Ignored by the interpreter.
    *   Single-line comments start with `#`: `# This is a comment`
    *   Multi-line comments (docstrings) often use triple quotes: `"""This is a multi-line docstring."""` (Technically strings, but often used for comments/documentation).
*   **Variables and Assignment:** Use the assignment operator `=` to assign a value to a variable name. Variable names are case-sensitive and should be descriptive (e.g., `user_age = 25`, `total_price = 19.99`). Python is dynamically typed, meaning you don't need to declare the type of a variable explicitly; its type is inferred from the assigned value.
*   **Built-in Functions:** Python comes with many useful functions, e.g.:
    *   `print()`: Displays output to the console.
    *   `input()`: Reads input from the user (returns a string).
    *   `len()`: Returns the length (number of items) of an object (string, list, etc.).
    *   `type()`: Returns the type of an object.
    *   `int()`, `float()`, `str()`: Convert values between types.

## 4. Python Operators

Symbols that perform operations on values (operands).

*   **Arithmetic Operators:** `+` (addition), `-` (subtraction), `*` (multiplication), `/` (true division), `//` (floor division - rounds down to nearest whole number), `%` (modulo - remainder of division), `**` (exponentiation).
*   **Assignment Operators:** `=` (assign), `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, `//= ` (shorthand for performing an operation and assigning the result, e.g., `x += 1` is equivalent to `x = x + 1`).
*   **Comparison (Relational) Operators:** `==` (equal to), `!=` (not equal to), `>` (greater than), `<` (less than), `>=` (greater than or equal to), `<=` (less than or equal to). Return `True` or `False`.
*   **Logical Operators:** `and` (True if both operands are true), `or` (True if at least one operand is true), `not` (True if operand is false, False if operand is true).
*   **Identity Operators:** `is` (True if both operands refer to the same object in memory), `is not` (True if operands refer to different objects).
*   **Membership Operators:** `in` (True if value is found in the sequence), `not in` (True if value is not found in the sequence).

## 5. Python Data Structures

Containers used to store collections of data.

*   **Lists:**
    *   Ordered, mutable (changeable), allow duplicate elements.
    *   Defined with square brackets `[]`: `my_list = [10, "apple", 20.5, 10]`
    *   Access by index: `my_list[1]` returns `"apple"`.
    *   Modify elements: `my_list[0] = 15`.
    *   Common methods: `append()`, `insert()`, `remove()`, `pop()`, `sort()`, `reverse()`, `index()`, `count()`, `len()`.
    *   Use cases: Storing collections where order matters and items might need to be changed, added, or removed.
*   **Tuples:**
    *   Ordered, immutable (unchangeable), allow duplicate elements.
    *   Defined with parentheses `()`: `my_tuple = (10, "apple", 20.5, 10)`
    *   Access by index: `my_tuple[1]` returns `"apple"`.
    *   Cannot modify elements after creation.
    *   Common methods: `count()`, `index()`, `len()`.
    *   Use cases: Storing collections that shouldn't change (e.g., coordinates, RGB colors), used as dictionary keys (since they are immutable).
*   **Dictionaries:**
    *   Unordered (in Python < 3.7, ordered in Python >= 3.7), mutable, store key-value pairs, keys must be unique and immutable.
    *   Defined with curly braces `{}`: `my_dict = {"name": "Alice", "age": 30, "city": "New York"}`
    *   Access values by key: `my_dict["age"]` returns `30`.
    *   Modify values: `my_dict["age"] = 31`.
    *   Add new pairs: `my_dict["email"] = "alice@example.com"`.
    *   Common methods: `keys()`, `values()`, `items()` (returns view objects), `get(key, default)` (safe access), `pop(key)`, `update()`, `len()`.
    *   Use cases: Storing data associated with unique identifiers, configuration settings, representing structured data (like JSON).
*   **Sets:**
    *   Unordered, mutable, do *not* allow duplicate elements.
    *   Defined with curly braces `{}` or `set()`: `my_set = {1, 2, 3, "hello", 2}` results in `{1, 2, 3, "hello"}`.
    *   Cannot access by index (unordered).
    *   Common methods: `add()`, `remove()` (raises error if not found), `discard()` (no error if not found), `pop()` (removes arbitrary element), `clear()`, `len()`.
    *   