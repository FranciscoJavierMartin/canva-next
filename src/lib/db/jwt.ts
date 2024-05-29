import jwt from 'jsonwebtoken';

export function signJwt(id: string, name: string, email: string) {
  const token = jwt.sign(
    {
      name,
      email,
      id,
    },
    process.env.JWT_SECRET!,
    { expiresIn: '2d' },
  );

  return token;
}
