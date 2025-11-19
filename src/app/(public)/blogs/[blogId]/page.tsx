/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import { getBlogById } from '@/services/PostServices';

// pre-load some id data without load show
export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/`);
    const { data: blogs } = await res.json();

    return blogs.slice(0, 2).map((blog: any ) => ({
        blogId: String(blog.id), 
    }))
};

// dynamic metadata
export const generateMetadata = async ({ params }:
    { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;

    // ! Add line
    const blog = await getBlogById(blogId)

    // !closed line
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    // const blog = await res.json();
    // console.log(blog)

    return {
        title: blog?.title,
        description: blog?.content,
    };
}

const BlogDetailsPage = async ({ params }:
    { params: Promise<{ blogId: string }> }) => {
    const { blogId } = await params;
    // console.log(await params)

    // ! delete line
    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${blogId}`)
    const blog = await getBlogById(blogId);
    // console.log(blog)

    return (
        <div className='py-30 px-4 max-w-7xl mx-auto'>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;