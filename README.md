Harrison Blair's Personal Website
[![Build and Lint](https://github.com/Harrison-Blair/personal-website/actions/workflows/build-and-lint.yml/badge.svg?event=push)](https://github.com/Harrison-Blair/personal-website/actions/workflows/build-and-lint.yml)
============
This is the repository holding the code for Harrison Blair's personal website and developer portfolio. [You can do whatever you want with this code](/LICENSE).

### AI Tools Used
- [Github Copilot](https://github.com/features/copilot)
  - [Claude 4.5](https://www.anthropic.com/news/claude-sonnet-4-5)
  - [Grok Fast Code 1](https://x.ai/news/grok-code-fast-1)

## Tech Stack
**Website**
- [Node.js](https://nodejs.org/)
- [React](https://react.dev/)
  - [Tailwind (css styling)](https://tailwindcss.com/)
  - [Lucide (icons)](https://lucide.dev/)
- [Resend (contact form functionality)](https://resend.com)

**CI/CD**
- [Github Actions](https://github.com/features/actions)

**Hosting**
- [Vercel](https://vercel.com/)

## Setup

**Requirements:** `Node Package Manager >= 11.3.0`

After cloning the repository, open the folder in a terminal and run the following:

```bash
npm i

npm run dev
```

This will install the dependencies for the project, and then launch the development server (by default https://localhost:3000/)

## Config

In order to use the full functionality of the website, [you will need an API key from resend](https://resend.com). Their service is what allows the contact form to actually send you an email. **There is no built in rate limiting**. Production use of this website uses rate limiting through the hosting provider.

Navigate to the `.env.example` file, and copy it into (or create a new) `.env.local` file.

Replace the cotnets of the file with the actual data (correct email, Resend API key).

If you plan to host this on something other than Vercel, then you may need to create a .env file to manage production enviornment variables. Refer to your hosting service's provider for more information.

## Thanks!
Thanks for checking out my repository! If you want to get in contact with me, check out the hosted website @ [harrison-blair.dev](https://www.harrison-blair.dev)
