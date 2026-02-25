/**
 * Multiple Hackathons Configuration
 * 
 * This file contains configuration for multiple hackathons.
 * Each hackathon has a unique slug used in the URL.
 */

const HACKATHONS_CONFIG = {
    // List of all hackathons
    hackathons: [
        {
            slug: "bude-global-community",
            name: "BUDE Global Community Hackathon",
            description: "Tracking contributions for BUDE Global Community Projects. Join us in building the future of open source enterprise solutions!",
            organizer: "BUDE Global Enterprise",
            rules: `
                1. All pull requests must be submitted during the hackathon period (Mar 01, 2026 - Mar 31, 2026)
                2. PRs must be merged to count towards the leaderboard
                3. All repositories listed in the BUDE topic are eligible
                4. Be respectful and follow each project's contribution guidelines
                5. Have fun and learn something new!
            `,
            startTime: "2026-03-01T00:00:00Z",
            endTime: "2026-03-31T23:59:59Z",
            github: {
                token: "",
                organization: "BUDEGlobalEnterprise",
                repositories: [
                    "BUDEGlobalEnterprise/bude-global-neuro-chain-react",
                    "BUDEGlobalEnterprise/bude-global-tech-presentations",
                    "BUDEGlobalEnterprise/bude-first-contribution",
                    "BUDEGlobalEnterprise/bude-logo-generator",
                    "BUDEGlobalEnterprise/bude-global-implementation",
                    "BUDEGlobalEnterprise/bude-global-legal-documents"
                ]
            },
            prizes: [],
            sponsors: [],
            display: {
                showRepoStats: true,
                maxLeaderboardEntries: 10,
                showPRsInLeaderboard: true,
                showReviewsInLeaderboard: true
            },
            bannerImage: "images/BUDE_GLOBAL_BUDE_Hackathons_MARCH.svg"
        }
    ],
    
    // Global settings
    global: {
        siteName: "BUDE Global Hackathons",
        siteDescription: "Open source hackathons for BUDE platform",
        organizationName: "BUDE Global Enterprise",
        organizationUrl: "https://github.com/BUDEGlobalEnterprise"
    }
};

/**
 * Helper function to get hackathon by slug
 */
function getHackathonBySlug(slug) {
    return HACKATHONS_CONFIG.hackathons.find(h => h.slug === slug);
}

/**
 * Helper function to get all hackathons
 */
function getAllHackathons() {
    return HACKATHONS_CONFIG.hackathons;
}
