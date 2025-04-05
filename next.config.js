module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", // Proxy all API requests starting with /api
        destination: `http://localhost:8082/api/:path*`, // Redirect to the backend server
      },
    ];
  },
};