import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/pranav2012/MyPortfolio"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork pranav2012/MyPortfolio on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/pranav2012/MyPortfolio"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star pranav2012/MyPortfolio on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
