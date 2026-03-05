# Google Analytics Setup Guide for SunPeak Solar

## Overview

Google Analytics 4 (GA4) is now integrated into your SunPeak website to track visitor data, page views, and user behavior.

## ✅ What's Been Setup

1. **Google Analytics Utility** (`src/utils/googleAnalytics.js`)
   - `initializeGA()` - Initializes GA with your measurement ID
   - `trackPageView()` - Tracks when users visit different pages
   - `trackEvent()` - Tracks custom events
   - `trackFormSubmission()` - Tracks form submissions
   - `trackButtonClick()` - Tracks button clicks
   - `trackProductView()` - Tracks product views
   - `trackScrollDepth()` - Tracks how far users scroll

2. **App Integration** (`src/App.jsx`)
   - GA automatically initializes when the app loads
   - Page views are automatically tracked when users navigate

## 🔑 Next Steps: Get Your Measurement ID

### Step 1: Go to Google Analytics

1. Visit https://analytics.google.com
2. Sign in with your Google account (create one if needed)

### Step 2: Create a Property

1. Click **"Create"** or **"Admin"** (gear icon)
2. Click **"Create Property"**
3. Fill in:
   - **Property name**: "SunPeak Solar"
   - **Reporting timezone**: Africa/Lagos (for Nigeria)
   - **Currency**: NGN (Nigerian Naira)
4. Click **"Create"**

### Step 3: Create a Data Stream

1. Choose **"Web"** as platform
2. Fill in:
   - **Website URL**: https://sunpeak.com.ng (or your current domain)
   - **Stream name**: "SunPeak Website"
3. Click **"Create stream"**

### Step 4: Get Your Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (starts with "G-")
2. Example: `G-ABC123DEF45`
3. **Copy this ID**

### Step 5: Add Measurement ID to Your Code

1. Open: `src/App.jsx`
2. Find this line (around line 26):
   ```jsx
   const measurementId = "G-XXXXXXXXXX";
   ```
3. Replace `'G-XXXXXXXXXX'` with your actual Measurement ID
4. Example:
   ```jsx
   const measurementId = "G-ABC123DEF45";
   ```
5. Save the file

## 📊 Viewing Your Analytics

Once you've added your Measurement ID:

1. **Deploy your site** (push changes to your server)
2. Wait **24-48 hours** for data to start appearing
3. Go back to https://analytics.google.com
4. You'll see:
   - **Total users/visitors**
   - **Page views**
   - **Sessions**
   - **User behavior** (bounce rate, avg. session duration)
   - **Traffic sources** (Google, direct, social, etc.)
   - **Geographic data** (where visitors are from)
   - **Device types** (mobile, desktop, tablet)
   - **Top pages**
   - **And much more!**

## 🎯 Custom Events Already Tracked

The following are automatically tracked:

- ✅ Page views (every time someone visits a page)
- ✅ Navigation between pages
- ✅ Form submissions (if forms call `trackFormSubmission()`)
- ✅ Button clicks (if buttons call `trackButtonClick()`)

## 📈 Using Analytics Data

### Common Insights You Can Get:

1. **How many people visit your site daily/monthly**
2. **Which pages are most popular** (e.g., OurWork, Products, etc.)
3. **How long people spend on your site**
4. **Where visitors come from** (search engines, social media, direct links)
5. **Which regions visit most** (Benin, Lagos, other states)
6. **Mobile vs Desktop traffic ratio**
7. **Conversion tracking** (if you add more tracking)

### Example: Check Visitor Count

1. Go to Analytics dashboard
2. Look at the top-left card showing **"Users"** or **"Sessions"**
3. You can change the date range to see trends

## 🔒 Privacy & Data

- Analytics collects **anonymous data** (no personal info unless you set it up)
- Data is **encrypted and secure**
- Complies with **most privacy laws** (GDPR, etc.)
- You control how long data is kept (default: 14 months)

## 🛠️ Advanced Features (Optional)

Once you're comfortable, you can:

1. **Track specific events**: Use the functions in `src/utils/googleAnalytics.js`

   ```jsx
   import { trackEvent } from "./utils/googleAnalytics";

   // Track when someone gets a quote
   trackEvent("quote_requested", {
     package_type: "residential",
   });
   ```

2. **Set up Conversion Goals**: Track when someone makes a purchase, requests info, etc.

3. **Enable E-commerce Tracking**: If you sell products through your site

4. **Connect to Google Search Console**: See how you rank in search results

5. **Set up Alerts**: Get notified of unusual traffic patterns

## ❓ Troubleshooting

**"I don't see any data after 48 hours"**

- Make sure you deployed the code with your Measurement ID
- Check if tracking code is loading (open DevTools → Network tab)
- Verify Measurement ID is correct (starts with "G-")

**"Where's my Measurement ID?"**

- Go to Admin (gear icon) → Data Streams → Select your stream
- Measurement ID is shown at the top

**"Can I track more detailed data?"**

- Yes! Use the functions in `src/utils/googleAnalytics.js` throughout your app

## 📞 Support

If you need help:

1. Check Google's official docs: https://support.google.com/analytics
2. Verify your Measurement ID is in the code
3. Make sure site is deployed to production

---

**Your analytics tracking is now ready! Just add your Measurement ID and you're good to go.** 🚀
