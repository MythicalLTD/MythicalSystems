module.exports = {
  apps: [
    {
      name: "mythicalsystems-homepage",
      cwd: "/var/www/mythicalsystems-homepage",

      // Run Next.js directly
      script: "node_modules/next/dist/bin/next",
      args: "start -p 4921",

      env: {
        NODE_ENV: "production",
        PORT: 4921
      },

      instances: 1,        // change to "max" if you want clustering
      exec_mode: "fork",   // "cluster" also works with instances > 1
      autorestart: true,
      watch: false,
      max_memory_restart: "512M"
    }
  ]
};
