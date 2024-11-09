import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    const robotsContent = `
    User-agent: *
    Disallow: /api/
    Allow: /

    Sitemap: https://urban-sphere.studex.tech/api/sitemap
    `;
    res.setHeader('Content-Type', 'text/plain');
    res.status(200).send(robotsContent);
}
