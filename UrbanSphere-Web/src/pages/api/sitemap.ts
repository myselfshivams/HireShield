import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.setHeader('Content-Type', 'application/xml');
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        <url>
            <loc>https://urban-sphere.studex.tech/</loc>
            <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
            <priority>1.00</priority>
        </url>
    </urlset>`;
    res.status(200).send(sitemap);
}
