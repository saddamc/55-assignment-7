/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogCard from "@/components/modules/Blogs/BlogCard";
import { Badge } from "@/components/ui/badge";
import { Metadata } from "next";

export const metadata:Metadata = {
  title: "All blogs | Next Blog",
  description: "Browse all blog posts on web development, Next.js, React, and more. Stay updated with the latest tutorials and articles.",
}

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`, {
    cache: "no-store"
  })
  const { data: blogs } = await res.json();
  return (
    <div>
      {/* Hero Section  */}
       <section className="pt-32 pb-20 text-white" style={{ backgroundColor: '#081361' }}>
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <Badge className="mb-6  bg-[#2640d3] hover:bg-[#0d23a4] text-white border-accent/30">
              Blog
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Thoughts & Insights
            </h1>
            <p className="text-xl text-gray-200">
              Articles about web development, programming, and technology
            </p>
          </div>
        </div>
      </section>

      <div className="py-30 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-4 mx-auto max-w-6xl my-5">
          {blogs?.map((blog : any) => (
            <BlogCard key={blog?.id} post={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogsPage;
