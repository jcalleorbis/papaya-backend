export const jwtConstants = {
  secret: () => process.env.JWT_SECRET,
  expires_at: () => process.env.JWT_EXPIRATION,
};
