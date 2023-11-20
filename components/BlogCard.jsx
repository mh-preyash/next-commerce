import {CustomLink} from './CustomLink';
import Typography from './Typography';

export default function BlogCard({data, cols = '', nodes}) {
  let blogData = data || nodes;
  return (
    <section className={`text-gray-600`}>
      {blogData && blogData.length ? (
        <div
          className={`mx-auto gap-6 grid lg:grid-cols-${cols} md:grid-cols-2 grid-cols-1`}
        >
          {blogData.map((item) => (
            <div key={item?.title} className={`sm:mb-0 mb-6`}>
              <div className="rounded-lg h-64 overflow-hidden mb-4">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={item?.image}
                />
              </div>
              <CustomLink className="mt-5">{item?.category}</CustomLink>
              <CustomLink
                to={`/blogs/${item?.title}`}
                key={item?.handle}
                prefetch="intent"
              >
                <Typography
                  variant="h4"
                  className="font-medium title-font text-gray-900"
                >
                  {item?.title}
                </Typography>
              </CustomLink>
              <Typography className="leading-relaxed mt-2 overflow-hidden line-clamp-4">
                {item?.text}
              </Typography>
            </div>
          ))}
        </div>
      ) : (
        <Typography variant="h2" className="text-center">
          Coming Soon
        </Typography>
      )}
    </section>
  );
}
