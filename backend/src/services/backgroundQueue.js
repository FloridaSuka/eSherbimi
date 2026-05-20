class BackgroundQueue {
  constructor() {
    this.jobs = [];
  }

  enqueue(name, handler) {
    const job = { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, name, status: 'queued' };
    this.jobs.push(job);

    setImmediate(async () => {
      job.status = 'running';
      try {
        job.result = await handler();
        job.status = 'completed';
      } catch (error) {
        job.status = 'failed';
        job.error = error.message;
      }
    });

    return job;
  }

  list() {
    return this.jobs.slice(-50).reverse();
  }
}

module.exports = { BackgroundQueue };
