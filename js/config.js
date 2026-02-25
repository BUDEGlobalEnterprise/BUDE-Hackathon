/**
 * Hackathon Configuration
 * 
 * Edit this file to customize your hackathon settings
 */

const HACKATHON_CONFIG = {
    // Basic Information
    name: "BUDE Global Community Hackathon",
    description: `
        Welcome to the BUDE Global Community Hackathon! Join us in building the future of open source 
        enterprise solutions and collaborate with developers worldwide.
    `,
    
    // Optional rules section
    rules: `
        1. All pull requests must be submitted during the hackathon period (Mar 01, 2026 - Mar 31, 2026)
        2. PRs must be merged to count towards the leaderboard
        3. Only pull requests to the listed repositories will count
        4. Be respectful and follow each project's contribution guidelines
        5. Have fun and learn something new!
    `,
    
    // Hackathon Timeline (ISO 8601 format)
    startTime: "2026-03-01T00:00:00Z",
    endTime: "2026-03-31T23:59:59Z",
    
    // GitHub Configuration
    github: {
        // Your GitHub personal access token (optional, but recommended to avoid rate limits)
        // Create one at: https://github.com/settings/tokens
        // Only needs 'public_repo' scope for public repositories
        token: "", // Leave empty if you don't want to use a token
        
        // List of repositories to track
        // Format: "owner/repo"
        repositories: [
            "BUDEGlobalEnterprise/bude-global-neuro-chain-react",
            "BUDEGlobalEnterprise/bude-global-tech-presentations",
            "BUDEGlobalEnterprise/bude-first-contribution",
            "BUDEGlobalEnterprise/bude-logo-generator",
            "BUDEGlobalEnterprise/bude-global-implementation",
            "BUDEGlobalEnterprise/bude-global-legal-documents"
        ]
    },
    
    // Prizes Configuration
    prizes: [],
    
    // Sponsors Configuration (optional)
    sponsors: [
        // Example sponsor entry (uncomment and fill in):
        // {
        //     name: "Company Name",
        //     level: "gold", // platinum, gold, silver, bronze, partner
        //     logo: "images/sponsor-logo.png", // Path to logo image
        //     website: "https://example.com"
        // }
    ],
    
    // Additional sponsor information
    sponsorNote: "Interested in sponsoring? Contact us for more information!",
    sponsorLink: "mailto:sponsor@example.com",
    
    // Display Options
    display: {
        // Show repository statistics
        showRepoStats: true,
        
        // Maximum number of leaderboard entries to display
        maxLeaderboardEntries: 10,
        
        // Show participant pull requests in leaderboard
        showPRsInLeaderboard: true,
        
        // Show participant reviews in review leaderboard
        showReviewsInLeaderboard: true
    },
    
    // Banner image (optional)
    bannerImage: "images/BUDE_GLOBAL_BUDE_Hackathons_MARCH.svg"
};
