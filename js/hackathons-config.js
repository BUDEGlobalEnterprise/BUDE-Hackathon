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
            rules: `### **1. Eligibility & Participation**
- All members of the BUDE Global community are eligible to participate.
- Participants must register via the official community portal to be eligible for prizes.
- Only contributions to repositories tracked on this dashboard will be considered.

### **2. Contribution Standards**
- **Quality First**: All pull requests must adhere to the high standards of the BUDE Global Community. Code must be well-documented and passing all CI checks.
- **Relevance**: Contributions must address open issues or provide meaningful enhancements to the projects.
- **Originality**: Plagiarism or automated/AI-generated spam will result in immediate disqualification.

### **3. Scoring & Leaderboard**
- **Merged PRs**: The primary metric for rankings is the number of merged pull requests during the event period (Mar 01, 2026 - Mar 31, 2026).
- **Tie-breakers**: In the event of a tie, rankings will be determined by the speed of PR resolution and the volume of meaningful code reviews performed.
- **Review Leaderboard**: We also recognize and reward elite reviewers who help maintain our code quality.

### **4. Community & Conduct**
- **Empowerment**: This hackathon is designed to foster a culture of open-source excellence and mutual support.
- **Respect**: All participants must follow the [BUDE Global Code of Conduct](https://www.budeglobal.in/code-of-conduct). Harassment or exclusionary behavior will not be tolerated.
- **Collaboration**: We encourage participants to help other developers through reviews and discussions.
- **Legal Compliance**: Participants agree to our [Terms of Service](https://www.budeglobal.in/terms) and [Privacy Policy](https://www.budeglobal.in/privacy) by participating in this event.`,
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
