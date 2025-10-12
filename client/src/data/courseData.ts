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
    example: "You are a senior cybersecurity analyst. Analyze this network log and identify any potential security threats. For each threat, specify: severity level (Critical/High/Medium/Low), attack vector, and recommended mitigation strategy. Present findings in a structured incident report format."
  },
  {
    id: "few-shot",
    name: "Few-shot Prompting",
    description: "Provide a few examples to guide the model's output.",
    example: "Extract key entities from customer feedback:\n\nInput: \"The new iPhone camera is amazing but battery life is disappointing.\"\nOutput: {product: \"iPhone\", positive: [\"camera\"], negative: [\"battery life\"]}\n\nInput: \"Tesla Model 3 has incredible acceleration, though the interior feels cheap.\"\nOutput: {product: \"Tesla Model 3\", positive: [\"acceleration\"], negative: [\"interior quality\"]}\n\nNow extract from: \"The MacBook Pro M3 runs cool and quiet, but the price is hard to justify.\""
  },
  {
    id: "chain-of-thought",
    name: "Chain of Thought (CoT)",
    description: "Encourage step-by-step reasoning.",
    example: "A company's revenue grew from $2.5M to $4.8M over 3 years, while operating costs increased from $1.8M to $3.1M. Should they expand to a new market requiring $800K investment? Think step by step:\n\n1. Calculate revenue growth rate\n2. Calculate cost growth rate and profit margins\n3. Assess sustainability of current trajectory\n4. Evaluate risk vs. opportunity of expansion\n5. Provide recommendation with justification"
  },
  {
    id: "meta-prompting",
    name: "Meta Prompting",
    description: "Ask the model to generate or refine its own prompts before answering.",
    example: "Before answering the user's question about implementing microservices architecture, first:\n\n1. Generate 3 clarifying questions to understand their context (team size, current architecture, scale requirements)\n2. Create a structured prompt template that will guide a comprehensive analysis\n3. Rate your prompt template on clarity (1-10) and refine if below 8\n4. Then use your refined prompt to provide the answer"
  },
  {
    id: "self-consistency",
    name: "Self-consistency",
    description: "Request multiple independent answers and select the most coherent.",
    example: "Generate three independent solutions to this algorithm problem using different approaches (dynamic programming, greedy algorithm, divide-and-conquer). For each solution:\n- Provide the pseudocode\n- Analyze time/space complexity\n- List edge cases\n\nThen compare all three, identify the most efficient approach, and explain why it's optimal."
  },
  {
    id: "rag",
    name: "Retrieval Augmented Generation (RAG)",
    description: "Combine external information retrieval with generative AI.",
    example: "Based on the latest Q4 2024 earnings reports from Apple, Microsoft, and Google (retrieved from SEC filings), analyze the AI investment trends across these tech giants. For each company:\n- Identify AI-related revenue streams\n- Compare YoY AI infrastructure spending\n- Extract future AI strategy statements from CEO remarks\n\nCite specific page numbers and filing sections for all claims."
  },
  {
    id: "react",
    name: "ReAct (Reasoning and Acting)",
    description: "Combine reasoning and acting prompts.",
    example: "Research the current state of quantum computing applications in cryptography:\n\nThought: I need to find recent developments in post-quantum cryptography\nAction: Search academic papers from 2024-2025 on 'post-quantum cryptography standards'\nObservation: [results show NIST standardization of new algorithms]\n\nThought: I should understand the timeline for implementation\nAction: Search for 'NIST post-quantum migration timeline enterprise'\nObservation: [results indicate 2025-2030 transition period]\n\nProvide a comprehensive analysis with actionable recommendations for enterprise security teams."
  },
  {
    id: "tree-of-thoughts",
    name: "Tree of Thoughts (ToT)",
    description: "Explore multiple reasoning paths and evaluate the best solution.",
    example: "Design a scalable notification system for 10M users. Explore three architectural approaches:\n\nPath 1: Push-based (WebSocket) → Evaluate: latency, server cost, complexity\nPath 2: Pull-based (Polling) → Evaluate: freshness, client battery, server load  \nPath 3: Hybrid (Push + Queue) → Evaluate: reliability, cost, implementation time\n\nFor each path, identify pros/cons and potential failure modes. Select the optimal approach based on: real-time requirements, budget constraints, and team expertise."
  },
  {
    id: "structured-output",
    name: "Structured Output",
    description: "Define precise output format using JSON schemas or templates.",
    example: "Analyze this product review and return a JSON object matching this schema:\n\n{\n  \"sentiment\": \"positive\" | \"negative\" | \"neutral\",\n  \"rating_prediction\": 1-5,\n  \"key_aspects\": [\n    {\"feature\": string, \"sentiment\": string, \"quote\": string}\n  ],\n  \"purchase_intent\": \"high\" | \"medium\" | \"low\",\n  \"competitor_mentions\": [string],\n  \"actionable_feedback\": string\n}\n\nReview: \"This laptop beats my old Dell in every way - the M3 chip is blazingly fast for video editing. Battery lasts all day unlike my colleague's HP. Only wish it had more ports, but USB-C hubs solve that. Definitely buying another for my team.\""
  },
  {
    id: "self-refinement",
    name: "Self-Refinement",
    description: "Model critiques and improves its own outputs iteratively.",
    example: "Write a Python function to detect SQL injection attempts.\n\nAfter writing, perform self-review:\n1. Rate your solution's security coverage (1-10)\n2. Identify any edge cases you missed\n3. Check for performance bottlenecks\n4. Suggest improvements to your own code\n5. Rewrite the function incorporating your critiques\n6. Explain what changed and why it's better\n\nRepeat the review process until you rate it 9/10 or higher."
  }
];

export const courseModules: Module[] = [
  {
    id: "module-1",
    title: "Foundations of Large Language Models and Prompt Engineering",
    description: "Learn the fundamentals of LLMs, how they work, and why prompt engineering is essential for getting the best results.",
    duration: "12-16 hours",
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
        title: "The Transformer Architecture: A Deep Dive",
        duration: "3 hours",
        content: "# The Transformer Architecture\n\nTransformers are the revolutionary neural network architecture that powers modern LLMs. Understanding their mechanics helps you write better prompts.\n\n## Self-Attention Mechanism\n\n### The Core Innovation\n\nSelf-attention allows the model to weigh the importance of different words in relation to each other, regardless of their distance in the text.\n\n**Three Key Components:**\n- **Query (Q):** What am I looking for?\n- **Key (K):** What do I contain?\n- **Value (V):** What information do I provide?\n\n### How It Works\n\n1. Each word creates Q, K, V vectors\n2. Calculate attention scores: Q × K^T\n3. Apply softmax to get attention weights\n4. Weighted sum of values produces output\n\n## Multi-Head Attention\n\n**Why Multiple Heads?**\n- Different heads learn different relationships\n- One head might focus on syntax, another on semantics\n- Parallel processing of diverse patterns\n\n**Example:** In \"The bank by the river flooded\"\n- Head 1: 'bank' attends to 'river' (location context)\n- Head 2: 'bank' attends to 'flooded' (disaster context)\n\n## Positional Encodings\n\n**The Problem:** Self-attention has no inherent sense of word order\n\n**The Solution:** Add positional information to embeddings\n- Sine and cosine functions of different frequencies\n- Allows model to understand sequence relationships\n- Enables processing of arbitrary-length sequences\n\n## Layer Architecture\n\n**Encoder-Decoder vs. Decoder-Only:**\n- Original Transformers: Both encoder and decoder\n- GPT Models: Decoder-only (autoregressive)\n- BERT Models: Encoder-only (bidirectional)\n\n**Each Layer Contains:**\n1. Multi-head self-attention\n2. Layer normalization\n3. Feed-forward neural network\n4. Residual connections",
        keyPoints: [
          "Self-attention weighs word relationships dynamically",
          "Query-Key-Value mechanism enables parallel processing",
          "Multi-head attention captures diverse patterns",
          "Positional encodings preserve sequence information",
          "Residual connections enable training of deep networks"
        ],
        handsOnExercise: "Visualize attention patterns in a simple sentence using online tools like BertViz to see which words attend to each other."
      },
      {
        id: "lesson-1-3",
        title: "LLM Training and Fine-Tuning Methodologies",
        duration: "3 hours",
        content: "# Training Large Language Models\n\nUnderstanding how LLMs are trained helps you leverage their capabilities effectively through prompting.\n\n## Pre-Training: The Foundation\n\n### Objective\nLearn general language understanding from massive unlabeled text corpora (trillions of tokens).\n\n### Training Process\n1. **Data Collection:** Crawl internet, books, code repositories\n2. **Tokenization:** Convert text to model-readable format\n3. **Next-Token Prediction:** Learn P(word_n | word_1...word_n-1)\n4. **Optimization:** Adjust billions of parameters via gradient descent\n\n### Compute Requirements\n- Training GPT-3: ~$4.6M in compute costs\n- Thousands of GPUs for weeks/months\n- Distributed training across data centers\n\n## Instruction Fine-Tuning (IFT)\n\n### Purpose\nAdapt pre-trained models to follow human instructions and perform specific tasks.\n\n### The Process\n1. **Dataset Creation:** Collect instruction-response pairs\n   - \"Summarize this article\" → [summary]\n   - \"Translate to French\" → [translation]\n2. **Supervised Learning:** Train model on these examples\n3. **Result:** Model learns to follow instructions\n\n### Key Datasets\n- FLAN: 1,800+ tasks across 60+ languages\n- Alpaca: 52K instruction-following examples\n- Dolly: High-quality human-generated pairs\n\n## Reinforcement Learning from Human Feedback (RLHF)\n\n### The Alignment Problem\nPre-trained models may generate harmful, biased, or unhelpful content.\n\n### RLHF Pipeline\n\n**Step 1: Collect Comparison Data**\n- Show humans multiple model outputs\n- Rank responses by quality/helpfulness\n- Build preference dataset\n\n**Step 2: Train Reward Model**\n- Learn to predict human preferences\n- Outputs scalar reward for any response\n\n**Step 3: Optimize with PPO**\n- Use Proximal Policy Optimization\n- Model learns to maximize predicted reward\n- Maintains diversity, avoids mode collapse\n\n### Constitutional AI (Alternative)\n- Models critique their own outputs\n- Self-improve based on principles\n- Reduces need for human feedback\n\n## Impact on Prompting\n\n**Understanding training helps you:**\n- Know what models are good/bad at\n- Recognize training data influences\n- Craft prompts that align with training objectives\n- Anticipate potential biases or limitations",
        keyPoints: [
          "Pre-training creates general language understanding",
          "Instruction fine-tuning teaches models to follow directions",
          "RLHF aligns models with human preferences",
          "Training methodology shapes model capabilities",
          "Understanding training helps craft better prompts"
        ],
        handsOnExercise: "Compare responses from base models vs. instruction-tuned models for the same prompt to see the impact of fine-tuning."
      },
      {
        id: "lesson-1-4",
        title: "A Comparative Guide to Modern LLMs",
        duration: "2 hours",
        content: "# Modern LLM Landscape (2025)\n\nChoosing the right model for your use case is crucial for effective prompt engineering.\n\n## Major Model Families\n\n### GPT Series (OpenAI)\n\n**GPT-4 Turbo & GPT-4o**\n- **Context:** 128K tokens\n- **Strengths:** Reasoning, coding, multimodal understanding\n- **Best For:** Complex analysis, creative writing, code generation\n- **Limitations:** Cost, speed trade-offs\n\n**GPT-3.5 Turbo**\n- **Context:** 16K tokens\n- **Strengths:** Fast, cost-effective, good general performance\n- **Best For:** High-volume applications, simple tasks\n\n### Claude (Anthropic)\n\n**Claude 3.5 Sonnet**\n- **Context:** 200K tokens\n- **Strengths:** Long document analysis, nuanced reasoning, safety\n- **Best For:** Research, document analysis, ethical applications\n- **Key Feature:** Constitutional AI for enhanced safety\n\n**Claude 3 Opus**\n- **Context:** 200K tokens\n- **Strengths:** Highest capability in Claude family\n- **Best For:** Complex tasks requiring deep reasoning\n\n### Llama (Meta)\n\n**Llama 3.1 (405B)**\n- **Context:** 128K tokens\n- **Strengths:** Open source, customizable, strong multilingual\n- **Best For:** On-premise deployment, customization needs\n- **Advantage:** No API costs for self-hosting\n\n### Gemini (Google)\n\n**Gemini 1.5 Pro**\n- **Context:** 1M tokens (industry-leading)\n- **Strengths:** Massive context, multimodal, fast\n- **Best For:** Full document processing, video analysis\n- **Innovation:** Native multimodal architecture\n\n## Specialized Models\n\n### Code-Focused\n- **GitHub Copilot:** Code completion and generation\n- **CodeLlama:** Open-source code specialist\n- **Replit Ghostwriter:** Context-aware coding assistant\n\n### Domain-Specific\n- **Med-PaLM:** Medical knowledge and diagnosis\n- **BloombergGPT:** Financial analysis\n- **Galactica:** Scientific research\n\n## Selection Criteria\n\n### By Use Case\n\n**Creative Writing:** GPT-4, Claude 3 Opus\n- Rich vocabulary, narrative coherence\n\n**Code Generation:** GPT-4, CodeLlama\n- Syntax accuracy, debugging capabilities\n\n**Data Analysis:** Claude 3.5 Sonnet, Gemini 1.5 Pro\n- Long context for full datasets\n\n**Customer Service:** GPT-3.5 Turbo, Llama 3.1\n- Cost-effective, fast responses\n\n### By Constraints\n\n**Budget-Limited:** Llama (self-hosted), GPT-3.5\n**Privacy-Critical:** Llama (on-premise)\n**Long Documents:** Gemini 1.5 Pro, Claude\n**Speed-Critical:** GPT-3.5 Turbo, smaller Llama variants\n\n## Performance Benchmarks\n\n**MMLU (Multitask Understanding):**\n- GPT-4: 86.4%\n- Claude 3 Opus: 86.8%\n- Gemini 1.5 Pro: 85.9%\n- Llama 3.1 405B: 85.2%\n\n**HumanEval (Code Generation):**\n- GPT-4: 67%\n- Claude 3.5 Sonnet: 92%\n- Llama 3.1 405B: 61%\n\n## Cost Comparison (per 1M tokens)\n\n- GPT-4 Turbo: $10 input / $30 output\n- GPT-3.5 Turbo: $0.50 input / $1.50 output\n- Claude 3.5 Sonnet: $3 input / $15 output\n- Gemini 1.5 Pro: $3.50 input / $10.50 output\n- Llama 3.1: Self-hosted (infrastructure costs)",
        keyPoints: [
          "Different models excel at different tasks",
          "Context window size varies from 16K to 1M tokens",
          "Cost-performance trade-offs are significant",
          "Open-source options offer customization and privacy",
          "Benchmark scores help but real-world testing is crucial"
        ],
        handsOnExercise: "Test the same prompt across 3 different models and compare outputs, speed, and cost for your specific use case."
      },
      {
        id: "lesson-1-5",
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
        id: "lesson-1-6",
        title: "Advanced Tokenization and Sampling Strategies",
        duration: "2 hours",
        content: "# Tokenization and Sampling Deep Dive\n\nMastering tokens and sampling parameters gives you fine control over model behavior.\n\n## Tokenization Strategies\n\n### Byte-Pair Encoding (BPE)\n**Used by:** GPT models, many others\n\n**How it works:**\n1. Start with character-level tokens\n2. Iteratively merge most frequent pairs\n3. Build vocabulary of subwords\n\n**Example:** \"unhappiness\"\n- Initial: [u, n, h, a, p, p, i, n, e, s, s]\n- After merging: [un, happi, ness]\n\n**Advantages:**\n- Handles rare words effectively\n- Language-agnostic approach\n- Balances vocabulary size and coverage\n\n### WordPiece\n**Used by:** BERT, some Google models\n\n**Difference from BPE:**\n- Chooses merges based on likelihood maximization\n- Often prefixes subwords with ##\n- Example: \"unhappiness\" → [un, ##happi, ##ness]\n\n### SentencePiece\n**Used by:** Llama, T5\n\n**Key Feature:**\n- Treats spaces as tokens\n- Works directly on raw text\n- Better multilingual support\n\n## Token Count Impact on Prompts\n\n**Why Token Counts Matter:**\n- Cost (billed per token)\n- Context limits (hard boundaries)\n- Latency (more tokens = slower)\n\n**Optimization Strategies:**\n1. Be concise but not cryptic\n2. Use technical terms (often fewer tokens)\n3. Avoid repetition\n4. Compress examples when possible\n\n**Example:**\n- Verbose (20 tokens): \"I would like you to please analyze this data and provide insights\"\n- Optimized (11 tokens): \"Analyze this data and provide insights\"\n\n## Sampling Parameters\n\n### Temperature (0.0 - 2.0)\n\n**Controls randomness and creativity**\n\n**Temperature = 0.0:** Deterministic (always picks highest probability token)\n- Use for: Math, code, factual Q&A\n- Output: Consistent, safe, predictable\n\n**Temperature = 0.7:** Balanced creativity\n- Use for: General content, conversation\n- Output: Natural variation, mostly coherent\n\n**Temperature = 1.5+:** High creativity\n- Use for: Creative writing, brainstorming\n- Output: Diverse, sometimes unexpected\n\n### Top-p (Nucleus Sampling)\n\n**Selects from smallest set of tokens whose cumulative probability exceeds p**\n\n**Top-p = 0.1:** Very focused\n- Only considers top 10% probability mass\n- Conservative, safe outputs\n\n**Top-p = 0.9:** Balanced (recommended default)\n- Allows variety while excluding unlikely tokens\n- Good for most applications\n\n**Top-p = 1.0:** All tokens considered\n- Maximum diversity\n- Risk of incoherent outputs\n\n### Top-k Sampling\n\n**Limits selection to k most likely tokens**\n\n**Top-k = 1:** Same as temperature 0\n- Deterministic selection\n\n**Top-k = 40:** Moderate variety\n- Considers 40 most likely next tokens\n- Prevents very unlikely words\n\n**Top-k = 100+:** High diversity\n- Wide selection pool\n\n### Frequency & Presence Penalties\n\n**Frequency Penalty:** Reduces probability of repeated tokens\n- Range: 0.0 to 2.0\n- Use: Prevent repetitive outputs\n\n**Presence Penalty:** Encourages new topics\n- Range: 0.0 to 2.0\n- Use: Increase topic diversity\n\n## Practical Guidelines\n\n**For Factual Tasks:**\n- Temperature: 0.0-0.3\n- Top-p: 0.1-0.5\n- Penalties: Low (0.0-0.3)\n\n**For Creative Tasks:**\n- Temperature: 0.8-1.2\n- Top-p: 0.9-0.95\n- Penalties: Medium (0.5-1.0)\n\n**For Balanced General Use:**\n- Temperature: 0.7\n- Top-p: 0.9\n- Penalties: 0.0\n\n## Interactive Token Visualization\n\n**Try these tools:**\n- OpenAI Tokenizer: Count tokens for different models\n- Hugging Face Tokenizer: Compare tokenization strategies\n- GPT-3 Playground: Experiment with sampling parameters\n\n**Exercise:** Take a paragraph and see how different models tokenize it. Notice:\n- Technical terms may be 1 or many tokens\n- Spaces and punctuation handling\n- Code vs. natural language differences",
        keyPoints: [
          "BPE, WordPiece, and SentencePiece have different strengths",
          "Token efficiency reduces costs and fits more context",
          "Temperature controls creativity vs. consistency",
          "Top-p and top-k limit token selection pools",
          "Penalties reduce repetition and encourage diversity"
        ],
        handsOnExercise: "Experiment with temperature settings: Generate creative story at 1.2, then factual summary at 0.2. Compare coherence and variety."
      }
    ]
  },
  {
    id: "module-2",
    title: "Basic Prompting Techniques",
    description: "Master the fundamental techniques including zero-shot, few-shot learning, and instruction design best practices.",
    duration: "14-18 hours",
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
      },
      {
        id: "lesson-2-3",
        title: "Mastering Prompt Structure and Formatting",
        duration: "4 hours",
        content: "# Prompt Structure and Formatting\n\nWell-structured prompts dramatically improve model performance and output quality.\n\n## Using Delimiters Effectively\n\n### Why Delimiters Matter\n\nDelimiters clearly separate instructions from content, preventing confusion and injection attacks.\n\n**Common Delimiter Patterns:**\n\n**Triple Quotes:**\n```\nSummarize the following text:\n\"\"\"\n[User's text here]\n\"\"\"\n```\n\n**Triple Hashtags:**\n```\nAnalyze this customer review:\n###\n[Review content]\n###\n```\n\n**XML Tags:**\n```\n<instruction>Translate to Spanish</instruction>\n<text>\n[English text]\n</text>\n```\n\n**Markdown Code Blocks:**\n```\nDebug this code:\n```python\n[Code here]\n```\n```\n\n### Benefits\n- **Security:** Prevents prompt injection\n- **Clarity:** Model knows where content begins/ends\n- **Structure:** Enables complex multi-part prompts\n\n## Structured Output Formats\n\n### JSON Output\n\n**Prompt Pattern:**\n```\nExtract entities from this text and return JSON:\n\nText: \"Apple Inc. CEO Tim Cook announced iPhone 15 in Cupertino.\"\n\nReturn format:\n{\n  \"company\": string,\n  \"person\": string,\n  \"product\": string,\n  \"location\": string\n}\n```\n\n**Why JSON?**\n- Easy to parse programmatically\n- Language-agnostic\n- Supports nested structures\n- Type-safe with schemas\n\n### XML Output\n\n**When to Use:**\n- Hierarchical data\n- Document-style content\n- Legacy system integration\n\n**Example:**\n```\n<article>\n  <title>...</title>\n  <summary>...</summary>\n  <keyPoints>\n    <point>...</point>\n  </keyPoints>\n</article>\n```\n\n### Markdown Tables\n\n**Perfect For:**\n- Comparative data\n- Structured lists\n- Reports\n\n**Prompt:**\n```\nCompare these products in a markdown table:\n| Feature | Product A | Product B |\n|---------|-----------|-----------|  \n```\n\n## System, User, and Assistant Roles\n\n### Role-Based Prompting\n\n**System Message:**\n- Sets overall behavior and context\n- Persistent across conversation\n- Defines constraints and style\n\n```\nSystem: You are a Python expert who writes clean, documented code.\nUser: Write a function to sort a list.\n```\n\n**User Message:**\n- The actual request or query\n- Changes with each interaction\n- Contains the task or question\n\n**Assistant Message:**\n- Previous model responses\n- Provides conversation history\n- Enables context continuity\n\n### Multi-Turn Conversations\n\n**Structure:**\n```\nSystem: Financial analyst with 15 years experience\nUser: Analyze AAPL stock performance\nAssistant: [Previous analysis]\nUser: Now compare with MSFT\n```\n\n## Advanced Formatting Techniques\n\n### Numbered Instructions\n\n**For Sequential Tasks:**\n```\n1. Extract all email addresses\n2. Validate each address format\n3. Group by domain\n4. Return as JSON sorted by count\n```\n\n### Section Headers\n\n**For Complex Prompts:**\n```\n## TASK\nTranslate technical documentation\n\n## CONTEXT\nSoftware engineering audience, B2B\n\n## CONSTRAINTS\n- Preserve code examples\n- Maintain technical accuracy\n- Target language: Spanish\n\n## INPUT\n[Document here]\n```\n\n### Template Variables\n\n**Reusable Prompts:**\n```\nAnalyze {TOPIC} from perspective of {ROLE}.\n\nConsider:\n- {ASPECT_1}\n- {ASPECT_2}\n- {ASPECT_3}\n\nProvide {OUTPUT_LENGTH} response in {FORMAT}.\n```\n\n## Parsing Structured Output\n\n### JavaScript/TypeScript\n```javascript\nconst response = await callLLM(prompt);\nconst data = JSON.parse(response);\n// Type-safe access\n```\n\n### Python\n```python\nimport json\nresponse = llm.generate(prompt)\ndata = json.loads(response)\n```\n\n### Error Handling\n\n**Robust Parsing:**\n1. Validate format before parsing\n2. Use try-catch blocks\n3. Provide fallback for malformed output\n4. Log parsing errors for prompt improvement\n\n## Best Practices\n\n1. **Be Consistent:** Use same delimiters throughout\n2. **Be Explicit:** Specify exact output format\n3. **Be Defensive:** Anticipate parsing errors\n4. **Be Clear:** Visual structure aids model understanding\n5. **Be Tested:** Validate format with multiple examples",
        keyPoints: [
          "Delimiters prevent injection and clarify structure",
          "JSON/XML enable programmatic output parsing",
          "System/User/Assistant roles organize conversations",
          "Template variables create reusable prompts",
          "Structured output requires robust error handling"
        ],
        handsOnExercise: "Create a prompt with XML delimiters that returns JSON output. Test parsing in your preferred language."
      },
      {
        id: "lesson-2-4",
        title: "Advanced Few-Shot Learning and Prompt Templating",
        duration: "4 hours",
        content: "# Advanced Few-Shot Learning\n\nMaster the art of example selection and template creation for maximum effectiveness.\n\n## Example Selection Strategies\n\n### Diversity Over Similarity\n\n**Bad Approach:** All similar examples\n```\nExample 1: \"Great product!\" → Positive\nExample 2: \"Love it!\" → Positive  \nExample 3: \"Amazing!\" → Positive\n```\n\n**Good Approach:** Diverse examples\n```\nExample 1: \"Great product!\" → Positive\nExample 2: \"Terrible quality\" → Negative\nExample 3: \"It's okay, not special\" → Neutral\n```\n\n### Edge Case Coverage\n\n**Include Corner Cases:**\n- Ambiguous inputs\n- Unusual formatting\n- Mixed sentiments\n- Domain-specific jargon\n\n**Example for Sentiment Analysis:**\n```\n\"This camera is great, but the lens cap broke\" → Mixed\n\"Not bad for the price\" → Conditional Positive\n\"Meh 😐\" → Neutral\n\"10/10 would NOT recommend\" → Negative (sarcasm)\n```\n\n### Balanced Representation\n\n**For Classification:**\n- Equal examples per class\n- Prevents bias toward frequent labels\n- Improves minority class performance\n\n**Example:**\n```\n2 Positive examples\n2 Negative examples\n2 Neutral examples\n= Balanced 6-shot learning\n```\n\n## Prompt Templating\n\n### Dynamic Prompt Templates\n\n**Template Structure:**\n```python\ntemplate = \"\"\"\nRole: {role}\nTask: {task}\n\nExamples:\n{examples}\n\nNow analyze:\n{input}\n\nOutput format: {format}\n\"\"\"\n\n# Usage\nprompt = template.format(\n  role=\"Senior Data Analyst\",\n  task=\"Extract key metrics\",\n  examples=example_string,\n  input=user_data,\n  format=\"JSON\"\n)\n```\n\n### Template Libraries\n\n**Build Reusable Templates:**\n\n```python\nTEMPLATES = {\n  'sentiment': \"Classify sentiment: {text}\\nSentiment:\",\n  'summarize': \"Summarize in {words} words:\\n{text}\",\n  'extract': \"Extract {entity_type} from:\\n{text}\",\n  'translate': \"Translate to {lang}:\\n{text}\"\n}\n\ndef get_prompt(template_name, **kwargs):\n  return TEMPLATES[template_name].format(**kwargs)\n```\n\n### Conditional Templates\n\n**Task-Specific Logic:**\n```python\ndef build_prompt(task_type, data):\n  if task_type == 'short':\n    return f\"Briefly: {data}\"\n  elif task_type == 'detailed':\n    examples = load_examples(task_type)\n    return f\"{examples}\\n\\nNow analyze: {data}\"\n```\n\n## Optimizing Prompt Length\n\n### Token Budget Management\n\n**Strategy 1: Example Compression**\n```\n# Verbose (150 tokens)\nInput: \"The customer service was absolutely terrible\"\nOutput: \"Sentiment: Negative, Confidence: High, Aspect: Service\"\n\n# Compressed (80 tokens)\nIn: \"terrible customer service\"\nOut: \"NEG|service|0.95\"\n```\n\n**Strategy 2: Selective Examples**\n- Start with 5 examples\n- Measure performance\n- Remove least informative example\n- Repeat until optimal\n\n**Strategy 3: Example Rotation**\n- Maintain example bank\n- Select most relevant for each query\n- Use semantic similarity for selection\n\n### Cost-Performance Analysis\n\n**Calculate ROI:**\n```\nCost = (input_tokens + output_tokens) × price_per_token\nPerformance = accuracy_metric\nROI = Performance / Cost\n```\n\n**Optimization Process:**\n1. Baseline: Zero-shot (cheapest)\n2. Add examples incrementally\n3. Plot performance vs. cost\n4. Find optimal point\n\n## Advanced Few-Shot Patterns\n\n### Chain-of-Thought Few-Shot\n\n**Show Reasoning in Examples:**\n```\nQ: John has 15 apples, gives 4 to Mary. How many left?\nThought: Start with 15, subtract 4\nA: 11\n\nQ: Sarah has 23 candies, eats 7, buys 12 more. Total?\nThought: 23 - 7 = 16, then 16 + 12 = 28\nA: 28\n\nQ: [New problem]\n```\n\n### Contrastive Examples\n\n**Show Good vs. Bad:**\n```\n❌ Bad: \"Write code\"\n✅ Good: \"Write a Python function that validates email addresses using regex\"\n\n❌ Bad: \"Summarize article\"\n✅ Good: \"Summarize this medical research article in 3 bullet points for healthcare professionals\"\n\nNow improve: [User's vague prompt]\n```\n\n### Meta-Learning Examples\n\n**Teach Pattern Recognition:**\n```\nThese prompts get good results:\n1. Specific task + context + format\n2. Role definition + examples + constraints\n3. Step-by-step instructions + validation criteria\n\nAnalyze why this prompt works: [Prompt]\n```\n\n## A/B Testing Prompts\n\n### Experimental Design\n\n**Version A:**\n```\nClassify sentiment:\nReview: {text}\nSentiment:\n```\n\n**Version B:**\n```\nYou are a sentiment expert.\n\nExamples:\n[3 examples]\n\nReview: {text}\nSentiment (Positive/Negative/Neutral):\n```\n\n### Metrics to Track\n- Accuracy / F1 Score\n- Latency (response time)\n- Cost per request\n- User satisfaction (if applicable)\n\n### Statistical Significance\n```python\nfrom scipy import stats\n\n# Compare two prompt versions\nversion_a_scores = [0.85, 0.87, 0.86, ...]\nversion_b_scores = [0.90, 0.91, 0.89, ...]\n\nt_stat, p_value = stats.ttest_ind(version_a_scores, version_b_scores)\n\nif p_value < 0.05:\n  print(\"Version B is significantly better\")\n```\n\n## Prompt Version Control\n\n### Git-Based Workflow\n\n```bash\n# Track prompt changes\ngit add prompts/sentiment_v2.txt\ngit commit -m \"feat: add contrastive examples to sentiment prompt\"\ngit tag v2.1.0\n```\n\n### Changelog Format\n```markdown\n## v2.1.0 - 2025-01-15\n### Added\n- 3 contrastive examples for edge cases\n- Explicit output format specification\n\n### Changed\n- Simplified role description\n- Reduced from 6 to 4 examples\n\n### Performance\n- Accuracy: 0.82 → 0.89 (+8.5%)\n- Cost: $0.015 → $0.012 (-20%)\n```\n\n### Rollback Strategy\n```python\nPROMPT_VERSIONS = {\n  'v1.0': \"...\",\n  'v2.0': \"...\",\n  'v2.1': \"...\"\n}\n\n# Easy rollback if v2.1 underperforms\ncurrent_prompt = PROMPT_VERSIONS['v2.0']\n```",
        keyPoints: [
          "Diverse examples outperform similar ones",
          "Include edge cases and corner scenarios",
          "Template systems enable reusability and consistency",
          "Token optimization balances cost and performance",
          "A/B testing validates prompt improvements"
        ],
        handsOnExercise: "Create a prompt template library with 5 reusable templates. A/B test two few-shot example sets and measure accuracy difference."
      },
      {
        id: "lesson-2-5",
        title: "Cross-Model Prompting Best Practices",
        duration: "3 hours",
        content: "# Cross-Model Prompting\n\nDifferent models require different prompting approaches. Learn to adapt effectively.\n\n## Model-Specific Characteristics\n\n### GPT Models (OpenAI)\n\n**Strengths:**\n- Follows detailed instructions well\n- Strong at creative tasks\n- Good with structured output\n\n**Prompting Tips:**\n- Be explicit about format requirements\n- Use system messages for persistent context\n- Temperature 0.7-1.0 for creative tasks\n\n**Example:**\n```\nSystem: You are a technical writer.\n\nUser: Write API documentation for:\n[function signature]\n\nFormat:\n## Description\n## Parameters\n## Returns\n## Example\n```\n\n### Claude (Anthropic)\n\n**Strengths:**\n- Excellent at nuanced analysis\n- Strong safety guardrails\n- Verbose by default\n\n**Prompting Tips:**\n- Ask for conciseness if needed: \"Be brief\"\n- Leverages XML tags naturally\n- Excels at long-form content\n\n**Example:**\n```\n<instruction>Analyze this contract</instruction>\n<document>[contract]</document>\n<format>Bullet points only</format>\n<focus>Risk factors</focus>\n```\n\n### Llama Models (Meta)\n\n**Strengths:**\n- Good multilingual capabilities\n- Fast inference\n- Customizable\n\n**Prompting Tips:**\n- More instruction-following if fine-tuned\n- May need more explicit examples\n- Test different prompt formats\n\n**Example:**\n```\n### Instruction\nTranslate to Spanish\n\n### Input\n[English text]\n\n### Response\n```\n\n### Gemini (Google)\n\n**Strengths:**\n- Massive context window (1M tokens)\n- Strong multimodal capabilities\n- Fast processing\n\n**Prompting Tips:**\n- Leverage full documents without chunking\n- Native image + text understanding\n- Good at factual tasks\n\n**Example:**\n```\nAnalyze this entire research paper:\n[paste full 50-page PDF]\n\nProvide:\n1. Executive summary\n2. Methodology critique\n3. Key findings\n```\n\n## Adapting Prompts Across Models\n\n### Universal Prompt Pattern\n\n**Core Structure:**\n```\n1. Role/Context\n2. Task description\n3. Input data\n4. Output format\n5. Constraints\n```\n\n**Works across all models with minor adjustments.**\n\n### Model-Specific Adjustments\n\n**GPT Optimization:**\n```python\ndef adapt_for_gpt(base_prompt):\n  return f\"\"\"\nSystem: {base_prompt['role']}\n\nUser: {base_prompt['task']}\n\nInput:\n{base_prompt['data']}\n\nFormat: {base_prompt['format']}\n\"\"\"\n```\n\n**Claude Optimization:**\n```python\ndef adapt_for_claude(base_prompt):\n  return f\"\"\"\n<role>{base_prompt['role']}</role>\n<task>{base_prompt['task']}</task>\n<input>{base_prompt['data']}</input>\n<format>{base_prompt['format']}</format>\n\"\"\"\n```\n\n**Llama Optimization:**\n```python\ndef adapt_for_llama(base_prompt):\n  return f\"\"\"\n### Role\n{base_prompt['role']}\n\n### Task  \n{base_prompt['task']}\n\n### Input\n{base_prompt['data']}\n\n### Format\n{base_prompt['format']}\n\n### Response\n\"\"\"\n```\n\n## Handling Model Sensitivities\n\n### Content Filtering\n\n**GPT:** Moderate filtering\n- Refuses harmful/illegal requests\n- Sometimes overly cautious\n\n**Claude:** Strong safety focus\n- Extensive refusal training\n- May decline edge cases\n\n**Workaround for legitimate uses:**\n```\nContext: This is for educational cybersecurity training.\nTask: Explain how SQL injection works.\nPurpose: Help developers write secure code.\n```\n\n### Instruction Following\n\n**GPT-4:** Excellent\n- Follows complex multi-step instructions\n- Rarely deviates from format\n\n**GPT-3.5:** Good\n- May miss subtle instructions\n- Occasionally skips steps\n\n**Claude:** Excellent but verbose\n- Follows instructions precisely\n- May add extra explanation\n\n**Llama:** Variable\n- Depends on fine-tuning\n- Test instruction adherence\n\n### Hallucination Tendencies\n\n**All models hallucinate, but differently:**\n\n**GPT:** Confident hallucinations\n- States false facts assertively\n- Mitigation: Ask for sources\n\n**Claude:** Admits uncertainty more\n- Says \"I don't know\" when unsure\n- Mitigation: Still verify facts\n\n**Mitigation Strategy:**\n```\nIf you're unsure, say \"I don't have enough information\" rather than guessing.\n\nFor factual claims, cite sources or note uncertainty.\n```\n\n## Prompt Versioning Strategy\n\n### Multi-Model Prompt Registry\n\n**Structure:**\n```python\nPROMPTS = {\n  'summarize': {\n    'base': \"Summarize: {text}\",\n    'gpt': \"Provide a concise summary: {text}\",\n    'claude': \"<task>Summarize briefly</task><text>{text}</text>\",\n    'llama': \"### Summarize\\n{text}\\n### Summary\"\n  }\n}\n\ndef get_prompt(task, model, **kwargs):\n  template = PROMPTS[task].get(model) or PROMPTS[task]['base']\n  return template.format(**kwargs)\n```\n\n### Fallback Chain\n\n**If primary model fails:**\n```python\nMODEL_PRIORITY = ['gpt-4', 'claude', 'gpt-3.5', 'llama']\n\nfor model in MODEL_PRIORITY:\n  try:\n    prompt = get_prompt(task, model, data=data)\n    result = call_model(model, prompt)\n    if validate(result):\n      return result\n  except Exception as e:\n    log_error(model, e)\n    continue\n```\n\n## Testing Across Models\n\n### Benchmark Suite\n\n```python\nTEST_CASES = [\n  {\"input\": \"...\", \"expected\": \"...\"},\n  # ... more cases\n]\n\nresults = {}\nfor model in ['gpt-4', 'claude', 'llama']:\n  scores = []\n  for case in TEST_CASES:\n    prompt = adapt_prompt(case['input'], model)\n    output = call_model(model, prompt)\n    score = evaluate(output, case['expected'])\n    scores.append(score)\n  results[model] = np.mean(scores)\n```\n\n### Model Selection Logic\n\n**Decision Framework:**\n```python\ndef select_model(task_type, context_size, budget):\n  if context_size > 100000:\n    return 'gemini'  # Largest context\n  elif task_type == 'creative':\n    return 'gpt-4'   # Best creative\n  elif task_type == 'analysis':\n    return 'claude'  # Best analytical\n  elif budget == 'low':\n    return 'llama'   # Self-hosted\n  else:\n    return 'gpt-3.5' # Balanced default\n```",
        keyPoints: [
          "Each model family has unique strengths and prompting styles",
          "GPT uses system messages, Claude prefers XML, Llama uses markdown",
          "Adapt base prompts to model-specific formats",
          "Build prompt registries for multi-model deployment",
          "Test across models to find optimal choice per task"
        ],
        handsOnExercise: "Take one prompt and adapt it for GPT, Claude, and Llama. Test all three versions and compare quality, cost, and speed."
      }
    ]
  },
  {
    id: "module-3",
    title: "Intermediate Prompting Strategies",
    description: "Explore chain-of-thought prompting, self-consistency, role-playing, and safety considerations.",
    duration: "16-20 hours",
    lessons: [
      {
        id: "lesson-3-1",
        title: "Advanced Chain-of-Thought and Self-Consistency",
        duration: "5 hours",
        content: "# Advanced Chain-of-Thought Prompting\n\nMaster sophisticated reasoning techniques for complex problem-solving.\n\n## Chain-of-Thought Fundamentals\n\n**The Magic Phrase:** \"Let's think step by step\"\n\nThis simple addition can improve accuracy by 40%+ on reasoning tasks.\n\n### When CoT Works Best\n- Math and logic problems\n- Multi-step planning\n- Causal reasoning\n- Complex analysis\n\n### Basic CoT Pattern\n```\nProblem: A store had 20 apples. They sold 12 in the morning and received a shipment of 15 in the afternoon. How many do they have now?\n\nLet's think step by step:\n1. Started with: 20 apples\n2. Sold in morning: 20 - 12 = 8 apples remaining\n3. Received shipment: 8 + 15 = 23 apples\n\nAnswer: 23 apples\n```\n\n## Self-Consistency Implementation\n\n### The Technique\nGenerate multiple independent reasoning paths, then select the most common answer through majority voting.\n\n### Why It Works\n- Reduces impact of random errors\n- Increases confidence in correct answers\n- Reveals ambiguity in problems\n\n### Implementation in Code\n\n```python\ndef self_consistency_prompt(problem, num_samples=5):\n  prompt = f\"{problem}\\n\\nLet's think step by step:\"\n  \n  answers = []\n  for i in range(num_samples):\n    response = llm.generate(prompt, temperature=0.7)\n    answer = extract_final_answer(response)\n    answers.append(answer)\n  \n  # Majority voting\n  from collections import Counter\n  vote_counts = Counter(answers)\n  final_answer = vote_counts.most_common(1)[0][0]\n  confidence = vote_counts[final_answer] / num_samples\n  \n  return final_answer, confidence\n```\n\n### Example Results\n```\nSample 1: 23 apples ✓\nSample 2: 23 apples ✓\nSample 3: 27 apples ✗\nSample 4: 23 apples ✓\nSample 5: 23 apples ✓\n\nFinal Answer: 23 apples (80% confidence)\n```\n\n## Prompt Chaining\n\n### Sequential Problem Decomposition\n\nBreak complex tasks into a series of simpler prompts where each output feeds the next input.\n\n**Example: Research Paper Summary**\n\n**Chain Step 1: Extract Key Information**\n```\nFrom this research paper, extract:\n1. Main hypothesis\n2. Methodology\n3. Key findings\n4. Limitations\n\n[Paper text]\n```\n\n**Chain Step 2: Analyze Quality**\n```\nBased on this extracted information:\n{output_from_step_1}\n\nEvaluate:\n- Methodology rigor (1-10)\n- Sample size adequacy\n- Potential biases\n```\n\n**Chain Step 3: Generate Summary**\n```\nUsing this analysis:\n{output_from_step_2}\n\nWrite a 200-word executive summary for non-experts.\n```\n\n### Benefits of Chaining\n- Each step is simpler and more focused\n- Easier to debug and optimize\n- Can use different models for different steps\n- Intermediate outputs provide transparency\n\n### Implementation Pattern\n\n```python\nclass PromptChain:\n  def __init__(self, steps):\n    self.steps = steps  # List of prompt templates\n  \n  def execute(self, initial_input):\n    context = {\"input\": initial_input}\n    \n    for step in self.steps:\n      prompt = step['template'].format(**context)\n      output = llm.generate(prompt)\n      context[step['output_key']] = output\n    \n    return context\n\n# Usage\nchain = PromptChain([\n  {\"template\": \"Summarize: {input}\", \"output_key\": \"summary\"},\n  {\"template\": \"Key points from: {summary}\", \"output_key\": \"points\"},\n  {\"template\": \"Action items from: {points}\", \"output_key\": \"actions\"}\n])\n\nresult = chain.execute(long_document)\nprint(result['actions'])\n```\n\n## Decomposition Strategies\n\n### Least-to-Most Prompting\n\nSolve simpler sub-problems first, then use those solutions for harder problems.\n\n**Example: Complex Math Problem**\n```\nOriginal: \"Calculate the compound interest on $10,000 at 5% annual rate for 3 years, compounded quarterly.\"\n\nStep 1 (Simpler): \"What is the quarterly interest rate if annual rate is 5%?\"\nAnswer: 1.25%\n\nStep 2 (Build on Step 1): \"How many compounding periods in 3 years if compounded quarterly?\"\nAnswer: 12 periods\n\nStep 3 (Final): \"Using r=1.25% and n=12, calculate: 10000 × (1 + 0.0125)^12\"\nAnswer: $11,607.55\n```\n\n### Problem Reduction\n\nTransform a complex problem into a known, solvable pattern.\n\n```\nComplex: \"How would introducing a 4-day work week affect employee productivity in tech companies?\"\n\nReduce to known patterns:\n1. \"What factors affect employee productivity?\" (Known research)\n2. \"How does work-life balance impact productivity?\" (Known research)\n3. \"What are case studies of 4-day weeks?\" (Known data)\n4. Synthesize answers → Answer original question\n```\n\n## Advanced CoT Patterns\n\n### Analogical Reasoning CoT\n\n```\nProblem: How should a startup allocate a $500K seed round?\n\nLet's use analogies:\n\nAnalogy 1: Like building a house\n- Foundation (infrastructure): 30%\n- Frame (core product): 40%  \n- Finishing (marketing): 20%\n- Reserve (contingency): 10%\n\nAnalogy 2: Like a chess game\n- Opening (setup): 25%\n- Mid-game (growth): 50%\n- End-game (scale): 15%\n- Reserve: 10%\n\nSynthesis:\n- Infrastructure/Setup: ~30%\n- Core Product/Growth: ~45%\n- Marketing/Scale: ~15%\n- Reserve: ~10%\n```\n\n### Counterfactual CoT\n\n```\nDecision: Should we expand to European markets now?\n\nLet's consider what happens if we do AND if we don't:\n\nScenario A: We expand\n- Upside: €2M potential revenue, brand recognition\n- Risks: €500K costs, team distraction, regulatory complexity\n- Likelihood: 60% success rate\n\nScenario B: We don't expand  \n- Upside: Focus on US market, strengthen core\n- Risks: Competitors take EU market, missed opportunity\n- Likelihood: 70% US success rate\n\nExpected value:\nA: 0.6 × €2M - €500K = €700K\nB: 0.7 × €1M = €700K\n\nConclusion: Similar EV, but B has less risk → Wait 6 months\n```\n\n## Debugging CoT Prompts\n\n### Common Failure Modes\n\n**1. Skipping Steps**\nBad: \"The answer is 23\"\nGood: \"Starting with 20, minus 12 equals 8, plus 15 equals 23\"\n\n**2. Incorrect Logic**\n- Ask model to verify each step\n- Use self-critique: \"Check your work\"\n\n**3. Ambiguous Reasoning**\n- Make steps more explicit\n- Number each reasoning step\n\n### Testing Framework\n\n```python\ndef test_cot_quality(problem, response):\n  checks = {\n    'has_steps': '1.' in response or 'Step' in response,\n    'shows_math': any(op in response for op in ['+', '-', '×', '÷']),\n    'has_conclusion': 'therefore' in response.lower() or 'answer:' in response.lower(),\n    'step_count': len([s for s in response.split('\\n') if s.strip()])\n  }\n  \n  quality_score = sum(checks.values()) / len(checks)\n  return quality_score, checks\n```\n\n## Performance Metrics\n\n**CoT Improvements (GPT-4):**\n- Math word problems: +18% accuracy\n- Logic puzzles: +25% accuracy\n- Multi-step planning: +31% accuracy\n- Code debugging: +22% success rate\n\n**Self-Consistency Improvements:**\n- With 5 samples: +12% over single CoT\n- With 10 samples: +15% over single CoT\n- Diminishing returns beyond 10 samples",
        keyPoints: [
          "Self-consistency uses majority voting across multiple reasoning paths",
          "Prompt chaining breaks complex tasks into sequential steps",
          "Least-to-most prompting solves simple sub-problems first",
          "Problem decomposition transforms complexity into known patterns",
          "CoT can improve accuracy by 20-40% on reasoning tasks"
        ],
        handsOnExercise: "Implement self-consistency with 5 samples for a logic puzzle. Compare single-shot accuracy vs. majority-voted answer."
      },
      {
        id: "lesson-3-2",
        title: "Tree of Thoughts: Exploring Multiple Reasoning Paths",
        duration: "4 hours",
        content: "# Tree of Thoughts (ToT) Framework\n\nSystematically explore and evaluate multiple reasoning strategies before converging on the best solution.\n\n## Core Concept\n\nUnlike linear Chain-of-Thought, ToT creates a tree structure where the model explores multiple branches and evaluates which path leads to the best solution.\n\n### Linear CoT vs. Tree of Thoughts\n\n**Chain of Thought (Linear):**\n```\nProblem → Step 1 → Step 2 → Step 3 → Answer\n```\n\n**Tree of Thoughts (Branching):**\n```\nProblem → ┬→ Approach A → ┬→ A1 → Evaluate\n          │               └→ A2 → Evaluate\n          ├→ Approach B → → B1 → Evaluate\n          └→ Approach C → → C1 → Evaluate\n                               ↓\n                         Select Best\n```\n\n## ToT Implementation\n\n### Step 1: Generate Multiple Approaches\n\n```\nProblem: Design a caching strategy for a social media feed with 10M users.\n\nGenerate 3 fundamentally different architectural approaches:\n\nApproach 1: [Think about first approach]\nApproach 2: [Think about second approach]\nApproach 3: [Think about third approach]\n```\n\n**Model Output:**\n```\nApproach 1: CDN-based edge caching\n- Cache full feeds at CDN nodes\n- Pros: Low latency, scales globally\n- Cons: Stale data, high CDN costs\n\nApproach 2: In-memory cache (Redis) with write-through\n- Cache user feeds in Redis clusters\n- Pros: Real-time updates, cost-effective\n- Cons: Memory constraints, cache invalidation complexity\n\nApproach 3: Materialized views with lazy loading\n- Pre-compute feeds, load on demand\n- Pros: Balanced cost/performance\n- Cons: Computation overhead, partial staleness\n```\n\n### Step 2: Explore Each Branch\n\n```\nFor Approach 2 (In-memory cache), explore implementation details:\n\nBranch 2.1: Cluster sharding strategy\nBranch 2.2: Eviction policy\nBranch 2.3: Failover mechanism\n\nEvaluate each branch for:\n- Scalability\n- Reliability  \n- Cost\n```\n\n### Step 3: Evaluate and Prune\n\n```\nEvaluation Criteria:\n1. Meets 99.9% uptime SLA? (Yes/No)\n2. Scales to 10M users? (Yes/No)\n3. Monthly cost under $50K? (Yes/No)\n4. Implementation time under 2 months? (Yes/No)\n\nApproach 1 (CDN): No (cost > $50K) ❌\nApproach 2 (Redis): Yes to all ✓\nApproach 3 (Materialized): No (time > 2 months) ❌\n\nWinner: Approach 2\n```\n\n### Step 4: Refine Winner\n\n```\nNow that we've selected Approach 2 (Redis caching), refine the design:\n\n1. Sharding: Hash-based user ID sharding across 20 Redis nodes\n2. Eviction: LRU with 1-hour TTL\n3. Failover: Read replicas with automatic promotion\n4. Monitoring: Cache hit rate > 90% threshold\n\nFinal Architecture: [Detailed design]\n```\n\n## ToT Prompt Template\n\n```python\nTOT_TEMPLATE = \"\"\"\n# Problem\n{problem}\n\n# Step 1: Generate Approaches\nPropose {n} fundamentally different approaches to solve this.\nFor each approach, briefly describe:\n- Core strategy\n- Main advantages\n- Main drawbacks\n\n# Step 2: Detailed Exploration\nFor each approach, explore:\n{exploration_aspects}\n\n# Step 3: Evaluation\nEvaluate each approach against:\n{evaluation_criteria}\n\nScore each approach (1-10) on each criterion.\n\n# Step 4: Selection\nSelect the highest-scoring approach and explain why.\n\n# Step 5: Refinement\nProvide a detailed implementation plan for the selected approach.\n\"\"\"\n\ndef tree_of_thoughts(problem, n_approaches=3, criteria=[]):\n  prompt = TOT_TEMPLATE.format(\n    problem=problem,\n    n=n_approaches,\n    exploration_aspects=\"\\n\".join(f\"- {a}\" for a in aspects),\n    evaluation_criteria=\"\\n\".join(f\"- {c}\" for c in criteria)\n  )\n  return llm.generate(prompt)\n```\n\n## Use Cases Where ToT Excels\n\n### 1. Strategic Planning\n**When:** Multiple valid strategies exist, trade-offs unclear\n\n**Example:**\n```\nProblem: Enter Asian market with limited budget\n\nPath A: Partner with local distributor\nPath B: Direct online sales\nPath C: Franchise model\n\n[Explore, evaluate, select]\n```\n\n### 2. Creative Problem Solving\n**When:** No obvious solution, creativity needed\n\n**Example:**\n```\nProblem: Reduce customer churn by 30%\n\nPath A: Gamification loyalty program\nPath B: Predictive intervention\nPath C: Community building features\n\n[Explore, evaluate, select]\n```\n\n### 3. Technical Architecture\n**When:** System design with many architectural choices\n\n**Example:**\n```\nProblem: Real-time analytics dashboard for IoT sensors\n\nPath A: Stream processing (Kafka + Spark)\nPath B: Time-series DB (InfluxDB)\nPath C: Serverless (Lambda + DynamoDB)\n\n[Explore, evaluate, select]\n```\n\n### 4. Research Synthesis\n**When:** Multiple theories or perspectives need integration\n\n**Example:**\n```\nProblem: Explain declining birth rates in developed nations\n\nPath A: Economic factors (cost of living, wages)\nPath B: Cultural shifts (career focus, individualism)\nPath C: Policy impacts (parental leave, childcare)\n\n[Explore, evaluate, synthesize]\n```\n\n## Advanced ToT Techniques\n\n### Beam Search ToT\n\nKeep top-k branches at each level instead of exploring all.\n\n```python\ndef beam_search_tot(problem, beam_width=3, depth=3):\n  candidates = [(problem, 0)]  # (state, score)\n  \n  for level in range(depth):\n    next_candidates = []\n    \n    for state, score in candidates:\n      # Generate new branches\n      branches = generate_branches(state)\n      \n      # Evaluate each branch\n      for branch in branches:\n        branch_score = evaluate(branch)\n        next_candidates.append((branch, score + branch_score))\n    \n    # Keep only top-k\n    candidates = sorted(next_candidates, key=lambda x: x[1], reverse=True)[:beam_width]\n  \n  return candidates[0]  # Return best path\n```\n\n### Self-Evaluation ToT\n\nModel evaluates its own branches without external criteria.\n\n```\nFor each approach, rate your own confidence (1-10) and explain:\n- What could go wrong?\n- What assumptions are you making?\n- How robust is this to edge cases?\n\nThis self-critique often reveals hidden flaws.\n```\n\n### Hybrid ToT + CoT\n\nCombine tree exploration with chain reasoning within each branch.\n\n```\nStep 1: ToT to select approach\nStep 2: CoT to implement selected approach step-by-step\nStep 3: ToT to handle encountered obstacles\n```\n\n## Comparing Reasoning Strategies\n\n**When to use each:**\n\n**Standard Prompting:**\n- Simple, well-defined tasks\n- Single correct answer\n- Speed priority\n\n**Chain-of-Thought:**\n- Multi-step reasoning\n- Math and logic\n- Verification needed\n\n**Tree of Thoughts:**\n- Multiple valid approaches\n- Trade-off analysis required\n- Strategic decisions\n- Creative problem-solving\n\n**Self-Consistency:**\n- High-stakes decisions\n- Noisy reasoning paths\n- Need confidence estimation\n\n## Performance Metrics\n\n**ToT vs CoT (GPT-4):**\n- Creative tasks: ToT +35% quality\n- Strategic planning: ToT +28% success\n- Game playing: ToT +41% win rate\n- Standard math: CoT faster, similar accuracy\n\n**Trade-offs:**\n- ToT: 3-5x more tokens/cost than CoT\n- ToT: 2-4x longer latency than CoT\n- ToT: Significantly better on open-ended problems",
        keyPoints: [
          "ToT explores multiple reasoning branches in parallel",
          "Systematic evaluation selects optimal solution path",
          "Excels at strategic planning and creative problem-solving",
          "Beam search limits exploration to top-k branches",
          "3-5x cost increase but 30-40% quality improvement on complex tasks"
        ],
        handsOnExercise: "Use ToT to design a solution for a complex system design problem. Generate 3 approaches, evaluate against 4 criteria, and refine the winner."
      },
      {
        id: "lesson-3-3",
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
      },
      {
        id: "lesson-3-4",
        title: "Mastering Context and Creativity",
        duration: "4 hours",
        content: "# Context Management and Creativity Control\n\nLearn to manage long conversations and fine-tune model creativity for optimal outputs.\n\n## Advanced Context Management\n\n### The Context Window Challenge\n\n**Problem:** Models have finite memory (context windows)\n- GPT-4: 128K tokens (~96,000 words)\n- Claude 3.5: 200K tokens (~150,000 words)\n- Gemini 1.5 Pro: 1M tokens (~750,000 words)\n\n**Once exceeded:** Model \"forgets\" oldest information\n\n### Context Compression Strategies\n\n#### 1. Progressive Summarization\n\nAs conversation grows, periodically summarize and compress.\n\n```python\ndef manage_context(messages, max_tokens=100000):\n  current_tokens = count_tokens(messages)\n  \n  if current_tokens > max_tokens:\n    # Summarize older messages\n    old_messages = messages[:len(messages)//2]\n    summary = summarize(old_messages)\n    \n    # Keep summary + recent messages\n    messages = [\n      {\"role\": \"system\", \"content\": f\"Previous conversation summary: {summary}\"},\n      *messages[len(messages)//2:]\n    ]\n  \n  return messages\n```\n\n**Example:**\n```\nOriginal (10,000 tokens):\nUser: Tell me about renewable energy\nAssistant: [Long explanation about solar, wind, hydro...]\nUser: What about costs?\nAssistant: [Detailed cost breakdown...]\n...[20 more exchanges]\n\nCompressed (2,000 tokens):\nSummary: Discussion covered renewable energy types (solar, wind, hydro), cost comparisons, and implementation challenges. User interested in residential solar.\n\n[Keep last 5 exchanges]\n```\n\n#### 2. Sliding Window with Overlap\n\nProcess long documents in chunks with overlapping sections.\n\n```python\ndef sliding_window_analysis(document, window_size=3000, overlap=500):\n  chunks = []\n  start = 0\n  \n  while start < len(document):\n    end = min(start + window_size, len(document))\n    chunk = document[start:end]\n    \n    analysis = llm.analyze(chunk)\n    chunks.append(analysis)\n    \n    start += window_size - overlap  # Overlap prevents missing info\n  \n  # Synthesize chunk analyses\n  final = llm.synthesize(chunks)\n  return final\n```\n\n#### 3. Hierarchical Context\n\nOrganize context in layers of abstraction.\n\n```\nLevel 1 (Always included): Core system prompt, critical facts\nLevel 2 (Recent): Last 10 messages\nLevel 3 (Relevant): Retrieved based on current topic\nLevel 4 (Archive): Summarized historical context\n\nTotal tokens: L1(500) + L2(5000) + L3(3000) + L4(1500) = 10,000\n```\n\n#### 4. Semantic Retrieval\n\nFor very long conversations, retrieve only relevant context.\n\n```python\nimport numpy as np\nfrom sklearn.metrics.pairwise import cosine_similarity\n\ndef retrieve_relevant_context(query, message_history, top_k=5):\n  # Embed all messages\n  message_embeddings = [embed(msg) for msg in message_history]\n  query_embedding = embed(query)\n  \n  # Compute similarity\n  similarities = cosine_similarity([query_embedding], message_embeddings)[0]\n  \n  # Get top-k most relevant\n  top_indices = np.argsort(similarities)[-top_k:]\n  relevant_messages = [message_history[i] for i in top_indices]\n  \n  return relevant_messages\n```\n\n### Handling Ambiguity and Uncertainty\n\n#### Disambiguation Prompts\n\n**When input is ambiguous:**\n```\nUser: \"Book a table for 4\"\n\nAmbiguous context. Before proceeding, clarify:\n1. Which restaurant? (if multiple in context)\n2. What date and time?\n3. Any dietary restrictions or preferences?\n\nRespond with clarifying questions, then make reservation.\n```\n\n#### Confidence-Aware Responses\n\n```\nIf you're certain (>90% confidence):\n- State directly: \"The answer is X\"\n\nIf moderately certain (60-90%):\n- Qualify: \"Based on the information provided, it's likely X\"\n\nIf uncertain (<60%):\n- Admit: \"I don't have enough information to answer confidently. Here's what I know: [partial info]. To answer fully, I'd need: [requirements]\"\n```\n\n## Controlling Creativity with Temperature\n\n### Temperature Scale (0.0 - 2.0)\n\n**Temperature = 0.0:** Deterministic\n```\nPrompt: \"Complete: The capital of France is\"\nOutput: \"Paris\" (always)\nUse for: Facts, code, math\n```\n\n**Temperature = 0.3:** Mostly consistent\n```\nPrompt: \"Write a product description for a water bottle\"\nOutput: Professional, safe, consistent tone\nUse for: Business content, technical writing\n```\n\n**Temperature = 0.7:** Balanced (default)\n```\nPrompt: \"Write a short story opening\"\nOutput: Natural variation, coherent\nUse for: General content, conversation\n```\n\n**Temperature = 1.0:** Creative\n```\nPrompt: \"Brainstorm unusual product ideas\"\nOutput: Diverse, unexpected ideas\nUse for: Brainstorming, creative writing\n```\n\n**Temperature = 1.5+:** Highly creative (risky)\n```\nPrompt: \"Create a surreal poem\"\nOutput: Very unusual, sometimes incoherent\nUse for: Experimental art, idea generation\n```\n\n### Temperature by Task Type\n\n**Factual Tasks (T=0.0-0.2):**\n- Answering questions\n- Data extraction\n- Code generation\n- Mathematical problems\n\n**Professional Content (T=0.3-0.5):**\n- Business writing\n- Documentation\n- Reports and summaries\n- Email drafting\n\n**Creative Tasks (T=0.7-1.2):**\n- Story writing\n- Poetry\n- Brainstorming\n- Art descriptions\n\n**Experimental (T=1.3-2.0):**\n- Abstract art\n- Surreal content\n- Idea mutation\n- Style experimentation\n\n### Advanced Sampling Parameters\n\n#### Dynamic Temperature\n\nAdjust temperature based on context.\n\n```python\ndef adaptive_temperature(task_type, user_preference):\n  base_temp = {\n    'factual': 0.1,\n    'professional': 0.4,\n    'creative': 0.9,\n    'experimental': 1.3\n  }[task_type]\n  \n  # Adjust based on user feedback\n  if user_preference == 'more_creative':\n    return min(base_temp + 0.3, 2.0)\n  elif user_preference == 'more_focused':\n    return max(base_temp - 0.3, 0.0)\n  \n  return base_temp\n```\n\n#### Top-p (Nucleus Sampling)\n\nLimit token selection to cumulative probability p.\n\n**Top-p = 0.1:** Very focused (top 10% likely tokens)\n- Safest outputs\n- Predictable\n- Less creative\n\n**Top-p = 0.9:** Balanced (default)\n- Good variety\n- Filters unlikely tokens\n- Coherent outputs\n\n**Top-p = 1.0:** All tokens considered\n- Maximum diversity\n- Risk of incoherence\n\n#### Combining Temperature + Top-p\n\n**Conservative (Factual):**\n```python\nsettings = {\n  'temperature': 0.2,\n  'top_p': 0.1,\n  'frequency_penalty': 0.0\n}\n```\n\n**Balanced (General):**\n```python\nsettings = {\n  'temperature': 0.7,\n  'top_p': 0.9,\n  'frequency_penalty': 0.3\n}\n```\n\n**Creative (Exploration):**\n```python\nsettings = {\n  'temperature': 1.1,\n  'top_p': 0.95,\n  'frequency_penalty': 0.7,\n  'presence_penalty': 0.5\n}\n```\n\n### Preventing Repetition\n\n#### Frequency Penalty (0.0 - 2.0)\n\nReduces probability of tokens based on how often they've appeared.\n\n```python\n# Without frequency penalty (repetitive)\nOutput: \"The product is great. Great quality. Great price. Great service.\"\n\n# With frequency_penalty=0.8\nOutput: \"The product is excellent. High quality, competitive pricing, and outstanding customer service.\"\n```\n\n#### Presence Penalty (0.0 - 2.0)\n\nEncourages new topics/tokens regardless of frequency.\n\n```python\n# Without presence penalty (stays on topic)\nOutput: \"Solar panels generate electricity. They convert sunlight to power. They reduce energy bills.\"\n\n# With presence_penalty=0.8\nOutput: \"Solar panels generate electricity. Wind turbines offer an alternative. Combining both creates resilient systems.\"\n```\n\n### Practical Creativity Control\n\n**Recipe Generation:**\n```python\n# Low creativity: Traditional recipes\ngenerate_recipe(temp=0.4, top_p=0.7)\n→ \"Classic Spaghetti Carbonara\"\n\n# High creativity: Fusion cuisine\ngenerate_recipe(temp=1.1, top_p=0.95, presence_penalty=0.8)\n→ \"Korean-Italian Kimchi Carbonara Fusion\"\n```\n\n**Code Refactoring:**\n```python\n# Low creativity: Safe, standard patterns\nrefactor_code(temp=0.2, top_p=0.5)\n→ Standard design patterns, well-known libraries\n\n# High creativity: Novel approaches\nrefactor_code(temp=0.8, top_p=0.9)\n→ Creative optimizations, unusual patterns\n```\n\n## Context-Aware Creativity\n\n### Iterative Refinement\n\n```python\ndef creative_iteration(initial_idea, iterations=3):\n  idea = initial_idea\n  \n  for i in range(iterations):\n    # Increase creativity each iteration\n    temp = 0.7 + (i * 0.2)\n    \n    prompt = f\"Build upon this idea with more creativity: {idea}\"\n    idea = llm.generate(prompt, temperature=temp)\n  \n  return idea\n\n# Example\nfinal = creative_iteration(\"A productivity app\")\n→ \"A productivity app\" \n→ \"An AI-powered task manager\" \n→ \"A gamified AI productivity coach with AR integration\"\n```\n\n### Constraint-Based Creativity\n\nMore constraints can increase quality creativity.\n\n```\nGenerate a story with these constraints:\n- Must be exactly 100 words\n- Include these words: quantum, library, midnight\n- Twist ending\n- Noir style\n\n[Temperature=1.0 for creativity within rigid structure]\n```",
        keyPoints: [
          "Progressive summarization manages long conversation context",
          "Sliding windows with overlap prevent information loss",
          "Temperature controls randomness: 0=deterministic, 2=chaotic",
          "Top-p limits token selection to probable candidates",
          "Frequency/presence penalties prevent repetition and encourage diversity"
        ],
        handsOnExercise: "Generate the same content at temperatures 0.2, 0.7, and 1.3. Compare coherence, creativity, and usefulness for different use cases."
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
