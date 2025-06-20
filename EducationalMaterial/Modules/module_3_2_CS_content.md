# Module 3.2.CS: Data Structures & Algorithms I

**Level:** 3 (Professional - Specialization)
**Major:** Computer Science / Cybersecurity (CS)

**Estimated Content Length:** 15-25 A4 Pages

**Prerequisites:** Module 3.1.CS (Programming Fundamentals - Python Focus)

**Learning Objectives:**
*   Understand the concept of abstract data types (ADTs).
*   Analyze the time and space complexity of algorithms using Big O notation.
*   Implement and analyze fundamental linear data structures: arrays/lists, linked lists (singly, doubly), stacks, queues.
*   Implement and analyze fundamental non-linear data structures: trees (binary trees, binary search trees - BSTs), hash tables (dictionaries).
*   Understand and implement basic sorting algorithms (Bubble Sort, Selection Sort, Insertion Sort).
*   Understand and implement basic searching algorithms (Linear Search, Binary Search).
*   Introduce the concept of recursion and its application.

---

## Introduction: Organizing Data and Solving Problems Efficiently

While Module 3.1.CS focused on the syntax and basic constructs of programming, this module delves into two fundamental pillars of computer science: Data Structures and Algorithms. Data structures are ways of organizing and storing data in a computer so that it can be accessed and modified efficiently. Algorithms, as previously defined, are step-by-step procedures for solving problems. The choice of data structure significantly impacts the efficiency of the algorithms that operate on that data. Understanding how to analyze the efficiency of algorithms is crucial for writing performant code, especially when dealing with large datasets or complex computations – a common scenario in both software development and cybersecurity analysis.

This module builds directly on your Python programming foundation. We will begin by introducing the concept of Abstract Data Types (ADTs) as mathematical models for data structures. A major focus will be on analyzing algorithm efficiency using Big O notation, providing a standardized way to describe how an algorithm's runtime or space requirements grow as the input size increases. You will learn to implement, use, and analyze the performance characteristics of fundamental linear data structures, including arrays (Python lists), linked lists (singly and doubly linked), stacks, and queues. We will then move to non-linear structures, exploring trees (specifically binary trees and binary search trees) and hash tables (the underlying concept for Python dictionaries). Alongside data structures, we will cover essential algorithms for searching (linear search, binary search) and sorting (bubble sort, selection sort, insertion sort), analyzing their respective time complexities. Finally, we will introduce recursion, a powerful programming technique where a function calls itself, and see how it can be applied to solve certain problems elegantly. Mastering these core data structures and algorithms is essential for any computer scientist or cybersecurity professional aiming to design efficient solutions and understand the performance implications of different approaches.

## Algorithm Analysis: Complexity and Big O Notation

When solving a problem, there are often multiple algorithms that can achieve the desired result. How do we compare them? Algorithm analysis provides a way to measure the efficiency of an algorithm, typically in terms of time (how long it takes) and space (how much memory it uses), independent of specific hardware or programming language implementations.

**Complexity:**
*   **Time Complexity:** Measures the amount of time an algorithm takes to run as a function of the size of the input (n). We usually focus on the *growth rate* as n becomes large.
*   **Space Complexity:** Measures the amount of memory space an algorithm requires as a function of the size of the input (n). This includes both the space for the input data and any auxiliary space used by the algorithm.

**Asymptotic Notation:**
We use asymptotic notation to describe the limiting behavior of a function when the argument tends towards a particular value or infinity. It focuses on the dominant term and ignores constant factors and lower-order terms, as these become insignificant for large inputs.

**Big O Notation (O): Upper Bound**
*   **Definition:** Provides an asymptotic *upper bound* on the growth rate of a function. `f(n) = O(g(n))` means that for sufficiently large n, `f(n)` grows no faster than a constant multiple of `g(n)`.
*   **Purpose:** Describes the *worst-case* time or space complexity.
*   **Common Big O Complexities (from fastest to slowest growth):**
    *   **O(1) - Constant Time:** Runtime is constant and does not depend on the input size n. (e.g., accessing an element in an array by index, pushing/popping from a stack).
    *   **O(log n) - Logarithmic Time:** Runtime grows logarithmically with n. Typically seen in algorithms that repeatedly divide the problem size (e.g., binary search).
    *   **O(n) - Linear Time:** Runtime grows linearly with n. (e.g., iterating through all elements in a list once, linear search).
    *   **O(n log n) - Log-Linear Time:** Runtime grows by n multiplied by log n. Common in efficient sorting algorithms (e.g., Merge Sort, Heap Sort).
    *   **O(n^2) - Quadratic Time:** Runtime grows quadratically with n. Often involves nested loops iterating over the data (e.g., Bubble Sort, Selection Sort, comparing all pairs in a list).
    *   **O(n^3) - Cubic Time:** Runtime grows cubically with n. (e.g., algorithms involving triple nested loops).
    *   **O(2^n) - Exponential Time:** Runtime grows exponentially with n. Often seen in brute-force algorithms exploring all possibilities (e.g., finding all subsets of a set).
    *   **O(n!) - Factorial Time:** Runtime grows factorially with n. Extremely slow growth (e.g., solving the traveling salesman problem via brute-force permutation check).

**Other Notations (Briefly):**
*   **Big Omega (Ω): Lower Bound:** Describes the *best-case* complexity. `f(n) = Ω(g(n))` means `f(n)` grows at least as fast as `g(n)`.
*   **Big Theta (Θ): Tight Bound:** Describes the *average-case* or tight bound. `f(n) = Θ(g(n))` means `f(n)` grows at the same rate as `g(n)` (both O and Ω).

**Why Big O Matters:** Understanding the Big O complexity helps choose the most efficient algorithm for a given problem, especially when dealing with large inputs where the difference between O(n log n) and O(n^2) can be enormous.

**Analyzing Code Complexity:**
*   **Sequence of statements:** O(1) + O(1) + ... = O(1).
*   **Loops:** Complexity of the loop body multiplied by the number of iterations. A simple `for` loop from 0 to n is typically O(n) if the body is O(1).
*   **Nested Loops:** Multiply the complexities. Nested loops from 0 to n often result in O(n^2).
*   **Conditionals (`if`/`else`):** Take the complexity of the *worst-case* branch.
*   **Function Calls:** Add the complexity of the function call.

## Abstract Data Types (ADTs)

An ADT is a mathematical model for a data type, defined by its behavior (the operations that can be performed on it) from the point of view of a user. It specifies *what* operations are supported but not *how* they are implemented.

*   **Example: Stack ADT**
    *   *Data:* A collection of items.
    *   *Operations:* `push(item)` (add item to top), `pop()` (remove and return item from top), `peek()` (return top item without removing), `isEmpty()`, `size()`.
*   **Example: Queue ADT**
    *   *Data:* A collection of items.
    *   *Operations:* `enqueue(item)` (add item to rear), `dequeue()` (remove and return item from front), `peek()` (return front item without removing), `isEmpty()`, `size()`.

**ADT vs. Data Structure:**
*   **ADT:** The logical description (interface).
*   **Data Structure:** The concrete implementation (e.g., a Stack ADT can be implemented using a Python list or a linked list).

ADTs allow us to reason about data types at a higher level of abstraction, separating the interface from the implementation details.

## Linear Data Structures

Data elements are arranged in a sequential manner.

**1. Arrays / Python Lists:**
*   **Description:** Ordered collection of items stored in contiguous memory locations (in traditional arrays; Python lists are dynamic arrays, more flexible but with some overhead).
*   **Implementation (Python List):** Built-in.
*   **Complexity (Python List - Amortized):**
    *   Access by index (`my_list[i]`): O(1)
    *   Update by index (`my_list[i] = val`): O(1)
    *   Append (`append()`): O(1) (amortized - occasionally requires resizing, which is O(n))
    *   Insert/Delete at arbitrary position (`insert()`, `pop(i)`, `remove()`): O(n) (requires shifting elements)
    *   Search (value): O(n) (linear search)
    *   Get Length (`len()`): O(1)
*   **Pros:** Fast access by index, simple to use.
*   **Cons:** Slow insertion/deletion in the middle, potentially wasteful if pre-allocated size is too large (less relevant for Python lists), resizing overhead.

**2. Linked Lists:**
*   **Description:** Collection of nodes where each node contains data and a reference (pointer) to the next node in the sequence. Not stored contiguously in memory.
*   **Types:**
    *   *Singly Linked List:* Each node points to the next node only.
    *   *Doubly Linked List:* Each node points to both the next and the previous node.
*   **Implementation (Python - requires custom classes):**
    ```python
    class Node:
        def __init__(self, data):
            self.data = data
            self.next = None # For singly linked
            # self.prev = None # For doubly linked

    class LinkedList:
        def __init__(self):
            self.head = None
        # Methods for insert, delete, search, etc.
    ```
*   **Complexity:**
    *   Access by index: O(n) (must traverse from the head)
    *   Search (value): O(n)
    *   Insertion/Deletion at Head: O(1)
    *   Insertion/Deletion at Tail: O(n) (singly, unless tail pointer maintained), O(1) (doubly, if tail pointer maintained)
    *   Insertion/Deletion at arbitrary position (given node reference): O(1) (doubly), O(n) (singly - need previous node)
*   **Pros:** Efficient insertion/deletion at known positions (especially head/tail), dynamic size without resizing overhead.
*   **Cons:** Slow access/search by index, requires extra memory for pointers.

**3. Stacks:**
*   **Description:** LIFO (Last-In, First-Out) data structure. Think of a stack of plates.
*   **ADT Operations:** `push`, `pop`, `peek`, `isEmpty`.
*   **Implementations:**
    *   Using Python List: `append()` for push, `pop()` for pop. Very efficient.
    *   Using Linked List: Insert/delete at the head.
*   **Complexity (using List or Linked List):** All core operations (push, pop, peek, isEmpty) are O(1).
*   **Use Cases:** Function call stack, undo mechanisms, parsing expressions, backtracking algorithms.

**4. Queues:**
*   **Description:** FIFO (First-In, First-Out) data structure. Think of a waiting line.
*   **ADT Operations:** `enqueue`, `dequeue`, `peek`, `isEmpty`.
*   **Implementations:**
    *   Using Python List: `append()` for enqueue, `pop(0)` for dequeue. *Inefficient dequeue (O(n)) due to shifting.*
    *   Using `collections.deque`: Optimized double-ended queue. `append()` for enqueue, `popleft()` for dequeue. *Recommended.* O(1) for both.
    *   Using Linked List: Enqueue at tail, dequeue at head. O(1) if tail pointer maintained.
*   **Complexity (using `deque` or Linked List):** All core operations (enqueue, dequeue, peek, isEmpty) are O(1).
*   **Use Cases:** Task scheduling, print queues, breadth-first search (graph traversal), handling requests.

## Non-Linear Data Structures

Data elements are not arranged sequentially; relationships can be hierarchical or network-like.

**1. Trees:**
*   **Description:** Hierarchical structure consisting of nodes connected by edges. Has a root node, parent-child relationships, and leaf nodes (nodes with no children).
*   **Binary Tree:** A tree where each node has at most two children (left child, right child).
*   **Binary Search Tree (BST):** A binary tree with a specific ordering property: for any given node, all values in its left subtree are less than the node's value, and all values in its right subtree are greater than the node's value.
*   **Implementation (Python - requires custom classes):**
    ```python
    class TreeNode:
        def __init__(self, key):
            self.key = key
            self.left = None
            self.right = None
    # Methods for insert, search, delete, traversal (inorder, preorder, postorder)
    ```
*   **Complexity (BST - Average Case, Balanced Tree):**
    *   Search: O(log n)
    *   Insert: O(log n)
    *   Delete: O(log n)
*   **Complexity (BST - Worst Case, Unbalanced Tree - like a linked list):**
    *   Search, Insert, Delete: O(n)
*   **Pros (BST):** Efficient search, insertion, deletion (on average), keeps elements sorted.
*   **Cons (BST):** Performance degrades to O(n) if the tree becomes unbalanced. Self-balancing BSTs (like AVL trees, Red-Black trees) guarantee O(log n) but are more complex to implement.
*   **Use Cases:** Implementing dynamic sets, symbol tables, searching, sorting (Tree Sort).

**2. Hash Tables (Python Dictionaries):**
*   **Description:** Data structure that maps keys to values using a hash function. The hash function computes an index (or "bucket") in an underlying array where the value associated with the key should be stored.
*   **Hash Function:** Takes a key as input and returns an integer hash code.
A good hash function distributes keys uniformly across the available buckets.
*   **Collisions:** Occur when two different keys hash to the same index. Need strategies to handle collisions:
    *   *Separate Chaining:* Each bucket stores a linked list (or other structure) of key-value pairs that hash to that index.
    *   *Open Addressing:* If a bucket is full, probe for the next available slot according to a defined sequence (linear probing, quadratic probing, double hashing).
*   **Implementation (Python Dictionary):** Built-in, highly optimized hash table.
*   **Complexity (Average Case):**
    *   Insert: O(1)
    *   Delete: O(1)
    *   Search (by key): O(1)
*   **Complexity (Worst Case - e.g., all keys hash to same bucket):**
    *   Insert, Delete, Search: O(n)
*   **Pros:** Extremely fast average time complexity for search, insert, delete.
*   **Cons:** Unordered (historically in Python), worst-case performance can be O(n), performance depends heavily on a good hash function and load factor (how full the table is).
*   **Use Cases:** Implementing dictionaries/maps, database indexing, caching, symbol tables.

## Searching Algorithms

Finding a specific element within a data structure.

**1. Linear Search:**
*   **Description:** Sequentially checks each element in a list until the target element is found or the end of the list is reached.
*   **Data Structure:** Works on any sequence (sorted or unsorted lists/arrays).
*   **Algorithm:** Iterate through the list, comparing each element to the target.
*   **Complexity:**
    *   Time: O(n) (worst and average case), O(1) (best case - element is first).
    *   Space: O(1).
*   **Use Case:** Simple to implement, suitable for small or unsorted lists.

**2. Binary Search:**
*   **Description:** Efficiently finds a target element in a *sorted* list/array by repeatedly dividing the search interval in half.
*   **Data Structure:** Requires a sorted array/list.
*   **Algorithm:**
    1.  Compare the target value to the middle element of the array.
    2.  If they are equal, the search is successful.
    3.  If the target is less than the middle element, continue the search in the lower half.
    4.  If the target is greater than the middle element, continue the search in the upper half.
    5.  Repeat until the element is found or the interval is empty.
*   **Complexity:**
    *   Time: O(log n) (worst and average case).
    *   Space: O(1) (iterative version), O(log n) (recursive version due to call stack).
*   **Use Case:** Very efficient for searching in large sorted arrays.

## Basic Sorting Algorithms

Arranging elements in a specific order (e.g., ascending or descending).

**1. Bubble Sort:**
*   **Description:** Repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest elements "bubble" to the end.
*   **Complexity:**
    *   Time: O(n^2) (worst and average case), O(n) (best case - already sorted, with optimization).
    *   Space: O(1).
*   **Use Case:** Simple to understand and implement, but inefficient for large lists.

**2. Selection Sort:**
*   **Description:** Repeatedly finds the minimum element from the unsorted part of the list and puts it at the beginning.
*   **Complexity:**
    *   Time: O(n^2) (all cases - worst, average, best).
    *   Space: O(1).
*   **Use Case:** Simple, performs fewer swaps than Bubble Sort, but still inefficient for large lists.

**3. Insertion Sort:**
*   **Description:** Builds the final sorted list one item at a time. Takes each element from the input and inserts it into its correct position in the already sorted part of the list.
*   **Complexity:**
    *   Time: O(n^2) (worst and average case), O(n) (best case - already sorted).
    *   Space: O(1).
*   **Use Case:** Efficient for small lists or lists that are already partially sorted. Adaptive.

More advanced sorting algorithms like Merge Sort, Quick Sort, and Heap Sort (typically O(n log n)) will be covered in later modules.

## Introduction to Recursion

Recursion is a programming technique where a function calls itself to solve a smaller instance of the same problem.

**Key Components of a Recursive Function:**
1.  **Base Case(s):** One or more simple cases that can be solved directly without further recursion. This stops the recursion.
2.  **Recursive Step:** The function calls itself with a modified input that moves closer to the base case.

**Example: Factorial**
`n! = n * (n-1) * (n-2) * ... * 1`
`0! = 1` (Base Case)
`n! = n * (n-1)!` (Recursive Step)

```python
def factorial(n):
    # Base case
    if n == 0:
        return 1
    # Recursive step
    else:
        return n * factorial(n - 1)

print(factorial(5)) # Output: 120
```

**Pros of Recursion:**
*   Can lead to elegant and intuitive solutions for problems that are naturally recursive (e.g., tree traversals, divide-and-conquer algorithms).
*   Can simplify complex logic.

**Cons of Recursion:**
*   Can be less efficient than iterative solutions due to function call overhead and stack space usage.
*   Risk of stack overflow errors if recursion is too deep (exceeds maximum recursion depth).
*   Can sometimes be harder to debug.

Many recursive solutions can be converted to iterative solutions using loops and explicit stacks.

## Conclusion & Next Steps

This module has introduced fundamental data structures (arrays/lists, linked lists, stacks, queues, trees, hash tables) and algorithms (searching, basic sorting, recursion), along with the crucial concept of algorithm analysis using Big O notation. Understanding these concepts is essential for writing efficient, scalable, and effective code.

The choice of data structure and algorithm can have a profound impact on a program's performance. As you continue your studies in computer science and cybersecurity, you will encounter these concepts repeatedly and build upon them to tackle more complex problems. Practice implementing these structures and algorithms yourself, analyze their performance, and consider their trade-offs in different scenarios.

**Potential Activities/Exercises:**
*   Implement a Stack and a Queue using Python lists. Test their LIFO and FIFO behavior.
*   Write a Python function to perform a binary search on a sorted list.
*   Implement Bubble Sort or Insertion Sort and test it on small lists.
*   Write a recursive Python function to calculate the sum of numbers from 1 to n.
*   Compare the time it takes to search for an element in a large unsorted list vs. a large sorted list (using binary search).

**Suggested Readings/Resources:**
*   "Problem Solving with Algorithms and Data Structures using Python" by Miller and Ranum.
*   "Introduction to Algorithms" by Cormen, Leiserson, Rivest, and Stein (CLRS) - (More advanced, but a classic reference).
*   Python documentation on built-in data structures.
*   Online tutorials and coding challenges focused on data structures and algorithms (e.g., GeeksforGeeks, LeetCode, HackerRank).
This is placeholder_content_for_module_3_2_CS_content.md