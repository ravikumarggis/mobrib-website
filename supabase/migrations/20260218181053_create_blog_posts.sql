/*
  # Blog Posts Table

  1. New Tables
    - `blog_posts`
      - `id` (uuid, primary key) - Unique identifier for each blog post
      - `title` (text) - Title of the blog post
      - `slug` (text, unique) - URL-friendly slug for the post
      - `excerpt` (text) - Short description/preview
      - `content` (text) - Full blog post content (markdown)
      - `image_url` (text) - Featured image URL
      - `author` (text) - Author name
      - `category` (text) - Blog post category
      - `published` (boolean) - Whether post is published
      - `created_at` (timestamptz) - Creation timestamp
      - `updated_at` (timestamptz) - Last update timestamp
      
  2. Security
    - Enable RLS on `blog_posts` table
    - Add policy for anonymous users to view published posts
    - Add policy for authenticated users to view all posts
*/

CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  excerpt text NOT NULL,
  content text NOT NULL,
  image_url text,
  author text DEFAULT 'Mobrib Team',
  category text NOT NULL,
  published boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published blog posts"
  ON blog_posts
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

INSERT INTO blog_posts (title, slug, excerpt, content, image_url, author, category, published)
VALUES
  (
    'The Future of Web Development',
    'future-of-web-development',
    'Explore the latest trends and technologies shaping the web development landscape in 2024.',
    'Web development has evolved dramatically over the past decade. In this comprehensive guide, we explore the emerging technologies and best practices that are shaping the future of web development. From AI-powered development tools to serverless architecture, learn how these innovations are transforming the way we build applications.',
    'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    'Mobrib Team',
    'Web Development',
    true
  ),
  (
    'Mobile App Development Best Practices',
    'mobile-app-development-best-practices',
    'Learn the essential practices for building high-quality mobile applications that users love.',
    'Building successful mobile applications requires more than just coding skills. This article covers the best practices for mobile app development, including responsive design, performance optimization, user experience considerations, and security measures. We also discuss the latest frameworks and tools that can help streamline your development process.',
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg',
    'Mobrib Team',
    'Mobile Development',
    true
  ),
  (
    'UI/UX Design Principles for Modern Apps',
    'ui-ux-design-principles',
    'Master the fundamental design principles that create intuitive and beautiful user interfaces.',
    'Great UI/UX design is the cornerstone of successful applications. This guide walks through the fundamental principles of modern design, including accessibility, typography, color theory, and user research. Learn how to create interfaces that are not only beautiful but also highly functional and user-friendly.',
    'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
    'Mobrib Team',
    'Design',
    true
  ),
  (
    'Database Optimization Techniques',
    'database-optimization-techniques',
    'Discover strategies to optimize your database performance and reduce query times.',
    'Database performance is critical for application scalability. This article explores various optimization techniques including indexing strategies, query optimization, caching mechanisms, and database design patterns. We also discuss how to monitor and profile your database to identify bottlenecks and implement effective solutions.',
    'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg',
    'Mobrib Team',
    'Backend Development',
    true
  ),
  (
    'Securing Your Web Applications',
    'securing-web-applications',
    'Essential security practices to protect your applications from common vulnerabilities.',
    'Security should never be an afterthought in web development. This comprehensive guide covers the OWASP Top 10 vulnerabilities, authentication best practices, data encryption, API security, and more. Learn how to implement security measures throughout your development lifecycle and keep your users'' data safe.',
    'https://images.pexels.com/photos/60504/security-lock-password-secure-60504.jpeg',
    'Mobrib Team',
    'Security',
    true
  ),
  (
    'Performance Optimization for Web Apps',
    'performance-optimization-web-apps',
    'Techniques to dramatically improve your application''s speed and user experience.',
    'Performance optimization is crucial for user satisfaction and SEO rankings. Learn about code splitting, lazy loading, caching strategies, CDN usage, and monitoring tools. We explore real-world examples and provide practical techniques you can implement immediately to boost your application''s performance.',
    'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
    'Mobrib Team',
    'Performance',
    true
  );
