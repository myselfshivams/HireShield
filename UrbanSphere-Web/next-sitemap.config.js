module.exports = {
    siteUrl: 'https://urban-sphere.studex.tech',
    generateRobotsTxt: true, 
    sitemapSize: 7000, 
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', allow: '/' },
            { userAgent: '*', disallow: '/api' }
        ],
        additionalSitemaps: [
            'https://urban-sphere.studex.tech/server-sitemap.xml', 
        ],
    },
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
            alternateRefs: config.alternateRefs,
        };
    },

};
