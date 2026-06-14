export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  metrics: string;
  link?: string;
  image?: string;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string;
};

export type Metric = {
  label: string;
  value: string;
  trend: string;
};
