export interface BlogPost {
  id: number;
  title: string;
  category: string;
  date: string;
  readTime: string;
  img: string;
  summary: string;
  content: string; // HTML or Markdown format for rich text
}

export interface GardenPost {
  id: number;
  title: string;
  category: string;
  img: string;
  date: string;
  summary: string;
  difficulty: "Easy" | "Medium" | "Hard";
  season: string;
  sunlight: string;
  watering: string;
  tools: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "How I Returned to Tech After 5 Years Away",
    category: "Career Journey",
    date: "Dec 15, 2024",
    readTime: "8 min",
    img: "photo-1499750310107-5fef28a66643",
    summary: "Stepping away from code to focus on family was a beautiful choice, but returning to a fast-evolving tech world was daunting. Here is the exact roadmap and mindset shift that helped me transition back successfully.",
    content: `
      <p>Five years is an eternity in technology. When I stepped away in 2019 to focus on my growing family and teaching physics, React was just introducing Hooks, CSS-in-JS was the dominant paradigm, and AI coding assistants were science fiction. Returning in late 2024 felt like waking up in a different era.</p>
      
      <h3>The Fear of the Blank Canvas</h3>
      <p>The hardest part of returning wasn't the syntax—it was the imposter syndrome. I kept asking myself: <i>Have I forgotten everything? Am I too late? Can I compete with fresh graduates?</i> The key was realizing that while tools change, core problem-solving principles remain constant.</p>

      <blockquote>
        "Your capacity to learn is your most valuable asset, not the specific APIs you've memorized."
      </blockquote>

      <h3>My Three-Step Re-entry Roadmap</h3>
      <p>I structured my learning to avoid burnout and keep momentum:</p>
      <ul>
        <li><strong>Step 1: Solidify the Basics.</strong> I spent two weeks rewriting basic layouts with vanilla CSS and modern JS (ES6+ features I missed). No frameworks, just pure DOM manipulation.</li>
        <li><strong>Step 2: Learn with a Purpose.</strong> Instead of watching endless tutorials, I built one main application: a Pre-order E-commerce Dashboard. This forced me to learn current React, Vite, Tailwind CSS, and state management in a real-world context.</li>
        <li><strong>Step 3: Leverage My Past.</strong> Teaching physics taught me how to break down complex topics. I used this skill to document my learning on social media and build clean UI/UX designs.</li>
      </ul>

      <h3>Key Takeaways</h3>
      <p>If you're planning a return to tech, remember: the community is larger and more supportive than ever. Don't try to learn everything at once. Focus on one modern stack (e.g., Vite + React + Tailwind) and build a complete, production-ready project. Consistency always beats intensity.</p>
    `
  },
  {
    id: 2,
    title: "My Figma to React Workflow (With Real Examples)",
    category: "Frontend",
    date: "Dec 8, 2024",
    readTime: "12 min",
    img: "photo-1542435503-ec7b0b197446",
    summary: "A seamless workflow between design and code is the holy grail of web development. Discover my exact process for translation, token design systems, and responsive layouts.",
    content: `
      <p>Many front-end developers treat Figma designs as rigid specifications, leading to frustration when translation breaks down. Over the years, I've developed a design-to-code workflow that minimizes friction and preserves layout precision.</p>

      <h3>1. Creating the Token System first</h3>
      <p>Before writing a single line of component code, I extract values from Figma into CSS variables or Tailwind configs. This includes:</p>
      <ul>
        <li><strong>Colors:</strong> Primary, secondary, background, text, and border tokens.</li>
        <li><strong>Typography:</strong> Font sizes, line-heights, and weights mapped directly.</li>
        <li><strong>Spacing:</strong> A consistent 4px/8px grid system for padding, margins, and gaps.</li>
      </ul>

      <h3>2. Inspecting Layouts with Auto Layout in Mind</h3>
      <p>If a Figma design uses Auto Layout properly, translation to Flexbox or CSS Grid is almost direct. I analyze the layout directions, wrapping behavior, and distribution of space before coding.</p>

      <pre><code>// Example component structure mapping Figma layout
const Card = ({ title, desc }) => (
  &lt;div className="flex flex-col gap-4 p-6 bg-cream border border-[#E8E0D5] rounded-2xl"&gt;
    &lt;h4 className="font-playfair text-xl font-bold"&gt;{title}&lt;/h4&gt;
    &lt;p className="text-sm text-gray"&gt;{desc}&lt;/p&gt;
  &lt;/div&gt;
);</code></pre>

      <h3>3. Iterative Refinement</h3>
      <p>I develop key components in isolation (using tools like Storybook or a simple dev playground) before assembling them into the main page layouts. This keeps my styling modular and reusable.</p>
    `
  },
  {
    id: 3,
    title: "Teaching Physics Through Storytelling",
    category: "Learning Notes",
    date: "Nov 28, 2024",
    readTime: "6 min",
    img: "photo-1635070041078-e363dbe005cb",
    summary: "Physics equations can seem cold and abstract. By embedding them into stories, metaphors, and real-life scenarios, we can help students truly connect with the science.",
    content: `
      <p>When I was teaching physics in high school, I noticed a pattern: students could memorize formulas like <i>F = ma</i> or <i>v = d/t</i>, but when faced with conceptual questions, they struggled. The formulas lacked a connection to their intuitive understanding of the physical world.</p>

      <h3>The Power of Metaphor</h3>
      <p>To bridge this gap, I began using narrative-driven explanations. Instead of starting with dry definitions of gravitational fields, I told stories of universal attraction, explaining that every object in the universe is constantly, subtly reaching out to pull every other object toward itself.</p>

      <blockquote>
        "Physics isn't about memorizing numbers; it's about learning the rules of the grand theater of reality."
      </blockquote>

      <h3>Case Study: Projectile Motion</h3>
      <p>When introducing projectile motion, we imagined a package dropped from a flying airplane. By telling it from the perspective of the package (experiencing horizontal freedom while being steadily pulled downward by gravity), students visualized the parabolic arc before doing any math. The math then became a tool to calculate what they already understood visually.</p>

      <h3>Conclusion</h3>
      <p>By blending science with creative storytelling, we don't just teach physics—we inspire curiosity. The world becomes a playground of forces and waves, encouraging students to ask *why* things happen, not just *how* to pass the exam.</p>
    `
  },
  {
    id: 4,
    title: "Building a Design System from Scratch as a Solo Dev",
    category: "UI UX",
    date: "Nov 20, 2024",
    readTime: "10 min",
    img: "photo-1561070791-2526d30994b5",
    summary: "Large teams use massive design systems, but solo developers need something lean, flexible, and powerful. Here is how I built a robust design system alone.",
    content: `
      <p>When you are building a product by yourself, speed is crucial. However, without a design system, your codebase will quickly devolve into a spaghetti of custom paddings, inconsistent color codes, and duplicated button structures.</p>

      <h3>Start Small: Define the Core 5</h3>
      <p>For a solo developer, a design system doesn't need 100+ components. Focus on building these five layout building blocks first:</p>
      <ol>
        <li><strong>Buttons:</strong> Primary, Secondary, Link states. Keep them flexible with paddings.</li>
        <li><strong>Input Fields:</strong> Clear focus rings, labels, and error state indicators.</li>
        <li><strong>Card Layouts:</strong> Consistent paddings, shadows, and hover animations.</li>
        <li><strong>Modals/Dialogs:</strong> Reusable overlays with smooth entry animations.</li>
        <li><strong>Spacing Utilities:</strong> A layout grid (e.g., standard gaps of 8px, 16px, 24px, 32px).</li>
      </ol>

      <h3>Document As You Go</h3>
      <p>I maintain a single, dedicated style guide page inside my local environment. Seeing all components side-by-side ensures visual consistency and makes it easy to refactor code blocks without breaking the application layout.</p>
    `
  },
  {
    id: 5,
    title: "What AI Tools Actually Help Me as a Creator",
    category: "AI",
    date: "Nov 10, 2024",
    readTime: "7 min",
    img: "photo-1518770660439-4636190af475",
    summary: "AI is surrounded by hype, but what tools actually deliver value? Here is a breakdown of the tools that save me hours of manual design and development time.",
    content: `
      <p>As a freelancer, content creator, and mother, my time is incredibly limited. I cannot afford to spend hours searching for minor syntax errors or manually resizing design assets. Here are the AI tools that have earned a permanent place in my workflow.</p>

      <h3>1. AI Coding Assistants</h3>
      <p>For coding, I use AI to write unit tests, brainstorm refactoring strategies, and generate initial boilerplate layouts. It acts as a patient pair programmer, letting me focus on architecture and aesthetics rather than looking up documentation details.</p>

      <h3>2. Asset & Image Generation</h3>
      <p>When prototyping UI designs, I use AI-generated images to create realistic contexts. Instead of gray boxes or generic stock photos, high-quality generated assets bring the design to life early on, giving a clearer idea of the final aesthetic.</p>

      <h3>3. Writing & Outlining Tools</h3>
      <p>For scripting videos or drafting outline drafts for educational materials, AI helps me overcome writer's block by generating multiple structures that I can then refine with my own words and personal stories.</p>
    `
  },
  {
    id: 6,
    title: "On Productivity as a Mother Who Codes",
    category: "Productivity",
    date: "Oct 30, 2024",
    readTime: "5 min",
    img: "photo-1586717791821-3f44a563fa4c",
    summary: "Balancing motherhood, freelance development, and personal projects requires letting go of traditional productivity advice. Here are my rules for finding focus in short bursts.",
    content: `
      <p>Most productivity advice is written for people with uninterrupted 8-hour workdays. When you are caring for a toddler, your day is structured in fragments—nap times, quiet play periods, and late-night blocks. Finding productivity in these gaps is an art.</p>

      <h3>The Myth of the 'Deep Work' Block</h3>
      <p>I used to wait for a perfect 3-hour window to start coding. I realized that window rarely comes. Now, I practice *micro-progressions*. If I have 15 minutes, I don't start a complex feature; instead, I review a PR, write a single CSS class, or outline a function structure.</p>

      <blockquote>
        "Three 20-minute blocks of focused work are worth far more than a distracted 2-hour window."
      </blockquote>

      <h3>My Three Rules for Tiny Time Slots</h3>
      <ul>
        <li><strong>Have a Clear TODO List:</strong> Never spend your precious 15-minute slot deciding *what* to do. Keep a highly detailed task list with tiny, micro-steps.</li>
        <li><strong>Keep the Environment Set Up:</strong> Keep your local server running and files open. Getting back into the flow should take less than 60 seconds.</li>
        <li><strong>Accept the Cycles:</strong> Some weeks are for intense building, others are for planning or pure rest. Embracing these natural cycles prevents burnout.</li>
      </ul>
    `
  }
];

export const GARDEN_POSTS: GardenPost[] = [
  {
    id: 1,
    title: "Growing Tomatoes Vertically in a Small Space",
    category: "Vegetables",
    img: "photo-1464226184884-fa280b87c399",
    date: "May 12, 2025",
    summary: "Maximize your harvest by training tomatoes upward. Learn the vertical string trellis method that keeps plants healthy and saves vital ground space.",
    difficulty: "Easy",
    season: "Spring - Summer",
    sunlight: "Full Sun (6-8 hours)",
    watering: "Deeply, twice a week",
    tools: ["T-posts or Trellis Frame", "Jute Twine / String", "Tomato Clips", "Pruning Shears"],
    content: `
      <p>Tomatoes are notorious space-hogs. Left to their own devices, they will sprawl along the ground, making them susceptible to pests, diseases, and rot. In our backyard homestead, we use vertical trellising to grow dozens of tomato plants in a fraction of the space.</p>

      <h3>The Vertical String Method</h3>
      <p>Instead of bulky metal cages, we set up a sturdy overhead frame using conduit pipes. From this frame, we drop lengths of natural jute twine down to the base of each tomato plant, securing it gently near the root.</p>

      <h3>Pruning is Key</h3>
      <p>Vertical growth requires strict pruning. You must train the tomato to grow as a *single stem*. This means removing all "suckers"—the small shoots that grow in the V-crotch between the main stem and the leaves.</p>

      <div className="bg-[#F0F8EB] p-5 rounded-2xl border border-[#C5E2B2] my-6">
        <h5 className="font-bold text-[#A47C5B] mb-2 font-playfair">🌿 Homestead Tip:</h5>
        <p className="text-sm text-[#5A6478] m-0">Always prune tomatoes in the morning on a dry day. This allows the pruning wounds to dry and heal quickly in the sun, reducing the risk of fungal infections.</p>
      </div>

      <h3>Benefits of Vertical Gardening</h3>
      <p>By training our tomatoes vertically, we enjoy better air circulation (reducing blight), easier harvesting, and cleaner fruit. Plus, it leaves the ground free for companion planting with basil and marigolds!</p>
    `
  },
  {
    id: 2,
    title: "My Composting Journey — Month 3 Update",
    category: "Composting",
    img: "photo-1416879595882-3373a0480b5b",
    date: "Jun 18, 2025",
    summary: "Turning kitchen scraps into garden gold. An honest update on building, turning, and balancing our backyard compost bin.",
    difficulty: "Medium",
    season: "Year-round",
    sunlight: "Partial Shade",
    watering: "Keep damp like a wrung-out sponge",
    tools: ["Backyard Compost Bin", "Pitchfork", "Compost Thermometer", "Watering Can"],
    content: `
      <p>Composting has always felt like a mixture of science and magic. Three months ago, we set up a basic dual-bin compost system in our garden corner. The goal: convert our vegetable kitchen scraps and dry garden debris into rich organic soil.</p>

      <h3>Finding the Balance (Carbon vs. Nitrogen)</h3>
      <p>In the first month, my pile smelled slightly sour. I realized it had too much nitrogen (greens) from kitchen scraps and not enough carbon (browns). I corrected this by following a strict 3:1 ratio of browns to greens:</p>
      <ul>
        <li><strong>Browns (Carbon):</strong> Shredded dry leaves, cardboard boxes, straw.</li>
        <li><strong>Greens (Nitrogen):</strong> Kitchen waste, coffee grounds, fresh weeds (without seeds).</li>
      </ul>

      <h3>Turning and Heat</h3>
      <p>Using a compost thermometer, I track the core temperature. Once the pile reaches 50–60°C, the beneficial microbes are working hard. I turn the pile with a pitchfork once a week to introduce oxygen, which speeds up decomposition and eliminates odor.</p>

      <h3>The Current State</h3>
      <p>At month 3, the bottom of Bin 1 is turning into dark, crumbly, earthy-smelling humus. We are on track to top dress our vegetable beds with homemade compost just in time for the autumn planting cycle!</p>
    `
  },
  {
    id: 3,
    title: "Hydroponic Basil: Setup & First Harvest",
    category: "Hydroponics",
    img: "photo-1585320806297-9794b3e4eeae",
    date: "Jul 22, 2025",
    summary: "A step-by-step guide to building a low-cost Kratky hydroponic setup for massive basil yields inside your kitchen.",
    difficulty: "Easy",
    season: "Year-round (Indoor)",
    sunlight: "Grow Light (12-14 hours) or Sunny Window",
    watering: "Passive Kratky Method (no pumps)",
    tools: ["Wide-mouth Mason Jar (1L)", "3-inch Net Cup", "Clay Pebbles (Hydroton)", "Liquid Nutrient A & B"],
    content: `
      <p>You don't need a huge backyard to grow fresh herbs. In our kitchen window, we use the <b>Kratky Method</b>—a passive hydroponic system that requires no electricity, pumps, or noisy aeration. It is perfect for herbs like basil.</p>

      <h3>How the Kratky Method Works</h3>
      <p>As the basil plant grows, it drinks the nutrient-rich water in the jar. The water level falls, creating an "air zone" below the net cup. The plant develops special "air roots" in this zone to breathe oxygen, while its lower roots stay in the water to feed.</p>

      <h3>Step-by-Step Setup</h3>
      <ol>
        <li>Fill a mason jar with water and mix in the liquid hydroponic nutrients according to directions.</li>
        <li>Place a sprouted basil seedling inside the net cup, stabilizing it with clean clay pebbles.</li>
        <li>Fit the net cup into the jar so the very bottom of the cup touches the water.</li>
        <li><b>Crucial Step:</b> Wrap the jar in dark paper or paint it. Light entering the jar will cause green algae to grow, stealing nutrients from your basil.</li>
      </ol>

      <h3>Harvesting</h3>
      <p>Pinch off the top set of leaves just above a node where new branches are forming. This keeps the basil bushy and prevents it from flowering too early, ensuring sweet, aromatic leaves all year round.</p>
    `
  },
  {
    id: 4,
    title: "October Harvest Season Log",
    category: "Harvest",
    img: "photo-1506905925346-21bda4d32df4",
    date: "Oct 28, 2025",
    summary: "Reflecting on this season's yield, from bumper tomato harvests to sweet potatoes, and preparing beds for winter rest.",
    difficulty: "Easy",
    season: "Autumn",
    sunlight: "N/A",
    watering: "As needed for final crops",
    tools: ["Harvest Baskets", "Spading Fork", "Mulch (Straw / Shredded leaves)", "Cover Crop Seeds"],
    content: `
      <p>October brings a transition in the backyard garden. The warm-weather crops are slowing down, the air is turning crisp, and it is time to gather the last bounty and tuck the soil in for a long winter rest.</p>

      <h3>This Season's Yield Highlights</h3>
      <p>We recorded our most successful harvest season yet, thanks to compost top-dressing and improved irrigation:</p>
      <ul>
        <li><strong>Tomatoes:</strong> 24 kg of sweet cherry and heirloom tomatoes.</li>
        <li><strong>Sweet Potatoes:</strong> 12 kg of deep, sweet tubers dug from our single raised bed.</li>
        <li><strong>Peppers:</strong> A steady supply of jalapeños and bell peppers for preservation.</li>
      </ul>

      <h3>Prepping Beds for Winter</h3>
      <p>Soil health is preserved by never leaving beds bare. We are currently applying a thick 3-inch layer of clean straw mulch over the beds to protect the soil microbiology from heavy rains and freezing temperatures, while sowing crimson clover cover crops in others.</p>
    `
  },
  {
    id: 5,
    title: "DIY Raised Bed Garden on a Budget",
    category: "DIY",
    img: "photo-1524492412937-b28074a5d7da",
    date: "Feb 10, 2025",
    summary: "Build simple, long-lasting raised beds without breaking the bank. Complete cut lists and step-by-step building guide.",
    difficulty: "Medium",
    season: "Late Winter / Early Spring",
    sunlight: "N/A",
    watering: "N/A",
    tools: ["Cordless Drill & Screws", "Hand Saw or Circular Saw", "Tape Measure", "Staple Gun"],
    content: `
      <p>Raised beds offer excellent drainage, complete control over soil composition, and make weeding much easier. However, commercial kits are often overpriced. We built three large 4x8-foot raised beds for less than half the retail price.</p>

      <h3>Material Selection</h3>
      <p>Avoid chemically treated wood if you plan to grow edible vegetables. We used untreated cedar boards, which naturally resist rot for 7-10 years. For budget-conscious builds, untreated Douglas fir is a great alternative that lasts 4-5 years.</p>

      <h3>Step-by-Step Build (4x8 feet, 12 inches deep)</h3>
      <ol>
        <li>Cut two 2x12 boards to 8 feet, and two boards to 4 feet.</li>
        <li>Use 4x4 posts in the corners for structural strength. Screw the side boards into the posts using 3-inch deck screws.</li>
        <li>Staple heavy-duty cardboard or landscape fabric to the bottom of the bed to smother existing grass and weeds.</li>
        <li>Fill using the "Hugelkultur" method: put logs and twigs at the bottom, followed by grass clippings, and top with high-quality compost and topsoil.</li>
      </ol>

      <h3>The Result</h3>
      <p>These beds look beautiful, feel premium, and are filled with a rich organic soil mix that will feed our family for seasons to come.</p>
    `
  },
  {
    id: 6,
    title: "Simple Recipes from Our Garden Harvest",
    category: "Recipe",
    img: "photo-1490885578174-acda8905c2c6",
    date: "Aug 15, 2025",
    summary: "From vine to plate. Three quick, delicious recipes celebrating fresh-picked basil, tomatoes, and herbs.",
    difficulty: "Easy",
    season: "Summer",
    sunlight: "N/A",
    watering: "N/A",
    tools: ["Chef Knife", "Cast Iron Skillet", "Food Processor", "Mason Jars"],
    content: `
      <p>There is an indescribable magic in harvesting dinner just minutes before you cook it. The flavor of a warm, vine-ripened tomato or fresh-plucked sweet basil leaves cannot be matched by any grocery store. Here are three simple recipes we make during peak summer harvest.</p>

      <h3>1. Five-Minute Fresh Garden Pesto</h3>
      <p>Combine 2 cups of fresh basil leaves, 1/3 cup of toasted pine nuts (or walnuts), 2 garlic cloves, 1/2 cup of Parmesan cheese, and 1/2 cup of quality olive oil in a food processor. Pulse until smooth, and toss with warm pasta.</p>

      <h3>2. Pan-Seared Cherry Tomato Sauce</h3>
      <p>Toss cherry tomatoes whole into a hot skillet with olive oil and garlic. Let them sear and burst, releasing their juices to form a rich, sweet sauce. Finish with a handful of torn basil leaves.</p>

      <h3>3. Organic Cucumber-Dill Salad</h3>
      <p>Thinly slice crisp garden cucumbers. Toss with Greek yogurt, lemon juice, sea salt, garlic, and fresh dill. It's the ultimate refreshing side dish for hot summer afternoons.</p>
    `
  }
];
