module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '60ce4eb591883c8c311e73850185427e'),
  },
});
