/** Prefix public assets when hosted at username.github.io/repository/. */
export const assetPath = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${path}`;
