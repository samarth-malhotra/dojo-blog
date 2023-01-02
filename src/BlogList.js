import Blog from "./Blog";
const BlogList = ({ blogs, title, handleDelete }) => {
  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return <Blog blog={blog} handleDelete={handleDelete} key={blog.id} />;
      })}
    </div>
  );
};

export default BlogList;
