import { PORTFOLIO_DATA } from "../config/portfolio";

export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  license: { spdx_id: string } | null;
}

function getFallbackRepos(): Repo[] {
  const pinnedRepos = PORTFOLIO_DATA.projects.pinnedRepos || [];
  return pinnedRepos.map((name, index) => {
    const highlight = PORTFOLIO_DATA.projects.highlights.find(
      (h) => h.name.toLowerCase() === name.toLowerCase()
    );
    return {
      id: 1000 + index,
      name,
      description: highlight?.description || "Open-source package with measured benchmarks.",
      html_url: highlight?.link || `https://github.com/${PORTFOLIO_DATA.projects.githubUsername}/${name}`,
      homepage: "",
      stargazers_count: 0,
      language: "Dart",
      topics: [],
      license: { spdx_id: "MIT" },
    };
  });
}

export async function getGitHubRepos(): Promise<Repo[]> {
  try {
    const response = await fetch(
      `https://api.github.com/users/${PORTFOLIO_DATA.projects.githubUsername}/repos?sort=updated&per_page=100`,
      { next: { revalidate: 3600 } } // Revalidate every hour
    );
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    if (Array.isArray(data)) {
      // Filter only pinned repos defined in PORTFOLIO_DATA
      const pinnedRepos = PORTFOLIO_DATA.projects.pinnedRepos || [];
      const filteredRepos = data
        .filter((repo: Repo) => pinnedRepos.includes(repo.name))
        .sort((a, b) => pinnedRepos.indexOf(a.name) - pinnedRepos.indexOf(b.name));
      
      return filteredRepos.length > 0 ? filteredRepos : getFallbackRepos();
    }
    return getFallbackRepos();
  } catch (error) {
    console.error("Error fetching GitHub repos, using fallback data:", error);
    return getFallbackRepos();
  }
}
