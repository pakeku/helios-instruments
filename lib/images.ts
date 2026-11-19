// All photos live here so any one can be swapped in a single place.
// Unsplash (free licence). Browse https://unsplash.com and replace the photo ID if you want a different shot.
const u = (id: string, w = 1600) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMG = {
  hero: u("1581092160562-40aa08e78837", 2400),
  about: u("1581091226825-a6a2a5aee158"),
  hardware: u("1581092918056-0c4c3acd3789", 1200),
  consumables: u("1532094349884-543bc11b234d", 1200),
  parts: u("1518770660439-4636190af475", 1200),
  globe: u("1451187580459-43490279c0fa", 2400),
  warehouse: u("1586528116311-ad8dd3c8310d", 2000),
  quality: u("1504917595217-d4dc5ebe6122", 1200),
  reliability: u("1565793298595-6a879b1d9492", 1200),
  logistics: u("1494412574643-ff11b0a5c1c3", 1200),
  direct: u("1556742049-0cfed4f6a45d", 1200),
};
