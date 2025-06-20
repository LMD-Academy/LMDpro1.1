
# Quiz: Module 4 - Planning and Reasoning

**Instructions:** Answer the following questions to test your understanding of agent planning and reasoning.

---

1.  **Multiple Choice:** "Task decomposition" in agent planning primarily involves:
    a) Selecting the most powerful LLM for the task.
    b) Breaking down a high-level complex objective into smaller, manageable, executable steps.
    c) Perceiving the environment through multiple sensory modalities.
    d) Storing all intermediate results in long-term memory.

2.  **Short Answer:** Briefly explain the core idea behind Chain of Thought (CoT) prompting for LLMs in the context of agent planning.

3.  **True/False:** The ReAct (Reason+Act) framework requires an agent to generate a complete, detailed plan upfront before taking any actions in the environment.
    a) True
    b) False

4.  **Matching:** Match the planning strategy with its primary characteristic.
    *   Strategies: 1) Chain of Thought (CoT), 2) Tree of Thoughts (ToT), 3. ReAct
    *   Characteristics:
        *   A) Tightly interleaves reasoning steps with action execution and observation.
        *   B) Explores multiple reasoning paths or alternative plan steps concurrently.
        *   C) Encourages the LLM to explicitly articulate its reasoning process step-by-step.

5.  **Short Answer:** Why is the ability for an agent to perform self-correction and plan refinement important for robust autonomy?

---
**Answer Key (Illustrative):**
1.  b
2.  CoT prompting encourages the LLM to explicitly generate intermediate reasoning steps that lead to the final plan or decision, rather than just outputting the result directly. This often improves the quality and logical coherence of complex plans.
3.  b (False. ReAct operates in a more dynamic loop, deciding on the next action based on the current observation and reasoning, then acting, and then observing the outcome to inform the next reasoning step.)
4.  1-C, 2-B, 3-A
5.  Self-correction and plan refinement are important because initial plans may be flawed, environments can change unexpectedly, or actions may not have the intended outcomes. This allows the agent to adapt to new information, recover from errors, and find more effective paths to its goal.
