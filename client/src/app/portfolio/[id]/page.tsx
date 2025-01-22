import { notFound } from 'next/navigation';

import { ImageGallery } from '@/features/portfolio/components/ImageGallery';
import { PortfolioDetails } from '@/features/portfolio/components/PortfolioDetails';
import { PortfolioHeader } from '@/features/portfolio/components/PortfolioHeader';
import { ProjectList } from '@/features/portfolio/components/ProjectList';
import ThemeCustomizer from '@/features/portfolio/components/ThemeCustomizer';

import type { Portfolio } from '@/features/portfolio/types/Portfolio';

// This would typically come from a database
const portfolios: Portfolio[] = [
  {
    id: '1',
    title: 'Creative Design Studio',
    author: 'Alice Johnson',
    avatar: '/placeholder.svg?height=60&width=60',
    description:
      'A showcase of innovative web designs and interactive user experiences.',
    tags: ['UI/UX', 'Web Design', 'Animation'],
    technologies: ['React', 'Three.js', 'GSAP'],
    projectCount: 15,
    likes: 230,
    views: 1500,
    rating: 4.8,
    images: [
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
      '/placeholder.svg?height=600&width=800',
    ],
    cv: '/path-to-cv.pdf',
    socialLinks: {
      github: 'https://github.com/alicejohnson',
      linkedin: 'https://linkedin.com/in/alicejohnson',
      twitter: 'https://twitter.com/alicejohnson',
    },
    projects: [
      {
        id: '1',
        title: 'E-commerce Redesign',
        description:
          'Complete overhaul of an e-commerce platform focusing on UX improvements.',
      },
      {
        id: '2',
        title: 'Interactive Data Visualization',
        description:
          'Created an interactive dashboard for visualizing complex datasets.',
      },
      {
        id: '3',
        title: 'Mobile App UI Kit',
        description:
          'Designed a comprehensive UI kit for rapid mobile app development.',
      },
    ],
  },
  // ... other portfolios
];

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const portfolio = portfolios.find((p) => p.id === id);

  if (!portfolio) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <PortfolioHeader portfolio={portfolio} />
      <main className="container mx-auto px-4 py-8">
        <ImageGallery images={portfolio.images} />
        <PortfolioDetails portfolio={portfolio} />
        <ProjectList projects={portfolio.projects} />
        <ThemeCustomizer />
      </main>
    </div>
  );
}
