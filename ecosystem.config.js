module.exports = {
    apps: [
      {
        name: 'TTNewWeb',
        exec_mode: 'cluster',
        instances: '2', // Or a number of instances
        script: './node_modules/next/dist/bin/next',
        args: 'start',
        exp_backoff_restart_delay: 100, // optional, adjust as needed
        // cron_restart: '0 0 * * *', // automatic restart
        max_memory_restart: '400M' // optional, adjust as needed
      }
    ]
  }