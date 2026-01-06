import { link } from "fs";

export const recentProjects = [
  {
    title: "BOOP: A tool for writing correct-by-construction programs",
    description: "Your code can work, but what does it mean for your code to be correct? I explore this question in a pedagogical context in my research with Prof. Aalok Thakkar. Conventional CS education relies on student-authored programs as proxy for their computational thinking. We attempt to strip these proxies, providing learners with a better way of constructing their programs, prioritising correctness and mathematical reasoning.",
    links: [{ url: "https://vaanigo.github.io/vaani-goenka/research", title: "Read More" }]
  },
  {
    title: "Mailroom Automation System & Inventory Auomation System",
    description: "As Deputy Minister of the Ministry of Technology of my college, I lead 2 digitisation projects that are now in use by 5000+ people: the Mailroom and the Sports Inventory.",
    links: [
      { url: "https://vaanigo.github.io/vaani-goenka/projects/#Mailroom", title: "Read More" }]
  }
];

export const previousProjects = [
  {
    title: "Invariant Synthesis Project",
    description: "Generating invariants for a given loop and set of pre and post conditions on the function is a challenging problem. I approached it using SAT-solving with creative heuristics and inductive encodings. I also made a nontermination checker, used Gröbner bases to bound the degree of invariants, and explored the maxplus hulls method.",
    links: [
      { url: "https://github.com/vaaniGO/SLAps/tree/main/course%20project", title: "GitHub Repository" }
    ]
  },
  {
    title: "Algorithms from Symbolic Logic and Applications",
    description: "Since the course did not emphasise coding and implementation, I decided to independently implement some algorithms (DPLL, forward chaining, EUF Theorem checker) and reason about their complexities. In the future, I plan to explore Data Structures like BDDs to go deeper into this.",
    links: [
      { url: "https://github.com/vaaniGO/SLAps", title: "SLAps" }
    ]
  },
  {
    title: "End to End Encryption",
    description: "I explored SoTA E2EE encryption schemes and created a presentation as part of the Cryptography-1 course (Monsoon 2025). I have focused on the double ratchet system and also explored the PSI problem. The motive: Server cannot decrypt. Suppose Alice and Bob wish to exchange multiple messages over a server. Traditionally, server would decrypt and then re-encrypt and send it.",
    links: [
      { url: "https://drive.google.com/file/d/16VpMK0K0M0HlwHxSEADqd6tLRci3FhUQ/view?usp=sharing", title: "E2EE Presentation" }
    ]
  },
  {
    title: "Data Structures & Algorithms",
    description: "I explored some competitive programming and DSA-style problems alongside the DSA (Monsoon 2025) course. I developed an interest towards shortest path algorithms in graphs and explored some algorithms independently.",
    links: [
      { url: "https://leetcode.com/u/VaaniGO/", title: "LeetCode Profile" }
    ]
  },
  {
    title: "String Theory and Egyptian Fractions!",
    description: "As part of the Quantitative Reasoning and Mathematical Thinking course (Summer 2025), I did a number theory project that connects Egyptian Fractions to a result in String Theory!",
    links: [
      { url: "https://drive.google.com/file/d/1dbz3m5qCIGZj_3b7obAQIJNsLrOAmCnq/view?usp=sharing", title: "Project PDF" }
    ]
  }
];

export const developmentProjects = [

  {
    title: "Ashoka University Students' Platform",
    description: "As Deputy Minister of the Ministry of Technology of my college, I am part of the team of leaders who create and maintain the digital platform with various features for campus life accessibility and automation.",
    links: []
  },
  {
    title: "Cryptography Simulator",
    description: "I coded a Cryptography Simulator that allows users to learn about Cryptography, specifically RSA encryption in a comprehensive and interactive manner.",
    links: [
      { url: "https://github.com/vaaniGO/Cryptography-and-Security/tree/main/Encryption%20Simulator", title: "Encryption Simulator" }
    ]
  },
  {
    title: "'Save Split' Web App",
    description: "This React App allows users to enter their bill amount and split according to portions and previous debts – a minimal SplitWise.",
    links: [
      { url: "https://github.com/vaaniGO/Bill-Split-App", title: "Bill-Split-App" }
    ]
  }
];
