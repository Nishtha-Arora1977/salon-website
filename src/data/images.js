const base = 'https://images.unsplash.com';

export function img(id, w = 1000) {
  return `${base}/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export const hero = img('1560066984-138dadb4c035', 1200);
export const gallery = [
  img('1522335789203-aabd1fc54bc9', 900),
  img('1562322140-8baeececf3df', 900),
  img('1519415510236-718bdfcd89c8', 900),
  img('1633681926022-84c23e8cb2d6', 900),
  img('1596462502278-27bfdc403348', 900),
  img('1610992015732-2449b76344bc', 900),
  img('1544161515-4ab6ce6db874', 900),
  img('1571781926291-c477ebfd024b', 900),
];

export const visit = img('1544161515-4ab6ce6db874', 1000);