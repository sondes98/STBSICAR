module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '04b66619eceea4b4b46f2002a8026c64'),
  },
});
