
# Quiz: Module 2 - Designing Agentic Architectures

**Instructions:** Answer the following questions to test your understanding of designing agentic system architectures.

---

1.  **Multiple Choice:** Which component in an agentic system is primarily responsible for providing a standardized interface for the LLM to invoke various capabilities like web browsing or file system operations?
    a) User Interface Layer
    b) Core Agent Loop
    c) Tool Abstraction Layer
    d) State Management Module

2.  **Short Answer:** Briefly describe one key difference between a single-agent architecture and a multi-agent system (MAS). When might an MAS be preferred?

3.  **True/False:** Event-driven agents primarily operate by formulating a plan to achieve a static, predefined user goal and then terminating upon completion.
    a) True
    b) False

4.  **Fill in the Blank:** Frameworks like ______ provide pre-built components and abstractions that significantly accelerate the development of agentic systems by handling aspects like LLM integration, prompt management, and tool use.

5.  **Short Answer:** Why is robust error handling and recovery a critical architectural consideration for autonomous agents?

---
**Answer Key (Illustrative):**
1.  c
2.  A single-agent architecture uses one central agent for all tasks, while an MAS distributes tasks among specialized agents. MAS might be preferred for highly complex problems requiring diverse expertise or significant parallel processing.
3.  b (False. Event-driven agents typically react to triggers or events in their environment, often operating continuously, while goal-driven agents focus on achieving a specific objective.)
4.  LangChain / LlamaIndex / AutoGen (any one is acceptable)
5.  Robust error handling is critical because agents operate in dynamic environments where tools can fail, APIs can change, or unexpected states can occur. Without it, the agent can easily get stuck or produce incorrect results, making it unreliable.
