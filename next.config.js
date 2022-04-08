const API_KEY = "7ba5d65637647b14a1c44c3d2baf48cc";

module.exports = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ]
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
      }
    ]
  }
};