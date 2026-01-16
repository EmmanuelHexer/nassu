import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

const parser = new Parser();

// RSS feed sources for Ghana football news
const RSS_FEEDS = [
  'https://myjoyonline.com/feed/', // MyJoyOnline (includes sports)
  'https://ghanasoccernet.com/feed', // Ghana Soccer Net
  'https://www.ghanafa.org/feed', // Ghana FA (if available)
];

export async function GET() {
  try {
    const allNews: any[] = [];

    // Fetch from all RSS feeds
    for (const feedUrl of RSS_FEEDS) {
      try {
        const feed = await parser.parseURL(feedUrl);

        // Filter for football/sports related content and add to array
        const footballNews = feed.items
          .filter((item) => {
            const title = item.title?.toLowerCase() || '';
            const content = item.contentSnippet?.toLowerCase() || '';
            const categories = item.categories?.join(' ').toLowerCase() || '';

            // Keywords to filter Ghana football news
            const footballKeywords = [
              'football', 'soccer', 'ghana', 'black stars', 'premier league',
              'gpl', 'kotoko', 'hearts', 'asante', 'ashanti', 'kumasi',
              'baba yara', 'stadium', 'supporter', 'fan'
            ];

            return footballKeywords.some(keyword =>
              title.includes(keyword) || content.includes(keyword) || categories.includes(keyword)
            );
          })
          .map((item) => ({
            title: item.title || '',
            link: item.link || '',
            pubDate: item.pubDate || item.isoDate || '',
            contentSnippet: item.contentSnippet || item.content?.substring(0, 200) || '',
            source: feed.title || 'Ghana Football News',
            categories: item.categories || [],
          }));

        allNews.push(...footballNews);
      } catch (error) {
        console.error(`Error fetching feed ${feedUrl}:`, error);
        // Continue with other feeds even if one fails
      }
    }

    // Sort by date (newest first)
    allNews.sort((a, b) => {
      const dateA = new Date(a.pubDate).getTime();
      const dateB = new Date(b.pubDate).getTime();
      return dateB - dateA;
    });

    // Return top 20 most recent articles
    return NextResponse.json({
      success: true,
      articles: allNews.slice(0, 20),
    });
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
