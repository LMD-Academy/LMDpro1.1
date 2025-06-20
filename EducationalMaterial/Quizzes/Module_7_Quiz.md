
# Quiz: Module 7 - Building and Evaluating Agentic Systems

**Instructions:** Answer the following questions to test your understanding of building and evaluating autonomous agentic systems.

---

1.  **Multiple Choice:** Frameworks like LangChain are primarily beneficial for agent development because they:
    a) Provide pre-trained LLMs that require no further prompting.
    b) Offer pre-built components and abstractions for core agent functionalities like LLM integration, tool use, and memory management.
    c) Guarantee that any agent built with them will be 100% accurate and safe.
    d) Eliminate the need for Python programming.

2.  **Short Answer:** When evaluating an autonomous agent's performance, what is the difference between "task completion rate" and "efficiency"?

3.  **True/False:** Logging detailed interaction traces (observations, thoughts, actions) of an agent is crucial for debugging and understanding its decision-making process.
    a) True
    b) False

4.  **Fill in the Blank:** Establishing clear ______ metrics is essential before evaluating an agent, to define what success looks like for a given task or set of tasks.

5.  **Short Answer:** Beyond functional correctness, list two important aspects to consider when evaluating the overall quality or usability of an autonomous agent.

---
**Answer Key (Illustrative):**
1.  b
2.  **Task completion rate** measures whether the agent successfully achieved its assigned goal (binary success/failure or percentage of sub-goals met). **Efficiency** measures the resources (e.g., time taken, LLM calls made, computational cost) used by the agent to complete the task. An agent can complete a task but be very inefficient.
3.  a
4.  success / performance / evaluation
5.  Any two of: Robustness/Error Handling (how well it handles unexpected situations), Safety (does it avoid harmful actions), Cost-effectiveness (LLM usage, API calls), User Experience (if interactive), Adaptability, Ethical considerations.
