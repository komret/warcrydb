# WarCryDB

I created this project to experiment with vibe-coding and to have a tool that can be useful to myself and any other players of WarCry, a dead collectible card game.

The app is hosted at https://warcrydb.pages.dev/.

## Google Drive Integration

The deck builder supports saving and loading decks to/from Google Drive. To set this up:

### 1. Google Cloud Console Setup

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Google Drive API:
   - Go to **APIs & Services** → **Library**
   - Search for "Google Drive API"
   - Click on **Google Drive API** and enable it

#### Create API Key

1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **API key**
3. Copy the generated API key

#### Create OAuth 2.0 Client ID

1. Go to **APIs & Services** → **Credentials**
2. Click **+ CREATE CREDENTIALS** → **OAuth 2.0 Client ID**
3. Choose **Web application** as the application type
4. Set the authorized redirect URIs to include your development and production URLs:
   - `https://warcrydb.pages.dev`
   - `http://localhost:5173`
5. Copy the **Client ID** (not the Client Secret - that's for server-side apps)

#### Configure OAuth Consent Screen

To make the app available to all users without the testing warning:

**Option 1: Add Test Users (Quick Solution)**

1. Go to **APIs & Services** → **OAuth consent screen**
2. Choose **External** user type
3. Fill in the required information:
   - **App name**: WarCryDB
   - **User support email**: Your email
   - **Developer contact information**: Your email
4. Add email addresses to the **Test users** list for anyone you want to share with
5. Save the changes

**Option 2: Publish the App (For Public Use)**

1. Complete the OAuth consent screen setup as above
2. After saving, click **PUBLISH APP** at the top of the page
3. Google will review your app (usually takes a few days)
4. Once approved, all users can access it without warnings

**Note**: Publishing requires Google to verify your app. For a simple deck builder tool, you may need to provide additional information about your app's purpose and user data handling.

### 2. Cloudflare Pages Environment Variables

Since this is a public repository, API keys are stored as environment variables in Cloudflare Pages:

1. Go to your Cloudflare Pages dashboard
2. Select your project
3. Go to Settings → Environment variables
4. Add the following variables:
   - `VITE_GOOGLE_CLIENT_ID`: Your OAuth 2.0 Client ID (from the OAuth credentials)
   - `VITE_GOOGLE_API_KEY`: Your API Key (from the API key credentials)

### 3. Local Development

For local development, create a `.env` file in the project root (this file is gitignored):

```env
VITE_GOOGLE_CLIENT_ID=your_oauth_client_id_here
VITE_GOOGLE_API_KEY=your_api_key_here
```

**Note**: For client-side applications, these values are exposed to the browser and cannot be truly secret. The Cloudflare Pages environment variables ensure they're not committed to the repository.

Open a pull request to contribute!
