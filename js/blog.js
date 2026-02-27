// Blog data and functionality
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React and TypeScript",
    excerpt: "Learn how to set up a modern React application with TypeScript and best practices for type safety.",
    author: "Sarah Johnson",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Development",
    likes: 42,
    comments: 8,
    image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 2,
    title: "Advanced Firebase Authentication Patterns",
    excerpt: "Explore advanced authentication patterns and security best practices for Firebase applications.",
    author: "Michael Chen",
    date: "2024-01-12",
    readTime: "8 min read",
    category: "Security",
    likes: 38,
    comments: 12,
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 3,
    title: "Building Scalable Web Applications",
    excerpt: "A comprehensive guide to architecting scalable web applications with modern frameworks and tools.",
    author: "Emily Rodriguez",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Architecture",
    likes: 67,
    comments: 15,
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 4,
    title: "Modern CSS Techniques and Best Practices",
    excerpt: "Discover the latest CSS features and techniques to create beautiful, responsive web designs.",
    author: "David Kim",
    date: "2024-01-08",
    readTime: "6 min read",
    category: "Design",
    likes: 29,
    comments: 7,
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 5,
    title: "JavaScript Performance Optimization",
    excerpt: "Learn essential techniques to optimize JavaScript performance and improve user experience.",
    author: "Lisa Wang",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "Performance",
    likes: 54,
    comments: 18,
    image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    id: 6,
    title: "API Design and Documentation",
    excerpt: "Best practices for designing RESTful APIs and creating comprehensive documentation.",
    author: "James Wilson",
    date: "2024-01-03",
    readTime: "7 min read",
    category: "Backend",
    likes: 31,
    comments: 9,
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  }
];

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Create blog post HTML
function createBlogPostHTML(post) {
  return `
    <article class="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-white/20 overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer">
      <div class="aspect-video relative overflow-hidden">
        <img
          src="${post.image}"
          alt="${post.title}"
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
            ${post.category}
          </span>
        </div>
      </div>
      
      <div class="p-6">
        <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
          ${post.title}
        </h3>
        
        <p class="text-gray-600 mb-4 line-clamp-3">
          ${post.excerpt}
        </p>
        
        <div class="flex items-center justify-between text-sm text-gray-500 mb-4">
          <div class="flex items-center space-x-4">
            <div class="flex items-center space-x-1">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V9a2 2 0 012-2z"></path>
              </svg>
              <span>${formatDate(post.date)}</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>${post.readTime}</span>
            </div>
          </div>
        </div>
        
        <div class="flex items-center justify-between pt-4 border-t border-gray-100">
          <span class="text-sm font-medium text-gray-700">
            By ${post.author}
          </span>
          
          <div class="flex items-center space-x-4 text-sm text-gray-500">
            <div class="flex items-center space-x-1">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
              </svg>
              <span>${post.likes}</span>
            </div>
            <div class="flex items-center space-x-1">
              <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
              <span>${post.comments}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

// Load and display blog posts
function loadBlogPosts() {
  const blogPostsContainer = document.getElementById('blog-posts');
  
  if (!blogPostsContainer) {
    console.error('Blog posts container not found');
    return;
  }
  
  // Clear existing posts
  blogPostsContainer.innerHTML = '';
  
  // Add each blog post
  blogPosts.forEach(post => {
    const postHTML = createBlogPostHTML(post);
    blogPostsContainer.insertAdjacentHTML('beforeend', postHTML);
  });
  
  // Add click handlers to blog posts
  const postElements = blogPostsContainer.querySelectorAll('article');
  postElements.forEach((element, index) => {
    element.addEventListener('click', () => {
      // In a real application, this would navigate to the full post
      console.log('Clicked on post:', blogPosts[index].title);
      alert(`Opening: ${blogPosts[index].title}\n\nThis would navigate to the full blog post in a real application.`);
    });
  });
}

// Export for use in other files
window.blogUtils = {
  loadBlogPosts,
  blogPosts
};