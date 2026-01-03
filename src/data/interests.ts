export const interests = [
  {
    title: "Formal Methods",
    content: `I am interested in Formal Methods because of the principle of (what I call) elegant and minimal expressiveness. Systems with seemingly simple axioms (for example the Zermaelo-Frankel Axioms) can be powerfully and sufficiently expressive (the ZF axioms can formalise virtually all of math). This encourages me to meaningfully condense and identify what’s important and what isn’t. This idea of ‘defining properties’ pave the way for my appreciation for structure. This idea helps me understand and appreciate things like morphisms (for example, in the context of category theory). In short, the ‘design requirements’ and surprisingly nontrivial consequences of a formal structure or system are what appeal to me. `
  },
  {
    title: "Number Theory & Cryptography",
    content: `I was first introduced to Number Theory when I was a Teaching Assistant at the <a href="https://www.lodhageniusprogramme.com/">Lodha Genius Programme's</a> Problem Solving Group class. I first derived and appreciated theorems like Wilson's Theorem, Fermat's Little Theorem and theorems related to Euler Totient Functions (<a href="https://cp-algorithms.com/algebra/phi-function.html">here</a> is a resource I followed and appreciate). Then, I came across a very interesting <a href="https://www.johndcook.com/blog/2019/10/22/hacking-with-de-bruijn/">blog</a> dealing with De Bruijn sequences. I knew nothing about Groups – leave alone Rings – but I decided to spend the next week exploring this bottom-up, and ended up implementing it in <a href="https://github.com/vaaniGO/Cryptography-and-Security/tree/main/De%20Brujin%20Passcode%20Attack">code</a>. That is when I first developed an affinity towards algebra and number theory.

At the time, I was also a Teaching Assistant in the Introduction to Modern Cryptography class in the same programme. There, I was simultaneously being introduced to things like RSA, ElGamal and Diffie-Hellman protocols. Fascinated, I decided to make a <a href="https://github.com/vaaniGO/Cryptography-and-Security/tree/main/Encryption%20Simulator">cryptography simulator</a>.

What I appreciate about this field is firstly the sheer 'uselessness' of some esoteric work in Number Theory. For example, take the case of problems relating to the <a href="https://en.wikipedia.org/wiki/Sylvester%27s_sequence">Sylvester Sequence</a> – they're just fun to work on and bring out the underlying beauty in things. My appreciation for these problems' solutions would not change if someone someday found a worthy application for it – which also happens quite a bit (take the case of applications of Sylvester's sequence to Znam's problem to nondeterministic finite automata!).

Secondly, I admire prime numbers and how they are hidden under the wraps, waiting to be exploited. This appreciation started with Eratosthenes' sieve, but continues with (currently) my love for the AKS algorithm. What I loved particularly were the Laws of Quadratic Reciprocity from my undergraduate Cryptography course - who knew picking a generator in certain groups was O(1)! I love the 'a-ha' moments of this field.`
  },
  {
    title: "Logic",
    content: `I am interested in Logic because of how it has (like much of other math) taught me to not rely on my intuition. This happened first when I was introduced to the Compactness Theorem in Symbolic Logic and Applications. It took a good deal of trying to wrap my head around it, but now that the course is over, it has become a part of what I can consider to be my natural intuition. This transformation process was a beautiful one.

What I also love is the guarantees that Logic helps us provide. For example, the soundness of DPLL relies on the soundness of Resolution. Logic gives me an environment to build structure, have properties be inherited and applied creatively but soundly. The second example here is the example of invariants, but my deep interest in invariants has led me to devote a separate section to that.

Next, I like how Logic encourages me to think about topics like soundness, completeness and quality of axioms. For example, I was slightly unsettled when my professor told me about issues relating to currying in FOL. I then went on to explore exactly why natural numbers cannot be encoded using only FOL – thereby deepening my appreciation for the structure of things in this domain!`
  },
  {
    title: "Invariants",
    content: `This section is best read after the section on Logic. I will narrow down and hyperfocus on invariants here.

Given an input, how can we come up with an iterative operation that maintains a certain desirable property while getting closer to the output? We can term the former as the invariant and the latter takes the form of the ranking function. For example, while dividing a number a by b we want that whatever the running quotient is (consider we are building up the quotient by iteratively subtracting b from a), b * quotient <= a. 

Invariants allow us to engage in this wonderfully principled, correct-by-construction line of reasoning, and enables us to provide proofs of correctness of our functions too.

What has deepened my appreciation for invariants is DSA. Given the outline of a data structure – understanding what is the desired "benefit" or advantage of the data structure (for example, min access in a min-heap) – we can easily define operations that get the job done without violating this property. Consider AVL trees - just noting the invariant allows us to almost intuitively reason about what operations should be performed to maintain the invariant (being almost-balanced).

Moreover, since code that works is not always code that is correct, invariants strengthen working code, helping provide guarantees in a world with increasingly <a href="https://en.wikipedia.org/wiki/List_of_software_bugs">fatal bugs</a>.`
  }
];
