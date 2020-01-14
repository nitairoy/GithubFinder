class Github {
  constructor() {
    this.client_id = "74741f66fc47861b88cd";
    this.client_secret = "f8a441c1fcba4503d228a895021bff1dfe74e8de";
    this.repos_count = 10;
    this.repos_sort = "created: asc";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret} `
    );

    const reposResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_secret}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    const repos = await reposResponse.json();

    return {
      profile,
      repos
    };
  }
}
