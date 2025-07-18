import Pagination from 'components/Pagination';
import PostCard from 'components/PostCard';
import SectionTitle from 'components/common/SectionTitle';

export default function BlogList({ posts = [], pagination = null, isService = false, showTitle = false }) {
  return (
    <section className={` ${showTitle ? 'py-16 md:py-20 lg:py-28' : 'pt-[60px] pb-[120px]'} `}>
      <div className="container">
        <div className="text-center text-primary pb-5">Out Latest Blogs</div>
        {showTitle && (
          <SectionTitle
            title="Read our latest news & blog which is updated regularly"
            paragraph="Stay informed with our latest insights, updates, and stories. From industry news to in-depth articles, we bring you fresh content that keeps you ahead."
            center
            width="665px"
          />
        )}
        <div className="-mx-4 flex flex-wrap justify-center">
          {posts?.length > 0 ? (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <li key={post.slug} className="w-full px-4 mb-8">
                  <PostCard post={post} isService={isService} />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-600 dark:text-gray-400">No posts found.</p>
          )}

          {pagination && (
            <Pagination
              addCanonical={false}
              currentPage={pagination?.currentPage}
              pagesCount={pagination?.pagesCount}
              basePath={pagination?.basePath}
            />
          )}
        </div>
      </div>
    </section>
  );
}
