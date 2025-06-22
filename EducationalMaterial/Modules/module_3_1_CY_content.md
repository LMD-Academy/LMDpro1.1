
# Module 3.1.CY: Introduction to Cybersecurity & Threats

**Level:** 3 (Professional - Specialization)
**Major:** Cybersecurity (CY)

**Estimated Content Length:** 15-25 A4 Pages

**Prerequisites:** Module 1.5 (Technology & Data Literacy Basics)

**Learning Objectives:**
*   Understand the CIA Triad as the foundation of information security.
*   Identify and categorize common cyber threats (malware, phishing, DDoS, APTs).
*   Recognize different types of threat actors and their motivations.
*   Grasp the fundamentals of vulnerability management.
*   Understand basic risk management concepts (identify, analyze, evaluate, treat).
*   Explore foundational security controls to mitigate common threats.

---

## 1. Introduction: Understanding the Digital Threat Landscape

In our hyper-connected world, cybersecurity is no longer a niche IT concern but a fundamental aspect of business operations, national security, and personal safety. Cybersecurity is the practice of protecting systems, networks, and programs from digital attacks. These attacks are usually aimed at accessing, changing, or destroying sensitive information; extorting money from users; or interrupting normal business processes. A successful cybersecurity approach has multiple layers of protection spread across computers, networks, programs, or data that one intends to keep safe.

This module, the first in the Cybersecurity specialization, establishes the foundational knowledge required to understand and navigate the digital threat landscape. We will begin by exploring the core principles of information security, known as the **CIA Triad (Confidentiality, Integrity, and Availability)**. We will then conduct a comprehensive survey of common cyber threats, from various forms of **malware** (viruses, ransomware, spyware) and **social engineering** (phishing) to large-scale attacks like **Distributed Denial-of-Service (DDoS)** and sophisticated, persistent campaigns by **Advanced Persistent Threats (APTs)**. You will learn to identify different **threat actors**, from individual hacktivists to organized cybercrime groups and nation-states, and understand their motivations. The module will also introduce the critical processes of **vulnerability management**—identifying and mitigating weaknesses in systems—and **risk management**, providing a framework for assessing and treating security risks in a business context. Finally, we will cover an overview of foundational security controls that serve as the building blocks for a robust defense strategy. Mastering these concepts is the essential first step for any professional seeking a career in the dynamic and critical field of cybersecurity.

## 2. The CIA Triad: Core Principles of Information Security

The CIA Triad is a widely adopted model that forms the foundation of information security for organizations. It is comprised of three core principles:

1.  **Confidentiality:**
    *   **Principle:** Ensuring that sensitive information is not disclosed to unauthorized individuals, entities, or processes. It's about preventing unauthorized access to data and maintaining privacy.
    *   **Analogy:** A sealed letter. Only the intended recipient should be able to read its contents.
    *   **Mechanisms to Ensure Confidentiality:**
        *   **Encryption:** Converting data into a coded format that can only be read with a key.
        *   **Access Controls:** Restricting access to information based on user identity and need-to-know (e.g., passwords, permissions, biometrics).
        *   **Data Classification:** Categorizing data based on its sensitivity to determine appropriate protection levels.
    *   **Breach Example:** A data breach where customer credit card numbers are stolen.

2.  **Integrity:**
    *   **Principle:** Maintaining the consistency, accuracy, and trustworthiness of data over its entire lifecycle. It ensures that data cannot be modified in an unauthorized or undetected manner.
    *   **Analogy:** A legal contract. Any unauthorized change to the terms would invalidate it.
    *   **Mechanisms to Ensure Integrity:**
        *   **Hashing:** Using cryptographic hash functions (e.g., SHA-256) to create a unique digital fingerprint of data. Any change to the data will result in a different hash, making tampering detectable.
        *   **Digital Signatures:** Provides integrity, authentication, and non-repudiation.
        *   **Access Controls and Permissions:** Limiting who can modify data.
        *   **Version Control Systems:** Tracking changes to files or code.
    *   **Breach Example:** An attacker altering financial records or changing the dosage information in a pharmaceutical database.

3.  **Availability:**
    *   **Principle:** Ensuring that systems, applications, and data are accessible and usable by authorized users when they are needed.
    *   **Analogy:** A bank's ATM. It must be operational for customers to withdraw cash.
    *   **Mechanisms to Ensure Availability:**
        *   **Redundancy:** Having backup systems (e.g., redundant servers, network links, power supplies).
        *   **Disaster Recovery (DR) and Business Continuity Planning (BCP):** Plans to restore operations after a disruption.
        *   **Denial-of-Service (DoS) Protection:** Defenses against attacks designed to overwhelm and disable systems.
        *   **Regular Maintenance and Upgrades:** Keeping systems patched and healthy.
    *   **Breach Example:** A ransomware attack that encrypts a hospital's patient records, making them inaccessible, or a DDoS attack that takes a company's website offline.

The CIA Triad represents a constant balancing act. For example, overly strict confidentiality controls might negatively impact availability. A robust security strategy addresses all three principles to provide comprehensive protection.

## 3. Common Cyber Threats

A cyber threat is any malicious act that seeks to damage data, steal data, or disrupt digital life in general.

*   **Malware (Malicious Software):** A broad category of software designed to cause harm.
    *   *Virus:* Attaches itself to legitimate programs and spreads when the program is executed.
    *   *Worm:* A standalone program that replicates itself to spread to other computers, often exploiting network vulnerabilities.
    *   *Trojan Horse:* Disguises itself as legitimate software to trick users into installing it, then carries out a malicious function.
    *   *Ransomware:* Encrypts a victim's files and demands a ransom payment for the decryption key.
    *   *Spyware:* Covertly gathers information about a person or organization and sends it to another entity.
    *   *Adware:* Displays unwanted advertisements.
    *   *Botnet:* A network of compromised computers (bots or zombies) controlled by an attacker to launch large-scale attacks like DDoS or spam campaigns.
*   **Phishing:**
    *   A type of social engineering where attackers send fraudulent communications (usually emails) that appear to come from a reputable source. The goal is to trick victims into revealing sensitive information (like credentials or credit card numbers) or to deploy malware.
    *   *Spear Phishing:* A highly targeted phishing attack aimed at a specific individual or organization.
    *   *Whaling:* Spear phishing aimed at senior executives.
*   **Man-in-the-Middle (MitM) Attack:**
    *   An attacker secretly intercepts and relays communications between two parties who believe they are directly communicating with each other. The attacker can eavesdrop on or alter the communication. Often occurs on unsecured Wi-Fi networks.
*   **Denial-of-Service (DoS) / Distributed Denial-of-Service (DDoS) Attack:**
    *   An attack designed to shut down a machine or network, making it inaccessible to its intended users.
    *   *DoS:* An attack from a single source.
    *   *DDoS:* An attack from multiple compromised computer systems (a botnet), overwhelming the target with traffic.
*   **SQL Injection (SQLi):**
    *   A web security vulnerability that allows an attacker to interfere with the queries that an application makes to its database. It can be used to view, modify, or delete data.
*   **Cross-Site Scripting (XSS):**
    *   A vulnerability in web applications that allows attackers to inject malicious scripts into content from otherwise trusted websites. These scripts then execute in the victim's browser and can be used to steal session cookies, hijack user sessions, or deface websites.
*   **Zero-Day Exploit:**
    *   An attack that exploits a previously unknown software vulnerability before the software vendor is aware of it or has released a patch.
*   **Advanced Persistent Threat (APT):**
    *   A prolonged and targeted cyberattack in which an intruder gains unauthorized access to a network and remains undetected for an extended period. The goal is typically data theft or espionage rather than immediate disruption. Often associated with well-funded, nation-state actors.

## 4. Threat Actors and Motivations

A threat actor (or malicious actor) is a person or entity responsible for an event or incident that impacts the safety or security of another entity.
*   **Cybercriminals:** Motivated by financial gain. Engage in activities like phishing, ransomware, credit card fraud, and data theft for sale on the dark web.
*   **Nation-State Actors:** Sponsored by governments to conduct espionage, sabotage, or information warfare against other nations or strategic corporations. Highly sophisticated, well-resourced, and persistent (often behind APTs).
*   **Hacktivists:** Motivated by a political or social cause. Use cyberattacks (like DDoS or website defacement) to promote their agenda or protest.
*   **Insider Threats:** Current or former employees, contractors, or partners who have authorized access to a network and misuse it, either intentionally (malicious insider) or unintentionally (negligent insider). A significant and challenging threat.
*   **Script Kiddies:** Less-skilled individuals who use pre-existing tools and scripts developed by others to launch attacks. Often motivated by curiosity, thrill, or a desire for recognition.
*   **Cyber Terrorists:** Motivated by ideology to cause fear, disruption, or physical harm through cyberattacks against critical infrastructure.

## 5. Vulnerability Management

A vulnerability is a weakness or flaw in a system, process, or control that can be exploited by a threat actor. Vulnerability management is the cyclical practice of identifying, classifying, prioritizing, remediating, and mitigating software vulnerabilities.

**The Vulnerability Management Lifecycle:**
1.  **Discover:** Continuously scan the environment (networks, servers, applications) to create an inventory of all assets and identify vulnerabilities on them.
2.  **Prioritize (Triage):** Assess and prioritize vulnerabilities based on risk. Not all vulnerabilities can be fixed immediately. Prioritization considers:
    *   *Severity:* How serious is the vulnerability? (e.g., Common Vulnerability Scoring System - CVSS score).
    *   *Threat Intelligence:* Is this vulnerability being actively exploited in the wild?
    *   *Asset Criticality:* How important is the affected system to the business?
3.  **Remediate:** Fix the vulnerability, typically by applying a vendor-supplied patch, changing configurations, or implementing a workaround.
4.  **Verify:** Scan the system again to confirm that the vulnerability has been successfully remediated.
5.  **Report:** Generate reports on vulnerability status, remediation progress, and overall risk posture for management and technical teams.

## 6. Risk Management Fundamentals

Risk management is the process of identifying, assessing, and controlling threats to an organization's capital and earnings. In cybersecurity, it provides a framework for making decisions about how to allocate security resources.

*   **Risk = Threat x Vulnerability x Impact** (A common conceptual formula)
*   **The Risk Management Process:**
    1.  **Risk Identification:** What could go wrong? Identifying potential security risks to assets.
    2.  **Risk Analysis/Assessment:**
        *   *Qualitative Analysis:* Assessing the likelihood (probability) and impact (consequence) of a risk, often using a high/medium/low scale to plot on a risk matrix.
        *   *Quantitative Analysis:* Assigning monetary values to risks and impacts (e.g., Single Loss Expectancy - SLE, Annualized Rate of Occurrence - ARO, Annualized Loss Expectancy - ALE). More complex and data-intensive.
    3.  **Risk Evaluation:** Comparing the level of risk against pre-established risk tolerance criteria to determine significance.
    4.  **Risk Treatment (Response):** Deciding how to handle the risk.
        *   *Mitigate (Reduce):* Implement security controls to reduce the likelihood or impact.
        *   *Transfer (Share):* Shift the risk to a third party (e.g., buying cybersecurity insurance).
        *   *Avoid:* Eliminate the activity that gives rise to the risk.
        *   *Accept:* Knowingly and objectively accept the risk, typically when it's within the organization's risk appetite or the cost of mitigation is too high.
    5.  **Risk Monitoring:** Continuously monitoring risks and the effectiveness of controls.

## 7. Foundational Security Controls

Security controls are the safeguards or countermeasures used to avoid, detect, counteract, or minimize security risks. They are often categorized based on their function. The CIS Controls (Center for Internet Security) provide a prioritized set of actions.

**Foundational Categories of Controls:**
*   **Preventive Controls:** Aim to prevent security incidents from happening in the first place.
    *   *Examples:* Firewalls, access control lists, strong passwords, security awareness training, data encryption, physical security.
*   **Detective Controls:** Aim to detect security incidents that have occurred or are in progress.
    *   *Examples:* Intrusion Detection Systems (IDS), security information and event management (SIEM) systems, log monitoring, security audits, antivirus scans.
*   **Corrective Controls:** Aim to limit the extent of any damage and correct the problem after a security incident has been detected.
    *   *Examples:* Incident response procedures, backup and recovery systems, patch management.

A defense-in-depth strategy involves implementing multiple layers of controls (preventive, detective, and corrective) across people, processes, and technology.

## 8. Conclusion

This module has laid the groundwork for your specialization in cybersecurity. You've learned the fundamental CIA Triad, identified major cyber threats and actors, and understood the critical processes of vulnerability and risk management. With this foundational knowledge, you are prepared to delve deeper into the specific technologies and strategies used to defend modern digital environments in the upcoming modules on network security and cryptography.
