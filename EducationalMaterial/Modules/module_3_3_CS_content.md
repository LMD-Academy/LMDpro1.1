
# Module 3.3.CS: Operating Systems & Computer Networks Fundamentals

**Level:** 3 (Professional - Specialization)
**Major:** Computer Science / Cybersecurity (CS)

**Estimated Content Length:** 15-25 A4 Pages

**Prerequisites:** Module 3.2.CS (Data Structures & Algorithms I)

**Learning Objectives:**
*   Understand the fundamental role, components, and types of an Operating System (OS).
*   Explain core OS concepts: processes, threads, memory management (virtual memory, paging), file systems, and I/O management.
*   Understand basic principles of concurrency, synchronization, and deadlock.
*   Grasp fundamental concepts of computer networking, including network models (OSI, TCP/IP).
*   Identify key network protocols (IP, TCP, UDP, HTTP, DNS, Ethernet) and their functions.
*   Understand IP addressing (IPv4, IPv6 basics) and common network devices.
*   Recognize basic network security concepts and common threats.

---

## 1. Introduction: The Foundations of Computing Systems

Modern computing, from personal devices to global enterprises, relies on two intertwined foundational pillars: Operating Systems (OS) and Computer Networks. The Operating System acts as the intermediary between computer hardware and user applications, managing resources, providing services, and creating an environment where programs can run efficiently and securely. Computer Networks, on the other hand, enable these systems to communicate, share resources, and access information across diverse geographical locations, forming the backbone of the internet and virtually all modern information exchange.

This module provides a comprehensive introduction to the fundamental principles governing both operating systems and computer networks. Building upon your understanding of programming and data structures, we will first explore the core functions of an OS, including process and thread management, memory allocation strategies (like virtual memory and paging), file system organization, and input/output (I/O) handling. We will also touch upon the complexities of concurrency and the challenges of synchronization and deadlock. The second part of the module shifts focus to computer networks. We will dissect the layered architecture of network models like OSI and TCP/IP, understand the role of key protocols such as IP, TCP, UDP, HTTP, and DNS, and explore the basics of IP addressing. Common network devices and elementary network security concepts will also be introduced. A solid grasp of these fundamentals is essential for any computer science or cybersecurity professional, as they underpin virtually all software development, system administration, and security practices.

## Part 1: Operating Systems

An Operating System is system software that manages computer hardware and software resources and provides common services for computer programs.

### 2. Role and Functions of an Operating System

The OS serves several critical functions:

*   **Resource Management:** Manages and allocates hardware resources such as the Central Processing Unit (CPU), memory, storage devices (disks), and I/O devices among various users and applications. This ensures fair and efficient use of system resources.
*   **Process Management:** Manages the execution of application programs (processes), including their creation, deletion, scheduling (deciding which process runs when), and synchronization (coordinating processes that interact).
*   **Memory Management:** Optimizes the use of main memory (RAM). It allocates memory to processes, keeps track of which parts of memory are currently being used and by whom, deallocates memory when processes terminate, and implements techniques like virtual memory to extend available memory.
*   **File System Management:** Organizes files and directories on storage devices (hard drives, SSDs), providing a structured way to store, retrieve, and manage data. It controls access to files and ensures data integrity.
*   **I/O Device Management:** Manages communication with input/output devices like keyboards, mice, printers, displays, and network interfaces, often through device drivers.
*   **User Interface (Shell/GUI):** Provides a way for users to interact with the computer, either through a Command-Line Interface (CLI) where users type commands, or a Graphical User Interface (GUI) with windows, icons, and menus.
*   **Security and Protection:** Enforces access controls to protect system resources from unauthorized access or misuse. It also aims to protect processes from interfering with each other and ensures overall system stability.
*   **Networking:** Provides facilities and protocols for communication between computers over a network, enabling resource sharing and distributed applications.

**Types of Operating Systems:**
Operating systems can be categorized based on their capabilities and target environments:
*   **Batch OS:** Early systems that processed jobs in batches without direct user interaction.
*   **Time-Sharing/Multitasking OS:** Allows multiple users or programs to share the computer's resources seemingly simultaneously by rapidly switching the CPU between different tasks. Most modern desktop and server OSs are of this type.
*   **Real-Time OS (RTOS):** Designed for systems where the timely processing of data is critical, with strict deadlines (e.g., industrial control systems, medical monitoring equipment, automotive systems).
*   **Distributed OS:** Manages a group of independent, networked computers and makes them appear to be a single, coherent system to the user.
*   **Network OS (NOS):** Runs on a server and provides the server the capability to manage data, users, groups, security, applications, and other networking functions (e.g., older versions of Windows Server, Novell NetWare).
*   **Mobile OS:** Designed specifically for mobile devices like smartphones and tablets (e.g., Android, iOS).
*   **Embedded OS:** Designed for dedicated functions within larger mechanical or electrical systems, often with resource constraints (e.g., in smart appliances, wearables, IoT devices).

### 3. Process Management

A **process** is a program in execution. It's an active entity, representing a single instance of a running program.

*   **Process State:** As a process executes, it changes state. Common states include:
    *   *New:* The process is being created.
    *   *Ready:* The process is waiting to be assigned to a processor.
    *   *Running:* Instructions are being executed.
    *   *Waiting (Blocked):* The process is waiting for some event to occur (such as I/O completion or a signal).
    *   *Terminated:* The process has finished execution.
*   **Process Control Block (PCB) / Task Control Block:** A data structure maintained by the OS for every process. It contains crucial information about the process, such as:
    *   Process state
    *   Program counter (address of the next instruction to execute)
    *   CPU registers
    *   CPU scheduling information (priority, queue pointers)
    *   Memory-management information (base/limit registers, page tables)
    *   Accounting information (CPU time used, time limits)
    *   I/O status information (devices allocated, open files)
*   **Threads:** A thread is the basic unit of CPU utilization; it comprises a thread ID, a program counter, a register set, and a stack. A process can have multiple threads of control, allowing it to perform multiple tasks concurrently.
    *   **Benefits:** Responsiveness (an application can remain responsive while one thread is blocked), resource sharing (threads share the code, data, and resources of their process), economy (creating and switching threads is cheaper than processes), scalability (can utilize multi-core processors effectively).
    *   **Multithreading Models:**
        *   *Many-to-One:* Maps many user-level threads to one kernel thread.
        *   *One-to-One:* Maps each user thread to a kernel thread.
        *   *Many-to-Many:* Multiplexes many user-level threads to a smaller or equal number of kernel threads.
*   **CPU Scheduling:** The OS must select one of the processes in the ready queue to be executed when the CPU becomes idle.
    *   **Goals:** Maximize CPU utilization and throughput; minimize turnaround time (total time from submission to completion), waiting time (time in ready queue), and response time (time from submission to first response).
    *   **Common Scheduling Algorithms:**
        *   *First-Come, First-Served (FCFS):* Simple, non-preemptive.
        *   *Shortest-Job-First (SJF):* Optimal for minimizing average waiting time, but difficult to predict next CPU burst. Can be preemptive (Shortest-Remaining-Time-First).
        *   *Priority Scheduling:* Each process has a priority; CPU allocated to highest priority. Can lead to starvation of low-priority processes.
        *   *Round Robin (RR):* Preemptive; each process gets a small time quantum. Good for time-sharing systems.
        *   *Multilevel Queue Scheduling:* Partitions ready queue into several separate queues, each with its own scheduling algorithm.

### 4. Memory Management

The OS is responsible for efficiently managing the computer's main memory (RAM).

*   **Logical vs. Physical Address Space:**
    *   *Logical Address (Virtual Address):* Generated by the CPU; refers to a location in the process's own address space.
    *   *Physical Address:* The address seen by the memory unit; refers to an actual location in RAM.
    *   The Memory Management Unit (MMU) hardware translates logical addresses to physical addresses.
*   **Techniques:**
    *   **Contiguous Allocation:** Each process is allocated a single contiguous block of memory. Simple but suffers from external fragmentation (total memory space exists to satisfy a request, but it is not contiguous).
    *   **Paging:**
        *   Divides physical memory into fixed-sized blocks called **frames** and logical memory into blocks of the same size called **pages**.
        *   Allows a process's physical address space to be non-contiguous; pages can be loaded into any available frames.
        *   **Page Table:** Maintained by the OS for each process to store the mapping between logical page numbers and physical frame numbers.
        *   **Translation Look-aside Buffer (TLB):** A fast hardware cache for recently used page table entries to speed up address translation.
        *   Reduces external fragmentation, but can cause internal fragmentation (unused space within a frame if process size isn't a multiple of page size).
    *   **Segmentation:**
        *   Divides memory into logical units called **segments**, corresponding to parts of a program (e.g., code segment, data segment, stack segment).
        *   Each segment has a name and a length. Addresses specify both segment name and offset within the segment.
        *   Allows for sharing of segments among processes and better protection.
*   **Virtual Memory:** A technique that allows the execution of processes that are not completely loaded into main memory. Only parts of the program needed for execution are loaded.
    *   **Benefits:** Allows programs larger than physical memory, increases multiprogramming, less I/O needed to load/swap processes.
    *   **Demand Paging:** Pages are loaded into memory only when they are demanded (referenced) during program execution. Leads to page faults if a referenced page is not in memory.
    *   **Page Replacement:** If a page fault occurs and there is no free frame, the OS must choose a "victim" frame to swap out to disk to make room for the new page.
        *   *Algorithms:* FIFO (First-In, First-Out), Optimal (OPT - theoretical best), LRU (Least Recently Used), LFU (Least Frequently Used), Clock algorithm.
    *   **Thrashing:** A critical problem where a process spends more time paging (swapping pages in and out) than executing, due to having too few frames allocated to it.

### 5. File System Management

The OS provides a uniform logical view of information storage.
*   **File:** A named collection of related information that is recorded on secondary storage (e.g., disks).
*   **Attributes:** Name, identifier, type, location, size, protection (access control), creation/modification timestamps.
*   **Operations:** Create, write, read, seek (reposition file pointer), delete, truncate.
*   **Directory Structure:** Organizes files hierarchically.
    *   *Single-Level Directory:* All files in one directory. Simple but limited.
    *   *Two-Level Directory:* Each user has their own user file directory (UFD).
    *   *Tree-Structured Directory:* A hierarchical organization with a root directory and subdirectories (most common).
    *   *Acyclic-Graph Directory:* Allows directories to share subdirectories and files, enabling aliasing or linking.
*   **File System Mounting:** A file system must be mounted before it can be accessed.
*   **Allocation Methods:** Determine how disk blocks are allocated for files.
    *   *Contiguous Allocation:* Each file occupies a set of contiguous blocks on the disk. Simple, fast access, but causes external fragmentation and issues with file growth.
    *   *Linked Allocation:* Each file is a linked list of disk blocks; blocks may be scattered anywhere on the disk. Solves external fragmentation, but no random access, space needed for pointers.
    *   *Indexed Allocation:* Brings all pointers together into an index block. Supports direct access, avoids external fragmentation.
*   **Free-Space Management:** Keeping track of free disk blocks (e.g., using a bit vector, linked list, grouping, counting).

### 6. I/O Management

The OS manages communication between the CPU/memory and various I/O devices.
*   **I/O Hardware:** Includes storage devices (disks, tapes), transmission devices (network cards, modems), human-interface devices (keyboard, mouse, display).
*   **Device Drivers:** Software modules specific to each device type that provide a uniform interface for the OS kernel to interact with the device controller.
*   **Polling vs. Interrupts:**
    *   *Polling (Programmed I/O):* CPU repeatedly checks the status of an I/O device. Wasteful of CPU time.
    *   *Interrupts:* Device controller signals the CPU when an I/O operation is complete or an error occurs, allowing the CPU to perform other tasks while waiting.
*   **Direct Memory Access (DMA):** For high-speed I/O devices, DMA allows the device controller to transfer blocks of data directly to/from main memory without CPU intervention, reducing CPU overhead.

### 7. Concurrency and Synchronization

Managing multiple processes or threads executing seemingly simultaneously.
*   **Concurrency:** Multiple tasks making progress over the same period. On a single-core processor, this is achieved by interleaving execution (context switching). On multi-core processors, true parallelism is possible.
*   **Race Condition:** A situation where the outcome of an execution depends on the particular order in which multiple threads or processes access and manipulate shared data. This can lead to unpredictable and incorrect results.
*   **Critical Section Problem:** When multiple processes/threads need to access shared resources, the code segment that accesses the shared resource is called the critical section. The problem is to design a protocol that processes can use to cooperate. A solution must satisfy:
    1.  *Mutual Exclusion:* If one process is executing in its critical section, no other processes can be executing in their critical sections.
    2.  *Progress:* If no process is executing in its critical section and some processes wish to enter their critical sections, then the selection of the processes that will enter the critical section next cannot be postponed indefinitely.
    3.  *Bounded Waiting:* There must be a bound on the number of times that other processes are allowed to enter their critical sections after a process has made a request to enter its critical section and before that request is granted.
*   **Synchronization Primitives:** Tools to control access to shared resources.
    *   *Mutex Locks (Mutual Exclusion Locks):* Simplest synchronization tool. A process acquires the lock before entering a critical section and releases it upon exiting.
    *   *Semaphores:* An integer variable accessed only through two atomic (indivisible) operations: `wait()` (or `P()`) and `signal()` (or `V()`).
        *   *Counting Semaphore:* Value can range over an unrestricted domain (used to control access to a resource with multiple instances).
        *   *Binary Semaphore (Mutex):* Value can only be 0 or 1.
    *   *Monitors:* A high-level synchronization construct that provides a convenient and effective mechanism for process synchronization. Only one process may be active within the monitor at a time.
    *   *Condition Variables:* Used within monitors to allow processes to wait for specific conditions to become true.
*   **Deadlock:** A situation where two or more processes are blocked indefinitely, each waiting for a resource held by another waiting process, forming a circular wait.
    *   **Necessary Conditions for Deadlock:**
        1.  *Mutual Exclusion:* At least one resource must be held in a non-sharable mode.
        2.  *Hold and Wait:* A process holding at least one resource is waiting to acquire additional resources held by other processes.
        3.  *No Preemption:* Resources cannot be preempted; they can only be released voluntarily by the process holding them.
        4.  *Circular Wait:* There exists a set {P0, P1, ..., Pn} of waiting processes such that P0 is waiting for a resource held by P1, P1 is waiting for a resource held by P2, ..., Pn-1 is waiting for Pn, and Pn is waiting for a resource held by P0.
    *   **Methods for Handling Deadlocks:**
        *   *Deadlock Prevention:* Ensure that at least one of the necessary conditions cannot hold.
        *   *Deadlock Avoidance:* OS makes decisions dynamically to ensure the system never enters an unsafe state (e.g., Banker's algorithm). Requires prior information about resource needs.
        *   *Deadlock Detection and Recovery:* Allow the system to enter a deadlock state, detect it, and then recover (e.g., by terminating processes or preempting resources).
        *   *Ignoring the Problem:* Pretend that deadlocks never occur (used by many OSs if deadlocks are rare).

## Part 2: Computer Networks

Computer networks enable communication and resource sharing between computing devices.

### 8. Introduction to Networking

*   **Definition:** A computer network is a collection of interconnected autonomous computing devices that can exchange data and share resources.
*   **Key Goals:**
    *   *Resource Sharing:* Sharing hardware (printers, scanners), software (applications, databases), and data.
    *   *Information Sharing & Communication:* Email, instant messaging, video conferencing, file transfer.
    *   *Distributed Processing:* Distributing computation tasks across multiple computers.
*   **Network Classifications by Scale:**
    *   **LAN (Local Area Network):** Covers a small geographical area (e.g., a single building, office, home). Typically high speed.
    *   **MAN (Metropolitan Area Network):** Spans a city or a large campus.
    *   **WAN (Wide Area Network):** Covers a large geographical area (e.g., a country, continent, or the entire globe). The Internet is the largest WAN.
*   **Network Topologies:** The physical or logical arrangement of nodes and connections in a network.
    *   *Bus:* All devices share a single communication line.
    *   *Star:* All devices connect to a central hub or switch. Most common LAN topology.
    *   *Ring:* Devices are connected in a circular fashion.
    *   *Mesh:* Devices are interconnected with many redundant interconnections (full or partial).
    *   *Tree (Hierarchical):* A hybrid topology combining star and bus characteristics.
*   **The Internet:** A global system of interconnected computer networks that use the Internet Protocol suite (TCP/IP) to link devices worldwide.

### 9. Network Models: OSI and TCP/IP

Layered models provide a standardized framework for understanding and designing complex network communication systems by breaking them down into manageable, independent layers.

*   **OSI Model (Open Systems Interconnection Model):** A 7-layer conceptual model developed by the International Organization for Standardization (ISO).
    1.  **Physical Layer (Layer 1):** Transmits raw bits over a communication channel. Deals with physical media (cables, fiber optics, radio waves), signaling, voltage levels, data rates.
    2.  **Data Link Layer (Layer 2):** Provides reliable transmission of data **frames** between two directly connected nodes (point-to-point). Handles error detection and correction (e.g., checksums), flow control, and media access control (MAC addresses). Examples: Ethernet, Wi-Fi, PPP.
    3.  **Network Layer (Layer 3):** Responsible for logical addressing (IP addresses) and routing of **packets** from source to destination across multiple networks (internetworking). Examples: IP, ICMP, RIP, OSPF.
    4.  **Transport Layer (Layer 4):** Provides end-to-end communication services for applications. Ensures reliable (TCP) or unreliable (UDP) data delivery between processes running on different hosts. Uses port numbers to identify applications.
    5.  **Session Layer (Layer 5):** Manages, establishes, and terminates sessions (connections) between applications. Handles dialogue control and synchronization.
    6.  **Presentation Layer (Layer 6):** Responsible for data formatting, translation, encryption/decryption, and compression to ensure data is presented in a usable format for the application layer.
    7.  **Application Layer (Layer 7):** Provides services directly to user applications and network applications. Examples: HTTP (web), FTP (file transfer), SMTP (email), DNS (domain name resolution), Telnet.
*   **TCP/IP Model (Internet Protocol Suite):** A 4-layer (or sometimes described as 5-layer) model that is the practical foundation of the Internet.
    1.  **Link Layer (or Network Interface / Network Access Layer):** Combines OSI Physical and Data Link layers. (e.g., Ethernet, Wi-Fi drivers)
    2.  **Internet Layer (or Network Layer):** Corresponds to OSI Network Layer. Responsible for addressing, packaging, and routing functions. (e.g., IP, ICMP, ARP)
    3.  **Transport Layer:** Corresponds to OSI Transport Layer. Provides end-to-end communication. (e.g., TCP, UDP)
    4.  **Application Layer:** Combines OSI Session, Presentation, and Application layers. Provides protocols for specific applications. (e.g., HTTP, SMTP, FTP, DNS)
*   **Encapsulation:** As data passes down the layers from an application, each layer adds its own header (and sometimes a trailer) information containing control data relevant to that layer. This process is called encapsulation. The reverse process, decapsulation, occurs at the receiving end.

### 10. Key Network Protocols

Protocols are sets of rules and conventions that govern communication between network devices.
*   **IP (Internet Protocol):** Network layer (OSI Layer 3). Provides connectionless, unreliable ("best-effort") delivery of packets (datagrams). Responsible for logical addressing (IP addresses) and routing packets across networks.
*   **TCP (Transmission Control Protocol):** Transport layer (OSI Layer 4). Provides reliable, connection-oriented, ordered byte-stream delivery.
    *   Establishes a connection using a three-way handshake.
    *   Uses sequence numbers to ensure ordered delivery and detect missing segments.
    *   Uses acknowledgments (ACKs) to confirm receipt of data.
    *   Implements flow control (to prevent overwhelming the receiver) and congestion control (to manage network traffic).
*   **UDP (User Datagram Protocol):** Transport layer (OSI Layer 4). Provides connectionless, unreliable datagram delivery. It offers minimal overhead and is faster than TCP. Suitable for applications where speed is critical and some data loss is acceptable, or where reliability is handled by the application layer (e.g., DNS, DHCP, VoIP, online gaming, streaming media).
*   **HTTP (Hypertext Transfer Protocol):** Application layer (OSI Layer 7). The foundation of data communication for the World Wide Web. Used for fetching resources such as HTML documents, images, etc. HTTPS is the secure version using SSL/TLS encryption.
*   **DNS (Domain Name System):** Application layer (OSI Layer 7). Translates human-readable domain names (e.g., `www.google.com`) into numerical IP addresses that computers use to identify each other on the network.
*   **Ethernet (IEEE 802.3):** The dominant Data Link layer (OSI Layer 2) technology for LANs. Defines wiring standards, signaling, frame formats, and Media Access Control (MAC) addressing.
*   **Wi-Fi (IEEE 802.11 standards):** A set of standards for implementing wireless local area networks (WLANs). Operates at the Data Link and Physical layers.

### 11. IP Addressing and Network Devices

*   **IP Address:** A unique numerical label assigned to each device (host or network interface) connected to a computer network that uses the Internet Protocol for communication.
    *   **IPv4:** 32-bit addresses, typically written in dotted-decimal notation (e.g., `192.168.1.100`). The address space is nearly exhausted.
    *   **IPv6:** 128-bit addresses, written in hexadecimal notation (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`). Provides a vastly larger address space.
    *   **Subnetting:** Dividing a larger IP network into smaller subnetworks (subnets) to improve organization, security, and routing efficiency. A subnet mask is used to identify the network portion and host portion of an IP address.
    *   **NAT (Network Address Translation):** Allows multiple devices on a private network (using private IP addresses, e.g., `192.168.x.x`) to share a single public IP address when accessing the Internet. Common in home and small office routers.
*   **Network Devices:**
    *   **Hub:** Physical layer (Layer 1) device that simply repeats signals received on one port to all other connected ports. Creates a single collision domain (obsolete for most modern networks due to inefficiency).
    *   **Switch (Layer 2 Switch):** Data Link layer (Layer 2) device that intelligently forwards data frames based on MAC addresses. Learns which devices are connected to which port, reducing collisions and improving performance by creating separate collision domains per port.
    *   **Router:** Network layer (Layer 3) device that forwards packets between different logical networks (IP subnets) based on IP addresses. Uses routing tables to determine the best path for packets.
    *   **Firewall:** Network security device (hardware or software) that monitors and controls incoming and outgoing network traffic based on predetermined security rules. Can operate at various layers (packet filtering, stateful inspection, application layer gateways).
    *   **Modem (Modulator-Demodulator):** Connects a local network (e.g., home LAN) to an Internet Service Provider (ISP) over different physical media (e.g., cable modem, DSL modem, fiber optic modem).
    *   **Wireless Access Point (WAP or AP):** Allows wireless devices (using Wi-Fi) to connect to a wired network. Often integrated into home routers.

### 12. Basic Network Security Concepts

Protecting network infrastructure and data from unauthorized access, misuse, or disruption.
*   **Firewalls:** Act as barriers between trusted internal networks and untrusted external networks (like the Internet), filtering traffic based on rules.
*   **VPN (Virtual Private Network):** Creates a secure, encrypted connection (tunnel) over a public network, allowing remote users or sites to securely access private network resources.
*   **Encryption:** Transforming data into an unreadable format (ciphertext) to protect its confidentiality during transmission or storage. (Symmetric and Asymmetric encryption techniques).
*   **Authentication:** Verifying the identity of users, devices, or services attempting to access network resources (e.g., passwords, multi-factor authentication, digital certificates).
*   **Authorization (Access Control):** Granting or denying access to specific network resources or services based on the authenticated identity and predefined policies (e.g., Access Control Lists - ACLs).
*   **Intrusion Detection Systems (IDS):** Monitor network or system activities for malicious activities or policy violations and generate alerts.
*   **Intrusion Prevention Systems (IPS):** An extension of IDS that can also take action to block or prevent detected malicious activity.
*   **Common Network Threats:** Malware (viruses, worms, ransomware, spyware), Denial-of-Service (DoS) and Distributed Denial-of-Service (DDoS) attacks, phishing, Man-in-the-Middle (MitM) attacks, unauthorized access, data breaches.

## 13. Conclusion & Next Steps

This module has introduced the essential concepts of operating systems and computer networks. You've explored how an OS manages hardware and software resources, focusing on processes, memory, files, and I/O. You've also gained an understanding of fundamental networking principles, including layered models, key protocols, IP addressing, and basic security.

These two domains are deeply interconnected and form the bedrock upon which most modern computing applications and services are built. A strong understanding of OS and networking fundamentals is critical for software development, system administration, cybersecurity, and many other areas of computer science. Further studies will delve deeper into advanced OS topics (like distributed OS, real-time systems, virtual machines) and advanced networking (like network design, routing protocols, quality of service, advanced security). Developing practical skills through hands-on labs and projects is crucial for reinforcing these concepts.

**Potential Activities/Exercises:**
*   Research the process scheduling algorithm used by your computer's OS.
*   Explain the difference between paging and segmentation in memory management.
*   Trace the path of an HTTP request from your browser to a web server, identifying key protocols at each layer of the TCP/IP model.
*   Configure basic firewall rules on your personal computer.
*   Compare the features and typical use cases of TCP vs. UDP.
*   Use network utility commands (like `ping`, `tracert`/`traceroute`, `ipconfig`/`ifconfig`, `netstat`) to explore your local network and internet connectivity.

**Suggested Readings/Resources:**
*   "Operating System Concepts" by Silberschatz, Galvin, and Gagne.
*   "Modern Operating Systems" by Andrew S. Tanenbaum and Herbert Bos.
*   "Computer Networking: A Top-Down Approach" by Kurose and Ross.
*   "TCP/IP Illustrated, Vol. 1: The Protocols" by W. Richard Stevens (a classic, more advanced).
*   Online courses on operating systems and computer networking (e.g., from Coursera, edX, Udacity, Cybrary, MIT OpenCourseWare).
