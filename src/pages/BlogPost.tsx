import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, ChevronLeft, Share2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  image_url: string;
  author: string;
  category: string;
  created_at: string;
}

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchPost();
    setIsVisible(true);
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('published', true)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setPost(data);
        fetchRelatedPosts(data.category, data.id);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (category: string, postId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('category', category)
        .eq('published', true)
        .neq('id', postId)
        .limit(3);

      if (error) throw error;
      setRelatedPosts(data || []);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 pt-32 pb-16 flex items-center justify-center">
        <p className="text-slate-400 text-lg">Loading...</p>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-900 pt-32 pb-16 flex flex-col items-center justify-center">
        <p className="text-slate-400 text-lg mb-6">Post not found</p>
        <Link to="/blog" className="text-cyan-400 hover:text-cyan-300 font-semibold">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/blog"
          className={`inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-semibold mb-8 transition-all duration-300 transform hover:-translate-x-1 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Blog</span>
        </Link>

        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-cyan-400/20 text-cyan-300 text-sm font-semibold rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-6 text-slate-400 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-cyan-400" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                <span>{formatDate(post.created_at)}</span>
              </div>
              <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300">
                <Share2 className="w-5 h-5" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg mb-12 h-96">
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
          </div>

          <div className="prose prose-invert max-w-none mb-16">
            <article className="text-slate-300 text-lg leading-relaxed space-y-6">
              {post.content.split('\n').map((paragraph, index) => {
                if (paragraph.trim()) {
                  return (
                    <p key={index} className="text-slate-300 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                }
                return null;
              })}
            </article>
          </div>

          <div className="border-t border-slate-700 pt-12">
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-white">{post.author.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">About {post.author}</h3>
                  <p className="text-slate-400">
                    Passionate about creating innovative digital solutions and sharing knowledge with the community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/blog/${relatedPost.slug}`}
                    className="group bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                  >
                    <div className="relative overflow-hidden h-40">
                      <img
                        src={relatedPost.image_url}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-semibold text-cyan-300">{relatedPost.category}</span>
                      <h3 className="text-lg font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-2 line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
