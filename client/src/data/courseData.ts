export interface Technique {
  id: string;
  name: string;
  description: string;
  example: string;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  duration: string;
  keyPoints: string[];
  handsOnExercise?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  duration: string;
  lessons: Lesson[];
}

export const promptEngineeringTechniques: Technique[] = [
  {
    id: "zero-shot",
    name: "Zero-shot Prompting",
    description: "Ask the model to perform a task with no prior examples.",
    example: "Explain the concept of climate change, its causes, and its effects in simple terms."
  },
  {
    id: "few-shot",
    name: "Few-shot Prompting",
    description: "Provide a few examples to guide the model's output.",
    example: "Here are some examples of how to explain complex topics... Now explain: Climate Change."
  },
  {
    id: "chain-of-thought",
    name: "Chain of Thought (CoT)",
    description: "Encourage step-by-step reasoning.",
    example: "Step 1: Define climate change. Step 2: Explain causes. Step 3: Describe effects."
  },
  {
    id: "meta-prompting",
    name: "Meta Prompting",
    description: "Ask the model to generate or refine its own prompts before answering.",
    example: "Create a prompt that will help you explain climate change in simple terms."
  },
  {
    id: "self-consistency",
    name: "Self-consistency",
    description: "Request multiple independent answers and select the most coherent.",
    example: "Provide three different explanations of climate change. Then identify the most coherent explanation."
  },
  {
    id: "rag",
    name: "Retrieval Augmented Generation (RAG)",
    description: "Combine external information retrieval with generative AI.",
    example: "Using the global temperature datasets from NASA GISS, explain climate change in simple terms."
  },
  {
    id: "react",
    name: "ReAct (Reasoning and Acting)",
    description: "Combine reasoning and acting prompts.",
    example: "Analyze the following climate data and identify key trends. Based on your analysis, explain climate change."
  }
];

export const courseModules: Module[] = [
  {
    id: "module-1",
    title: "Foundations of Large Language Models and Prompt Engineering",
    description: "Learn the fundamentals of LLMs, how they work, and why prompt engineering is essential for getting the best results.",
    duration: "6-8 hours",
    lessons: [
      {
        id: "lesson-1-1",
        title: "Introduction to Large Language Models",
        duration: "2 hours",
        content: "# What is a Large Language Model?\n\nLarge Language Models (LLMs) are sophisticated AI systems trained on vast amounts of text data. They work as advanced prediction engines that understand and generate human-like text.\n\n## Key Concepts\n\n### LLMs as Prediction Engines\n- Process text as tokens (sub-word units)\n- Calculate probability distributions for next token predictions\n- Generate responses by sampling from these distributions\n\n### Training and Emergent Abilities\n- Trained on massive text corpora from the internet, books, and other sources\n- Develop unexpected capabilities like reasoning and problem-solving\n- Can perform tasks they weren't explicitly trained for\n\n## Brief History\n\n**Pre-2000s:** Simple N-gram models with limited capabilities\n\n**Mid-2000s:** Neural networks and deep learning emerged\n\n**Early 2010s:** LSTM networks improved sequential processing\n\n**Late 2010s:** Transformer revolution with attention mechanisms\n\n**2020s:** GPT era bringing powerful, accessible models",
        keyPoints: [
          "LLMs predict text based on probability distributions",
          "Tokens are the basic unit of processing",
          "Models are trained on massive datasets",
          "Transformers revolutionized language modeling",
          "Modern LLMs have emergent capabilities"
        ]
      },
      {
        id: "lesson-1-2",
        title: "What is Prompt Engineering?",
        duration: "2 hours",
        content: "# Understanding Prompt Engineering\n\nPrompt engineering is the art and science of crafting effective instructions to guide AI models toward desired outputs.\n\n## Core Elements of a Prompt\n\n1. **Instructions:** Clear directions about what you want\n2. **Questions:** Specific queries that need answers\n3. **Input Data:** Information the model should process\n4. **Examples:** Demonstrations of desired outputs\n\n## Why It Matters\n\n**Cost-Effective:** Improve model performance without retraining\n\n**Accessible:** Anyone can become an AI developer\n\n**Immediate Results:** No need for expensive fine-tuning\n\n## Different from Traditional Programming\n\nTraditional programming is explicit and deterministic. Prompt engineering is suggestive and probabilistic - you guide the AI rather than command it exactly.",
        keyPoints: [
          "Prompt engineering is communication with AI",
          "Prompts contain instructions, questions, data, and examples",
          "More cost-effective than model fine-tuning",
          "Anyone can learn prompt engineering",
          "Different from traditional programming"
        ]
      },
      {
        id: "lesson-1-3",
        title: "Understanding Tokens and Context",
        duration: "2 hours",
        content: "# Tokens and Context Windows\n\n## What are Tokens?\n\n- The atomic unit of LLM processing\n- Not the same as words\n- Can be words, parts of words, or punctuation\n\n**Rule of Thumb:** Approximately 750 words per 1,000 tokens\n\n## Context Windows\n\n**Fixed Size Memory:** Models can only access a limited amount of text at once\n\n**Model Limits:**\n- GPT-3: 4,096 tokens (~3,000 words)\n- GPT-4: 8,192 to 32,768 tokens\n- Claude: Up to 100,000 tokens\n\n## Managing Large Contexts\n\n1. **Summarization:** Condense information before processing\n2. **Sliding Window:** Process chunks with overlap\n3. **Retrieval:** Fetch only relevant information\n4. **Compression:** Remove redundant content",
        keyPoints: [
          "Tokens are sub-word units, not words",
          "~750 words per 1,000 tokens (approximate)",
          "Context windows have fixed size limits",
          "Different models have different token limits",
          "Strategies exist for managing large contexts"
        ],
        handsOnExercise: "Try counting tokens in different texts. Notice how technical jargon and code affect token counts."
      }
    ]
  },
  {
    id: "module-2",
    title: "Basic Prompting Techniques",
    description: "Master the fundamental techniques including zero-shot, few-shot learning, and instruction design best practices.",
    duration: "8-10 hours",
    lessons: [
      {
        id: "lesson-2-1",
        title: "Zero-Shot and Few-Shot Learning",
        duration: "3 hours",
        content: "# Zero-Shot and Few-Shot Learning\n\n## Zero-Shot Prompting\n\nAsk the model to perform a task without any examples.\n\n**When to Use:**\n- Simple, well-defined tasks\n- When the model already understands the task type\n- To save tokens and reduce prompt length\n\n**Best Practice:** Be extremely specific and clear about what you want.\n\n## Few-Shot Learning\n\nProvide 2-5 examples to demonstrate the desired output pattern.\n\n**When to Use:**\n- Complex or unusual tasks\n- Specific formatting requirements\n- Consistent style or tone needs\n\n**Key Strategy:** Quality over quantity - 2-3 excellent examples beat 10 mediocre ones.",
        keyPoints: [
          "Zero-shot: no examples, just clear instructions",
          "Few-shot: 2-5 examples to demonstrate pattern",
          "Choose examples wisely for best results",
          "Quality of examples matters more than quantity",
          "Different tasks need different approaches"
        ],
        handsOnExercise: "Create both zero-shot and few-shot prompts for the same task. Compare the results."
      },
      {
        id: "lesson-2-2",
        title: "Instruction Design Best Practices",
        duration: "3 hours",
        content: "# Writing Effective Instructions\n\n## Core Principles\n\n### Be Specific and Precise\nBad: Write about dogs\nGood: Write a 200-word paragraph about Golden Retrievers' temperament for a pet adoption website\n\n### Avoid Negative Instructions\nBad: Don't be too technical\nGood: Explain in simple terms a 12-year-old would understand\n\n### Define Context and Audience\nAlways include:\n- Who will read this?\n- What's the purpose?\n- What's the desired tone?\n\n## Common Pitfalls\n\n1. **Ambiguous Language:** Be clear and specific\n2. **Missing Context:** Provide all relevant information\n3. **Overwhelming Complexity:** Break into focused prompts",
        keyPoints: [
          "Specificity is crucial for good results",
          "Avoid negative instructions - state what you want",
          "Always define audience and context",
          "Common pitfalls: ambiguity, missing context, complexity"
        ],
        handsOnExercise: "Transform a vague prompt into a highly specific instruction. Test both and compare outputs."
      }
    ]
  },
  {
    id: "module-3",
    title: "Intermediate Prompting Strategies",
    description: "Explore chain-of-thought prompting, self-consistency, role-playing, and safety considerations.",
    duration: "10-12 hours",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Chain-of-Thought (CoT) Prompting",
        duration: "4 hours",
        content: "# Chain-of-Thought Prompting\n\nMake the model think out loud before answering.\n\n## Core Principle\n\nBreak down complex problems into step-by-step reasoning processes.\n\n## When CoT Works Best\n\n- Complex reasoning tasks (math, logic, planning)\n- Multi-step problems\n- Larger models (GPT-4, Claude 3+)\n- Tasks requiring verification\n\n## The Magic Phrase\n\n**\"Let's think step by step\"**\n\nThis simple addition can dramatically improve reasoning on complex tasks.\n\n## Advanced: Self-Consistency\n\nGenerate multiple reasoning paths and pick the most common answer through majority voting.",
        keyPoints: [
          "CoT makes models show their reasoning",
          "Dramatically improves complex reasoning tasks",
          "'Let's think step by step' is surprisingly effective",
          "Self-consistency: generate multiple paths, pick consensus",
          "Works best with larger, more capable models"
        ],
        handsOnExercise: "Try a math problem with and without CoT. Then try self-consistency with 3 different reasoning paths."
      },
      {
        id: "lesson-3-2",
        title: "Role-Playing and Persona Design",
        duration: "3 hours",
        content: "# Role-Playing and Persona Design\n\nGuide AI behavior by assigning specific roles and personas.\n\n## Creating Effective Personas\n\n### Include These Elements\n\n1. **Background/Expertise:** \"20 years experience in...\"\n2. **Communication Style:** Formal vs. casual, technical vs. accessible\n3. **Approach/Methodology:** \"Always start by...\"\n4. **Personality Traits:** Patient, analytical, creative\n\n## Example Personas\n\n**Teacher:** \"You are an experienced science teacher who excels at making complex topics accessible.\"\n\n**Consultant:** \"You are a senior business strategy consultant with 15 years of experience.\"\n\n**Creative Writer:** \"You are a creative storyteller inspired by authors like Neil Gaiman.\"",
        keyPoints: [
          "Personas guide AI behavior and style",
          "Include expertise, style, approach, and personality",
          "Professional roles need different personas than creative ones",
          "Context management maintains conversation continuity"
        ],
        handsOnExercise: "Create three different personas and ask each the same question. Compare response styles."
      }
    ]
  },
  {
    id: "module-4",
    title: "Advanced Prompting Techniques",
    description: "Master advanced strategies including ReAct framework, tree of thoughts, and automatic optimization.",
    duration: "8-10 hours",
    lessons: [
      {
        id: "lesson-4-1",
        title: "ReAct: Reasoning and Acting",
        duration: "3 hours",
        content: "# ReAct Framework\n\nCombine reasoning with action for autonomous problem-solving.\n\n## Core Concept\n\n**Thought-Action-Observation Loop:**\n1. Think about what to do next\n2. Take an action (use a tool, search, calculate)\n3. Observe the result\n4. Repeat until task complete\n\n## Applications\n\n- Web search integration\n- Database querying\n- API calling\n- Multi-step research tasks\n\n## Implementation\n\nProvide the model with:\n- Available tools/actions\n- Clear format for thoughts and actions\n- Feedback mechanism for observations",
        keyPoints: [
          "ReAct combines thinking and doing",
          "Thought-Action-Observation loops enable autonomy",
          "Integrates external tools and APIs",
          "Powerful for research and analysis tasks"
        ],
        handsOnExercise: "Build a simple ReAct prompt that uses web search to answer questions it doesn't know."
      }
    ]
  },
  {
    id: "module-5",
    title: "Specialized Applications",
    description: "Apply prompt engineering to code generation, RAG, multimodal AI, and business use cases.",
    duration: "6-8 hours",
    lessons: [
      {
        id: "lesson-5-1",
        title: "Retrieval-Augmented Generation (RAG)",
        duration: "3 hours",
        content: "# Retrieval-Augmented Generation\n\nCombine external knowledge retrieval with AI generation.\n\n## Why RAG?\n\n**Problems RAG Solves:**\n- Knowledge cutoff dates\n- Hallucination on facts\n- Domain-specific information needs\n- Real-time data requirements\n\n## How RAG Works\n\n1. User asks a question\n2. Retrieve relevant documents from knowledge base\n3. Provide documents as context to LLM\n4. LLM generates answer based on retrieved context\n\n## Best Practices\n\n- Chunk documents appropriately (500-1000 tokens)\n- Use semantic similarity for retrieval\n- Always cite sources\n- Handle missing information gracefully",
        keyPoints: [
          "RAG grounds AI responses in real documents",
          "Solves hallucination and knowledge cutoff problems",
          "Retrieval uses semantic similarity",
          "Always cite sources in responses"
        ],
        handsOnExercise: "Create a simple RAG system with 5 documents. Build prompts that cite sources correctly."
      }
    ]
  },
  {
    id: "module-6",
    title: "Production Deployment",
    description: "Deploy prompt engineering systems with security, optimization, and monitoring.",
    duration: "4-6 hours",
    lessons: [
      {
        id: "lesson-6-1",
        title: "Prompt Security",
        duration: "2 hours",
        content: "# Prompt Security and Robustness\n\n## Prompt Injection Attacks\n\n**What is it?** Malicious users attempt to override your instructions.\n\n### Defense Strategies\n\n1. **Instruction Hierarchy:** Mark core instructions as highest priority\n2. **Input Sandboxing:** Treat user input as DATA, not INSTRUCTIONS\n3. **Output Constraints:** Verify responses before returning\n\n## Input Validation\n\nCheck for:\n- Injection keywords (\"ignore previous\", \"system prompt\")\n- Length limits\n- Special characters\n\n## Sensitive Data\n\n- Mask emails, phone numbers, credit cards\n- Never expose system prompts\n- Use rate limiting to prevent abuse",
        keyPoints: [
          "Prompt injection is a real security threat",
          "Use instruction hierarchy and sandboxing",
          "Mask sensitive data before processing",
          "Implement rate limiting"
        ],
        handsOnExercise: "Try to break your own prompt with injection attacks. Then implement defenses and test again."
      }
    ]
  },
  {
    id: "module-7",
    title: "Future Directions",
    description: "Explore cutting-edge techniques, emerging research, and ethical AI development.",
    duration: "2-4 hours",
    lessons: [
      {
        id: "lesson-7-1",
        title: "Emerging Techniques",
        duration: "2 hours",
        content: "# Emerging Techniques and Research\n\n## Latest Developments\n\n### Graph Prompting\n- Represent relationships as graphs\n- Improve reasoning about complex connections\n- Better multi-entity problem handling\n\n### Multimodal Chain-of-Thought\n- Integrate reasoning across text, images, audio\n- Cross-modal understanding\n- Enhanced context from multiple sources\n\n### Reflexion (Self-Reflection)\n- Model reviews and improves its own output\n- Iterative refinement loop\n- Self-correction without human feedback\n\n## Industry Trends\n\n- Longer context windows (1M+ tokens)\n- Faster inference speeds\n- Lower costs\n- Specialized domain models\n- Edge deployment",
        keyPoints: [
          "Graph prompting improves relational reasoning",
          "Multimodal CoT integrates diverse data",
          "Reflexion enables self-improvement",
          "Industry rapidly advancing capabilities"
        ],
        handsOnExercise: "Research one recent paper on prompt engineering. Implement the technique and compare to traditional methods."
      }
    ]
  }
];

export const courseOverview = {
  title: "Comprehensive Prompt Engineering Course",
  description: "Master the art and science of communicating with AI. From foundations to advanced techniques, learn to craft effective prompts that unlock the full potential of Large Language Models.",
  duration: "40-50 hours (self-paced)",
  prerequisites: "None required - suitable for complete beginners",
  targetAudience: ["Developers", "Researchers", "Business Professionals", "AI Enthusiasts", "Anyone curious about AI"],
  learningOutcomes: [
    "Understand how Large Language Models work and process information",
    "Master fundamental and advanced prompting techniques",
    "Design secure, reliable AI systems for production use",
    "Apply prompt engineering to real-world business problems",
    "Stay current with emerging research and best practices"
  ],
  keyTopics: [
    "Zero-shot and Few-shot Learning",
    "Chain-of-Thought Prompting",
    "Retrieval-Augmented Generation (RAG)",
    "ReAct Framework",
    "Production Security and Optimization",
    "Ethical AI Development"
  ]
};
