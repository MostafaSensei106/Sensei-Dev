"use client";

import { useEffect, useState } from "react";
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

export function useGitHubRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${PORTFOLIO_DATA.projects.githubUsername}/repos?sort=updated&per_page=12`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setRepos(data);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchRepos();
  }, []);

  return { repos, isLoading };
}
