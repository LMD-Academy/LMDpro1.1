
# Quiz: Module 6 - Memory and Learning

**Instructions:** Answer the following questions to test your understanding of memory and learning in autonomous agents.

---

1.  **Multiple Choice:** Which type of memory in an autonomous agent is primarily responsible for holding information immediately relevant to the current task and managing LLM context windows?
    a) Long-Term Memory (LTM)
    b) Episodic Memory
    c) Short-Term / Working Memory
    d) Semantic Memory

2.  **Short Answer:** Explain how Vector Databases and Retrieval Augmented Generation (RAG) are commonly used to implement and leverage Long-Term Memory for an agent.

3.  **True/False:** "Skill acquisition" in autonomous agents refers only to the initial set of tools programmed by the developer and does not involve learning or refinement through experience.
    a) True
    b) False

4.  **Fill in the Blank:** Agent ______ mechanisms allow an agent to modify its stored skills or strategies based on the outcomes of its actions and feedback, leading to improved performance over time.

5.  **Short Answer:** Why is managing the LLM's context window an important function of an agent's short-term memory system?

---
**Answer Key (Illustrative):**
1.  c
2.  Vector Databases store information (e.g., text chunks from past experiences or documents) as numerical vector embeddings. RAG uses these by first retrieving relevant information from the vector database based on semantic similarity to a current query/task, and then adding this retrieved context to the LLM's prompt to generate more informed responses or plans.
3.  b (False. Skill acquisition can also involve the agent learning new procedures or refining existing ones based on experience and feedback, often stored in LTM.)
4.  Self-Improvement / Refinement
5.  LLMs have a finite context window. Effective management by short-term memory ensures that the most relevant recent history and task information are available to the LLM for coherent reasoning and planning, without exceeding the window's limits, potentially by summarizing older information.
