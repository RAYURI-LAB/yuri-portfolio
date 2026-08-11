export interface SocialLink {
  label: string;
  href: string;
  /** When false, show as placeholder text (no working link yet). */
  available?: boolean;
}

export interface Profile {
  name: string;
  title: string;
  yearsExperience: number;
  position: string;
  department: string;
  focusAreas: string[];
  tagline: string;
  bio: string;
  email: string;
  emailAvailable: boolean;
  socials: SocialLink[];
  education: {
    degree: string;
    graduatedAt: string;
  };
}
