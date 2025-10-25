export const fetchPageSpeedData = async (url: string) => {
  try {
    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
    if (!apiKey) {
      throw new Error('Google API key is not configured');
    }

    const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(
      url
    )}&key=${apiKey}&strategy=mobile`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Failed to fetch PageSpeed data');
    }

    const data = await response.json();
    
    return {
      performance: Math.round(data.lighthouseResult.categories.performance.score * 100),
      accessibility: Math.round(data.lighthouseResult.categories.accessibility.score * 100),
      bestPractices: Math.round(data.lighthouseResult.categories['best-practices'].score * 100),
      seo: Math.round(data.lighthouseResult.categories.seo.score * 100),
      url: url,
      loadingExperience: data.loadingExperience || null,
    };
  } catch (error) {
    console.error('Error fetching PageSpeed data:', error);
    throw error;
  }
};