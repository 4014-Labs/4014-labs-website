# Website editing

Current homepage: logo, the cofounder's supplied philosophy and product text,
the sandbox link, and a link to the separate benchmark page. Preserve the
supplied wording unless the user asks for a copy edit. Keep benchmark data off
the homepage itself. No onboarding instructions, examples, or closing slogan.

The public benchmark evidence lives at `public/benchmarks/` as static HTML and
JSON so crawlers can read it without executing React. Preserve the exact setup,
evidence-status qualification, and distinction between complete-workflow
turnaround and raw GPU performance.

Visual exception: restore only the original subtle 28px blue background grid.
Keep all other minimalist styling; do not restore shadows, colored panels,
media demos, or other paperclip-punk decoration.

Preserve the 4014 Labs logo. Latest visual direction: plain and minimalist, with no photo, image, or video examples on the homepage. Use the text-first Minimal.css design rather than the earlier paperclip-punk treatment. 4014 Labs is the company; idea is a product family; 3D Renderer is a product within idea.

For copy revisions, read docs/craft/README.md and the selected principles in docs/craft/anti-ai-slop.json. Only the anti-AI-slop subset was imported from Brinesport. Use the founder's supplied language, concrete descriptions, and concise copy. Do not import unrelated novel-writing principles.

Do not commit or deploy unless requested. Preserve unrelated work in src/deck/.
