
  # Fenerbahçe Presidential Election Website

  This is a code bundle for Fenerbahçe Presidential Election Website. The original project is available at https://www.figma.com/design/kvP7W90EUA7kA0aFHaO858/Fenerbah%C3%A7e-Presidential-Election-Website.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Congress Invite Email Setup

  The invite form posts to `/api/congress-invite`.

  Configure these environment variables in Vercel project settings:

  - `RESEND_API_KEY`
  - `CONGRESS_INVITE_FROM_EMAIL` (must be a verified sender/domain in Resend)
  - `CONGRESS_INVITE_ADMIN_EMAIL` (where new lead notifications are sent)

  Optional local/frontend override:

  - `VITE_CONGRESS_INVITE_WEBHOOK` (defaults to `/api/congress-invite`)

  If email variables are missing, form submissions still fall back to local waitlist storage in the browser.
  