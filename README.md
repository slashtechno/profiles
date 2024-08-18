# _profiles_  
Social media platforms can be bloated. What about a rich text landing page that's yours to customize?  

## Features  
- **Simple**: No magic algorithms, just a unique URL to share.  
    - Syntax: `https://profiles.angad.me/users/<username>`
- **Customizable**: Using Markdown, create a rich text landing page.
    - Images, links, lists, etc.  
    - Emoji support!
- **Open Source**: [GitHub Repository](https://github.com/slashtechno/profiles)  
- **Free**: No ads, no monetization. Just a fun project.  

## Usage  
1. Visit `https://profiles.angad.me`  
2. Sign in or sign up  
3. Create a new profile  
4. Customize your profile using Markdown  
5. Share your profile URL  

## Self-hosting  
1. Import `pb_schema.json` into a PocketBase instance  
2. Change the URL in `src/lib/pocketbase.js`  
3. Run `npm install`
4. Run `npm run dev`
    - For production, run `npm run build` and deploy the `build` folder  
