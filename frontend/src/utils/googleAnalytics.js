// Google Analytics Initialization
// This file sets up Google Analytics 4 for tracking visitor data

export const initializeGA = (measurementId) => {
  try {
    // Add Google Analytics script to the page with error handling
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

    // Add error handler to prevent script from blocking site
    script.onerror = () => {
      console.warn(
        "Google Analytics script failed to load, but site will continue to work",
      );
    };

    document.head.appendChild(script);

    // Initialize gtag with delay to ensure script loads
    setTimeout(() => {
      try {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag("js", new Date());
        gtag("config", measurementId, {
          page_path: window.location.pathname,
        });
      } catch (err) {
        console.warn("Google Analytics initialization failed:", err);
        // Site continues to work even if GA fails
      }
    }, 100);
  } catch (err) {
    console.warn("Failed to load Google Analytics:", err);
    // Site continues to work even if GA fails
  }
};

// Track page views
export const trackPageView = (pagePath, pageTitle) => {
  try {
    if (window.gtag && window.GA_MEASUREMENT_ID) {
      window.gtag("config", window.GA_MEASUREMENT_ID, {
        page_path: pagePath,
        page_title: pageTitle,
      });
    }
  } catch (err) {
    // Silently fail - site should continue working
    console.warn("Page view tracking failed:", err);
  }
};

// Track custom events
export const trackEvent = (eventName, eventParams = {}) => {
  try {
    if (window.gtag) {
      window.gtag("event", eventName, eventParams);
    }
  } catch (err) {
    console.warn("Event tracking failed:", err);
  }
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent("form_submission", {
    form_name: formName,
  });
};

// Track button clicks
export const trackButtonClick = (buttonName) => {
  trackEvent("button_click", {
    button_name: buttonName,
  });
};

// Track product views
export const trackProductView = (productName, productId, category) => {
  trackEvent("view_item", {
    items: [
      {
        item_id: productId,
        item_name: productName,
        item_category: category,
      },
    ],
  });
};

// Track page scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent("scroll_depth", {
    depth_percentage: depth,
  });
};
