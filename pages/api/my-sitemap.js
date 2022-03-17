const { SitemapStream, streamToPromise } = require("sitemap");
const { Readable } = require("stream");

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  // An array with your links
  const links = [
    { url: "/", changefreq: "daily", priority: 0.3 },
    { url: "/works", changefreq: "daily", priority: 0.3 },
    { url: "/posts", changefreq: "daily", priority: 0.3 },
    { url: "/works/whatsapp", changefreq: "daily", priority: 0.3 },
    { url: "/works/forecast", changefreq: "daily", priority: 0.3 },
    { url: "/works/reservation", changefreq: "daily", priority: 0.3 },
  ];

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: `https://${req.headers.host}` });

  res.writeHead(200, {
    "Content-Type": "application/xml",
  });

  const xmlString = await streamToPromise(
    Readable.from(links).pipe(stream)
  ).then((data) => data.toString());

  res.end(xmlString);
};
