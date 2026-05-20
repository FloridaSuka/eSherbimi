class SystemController {
  constructor(queue) {
    this.queue = queue;
    this.health = this.health.bind(this);
    this.jobs = this.jobs.bind(this);
  }

  health(req, res) {
    res.json({ status: 'ok', service: 'ssh-gr32-api', timestamp: new Date().toISOString() });
  }

  jobs(req, res) {
    res.json(this.queue.list());
  }
}

module.exports = { SystemController };
