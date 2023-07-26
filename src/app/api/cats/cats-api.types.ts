export interface Breed {
  id: string;
  name: string;
  adaptability: string;
  affection_level: string;
  description: string;
  energy_level: string;
  image: { id: string; width: number; height: number; url: string };
}
