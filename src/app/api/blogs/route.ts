import { NextResponse } from "next/server";

export const blogs = [
        {
            "id": 9,
            "title": "ABC",
            "content": "akks ",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504110/cld-sample-2.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2025-11-17T14:39:27.148Z",
            "updatedAt": "2025-11-17T14:39:27.148Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 8,
            "title": "Getting Started with React Server Actions",
            "content": "Next.js introduces new features building fas and scalable web applications. Learn how to set up your first project and explore its App Router.",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504110/cld-sample-2.jpg",
            "isFeatured": true,
            "tags": [
                "Next.js",
                "Actions"
            ],
            "views": 0,
            "authorId": 1,
            "createdAt": "2025-11-17T14:35:30.773Z",
            "updatedAt": "2025-11-17T14:35:30.773Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 7,
            "title": "new title 5",
            "content": "this is post content 5",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": false,
            "tags": [
                "blog",
                "ph",
                "next",
                "level2"
            ],
            "views": 5,
            "authorId": 5,
            "createdAt": "2025-11-17T07:23:49.895Z",
            "updatedAt": "2025-11-17T14:35:41.077Z",
            "author": {
                "id": 5,
                "name": "Firoz ",
                "email": "firoz@gmail.com"
            }
        },
        {
            "id": 6,
            "title": "new title",
            "content": "this is post content",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": false,
            "tags": [
                "blog",
                "ph",
                "next",
                "level2"
            ],
            "views": 5,
            "authorId": 1,
            "createdAt": "2025-11-13T07:00:26.086Z",
            "updatedAt": "2025-11-17T11:10:58.444Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 5,
            "title": "new title",
            "content": "this is post content",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": false,
            "tags": [
                "blog",
                "ph",
                "next",
                "web"
            ],
            "views": 3,
            "authorId": 1,
            "createdAt": "2025-11-13T06:19:20.226Z",
            "updatedAt": "2025-11-17T11:11:01.291Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 4,
            "title": "This is ",
            "content": "this is post content",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": false,
            "tags": [
                "blog",
                "ph",
                "next",
                "web"
            ],
            "views": 3,
            "authorId": 1,
            "createdAt": "2025-11-13T06:18:30.964Z",
            "updatedAt": "2025-11-17T11:11:05.012Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 3,
            "title": "This is post title 2",
            "content": "this is post content",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": false,
            "tags": [
                "blog",
                "ph",
                "next",
                "web"
            ],
            "views": 3,
            "authorId": 1,
            "createdAt": "2025-11-12T05:43:48.417Z",
            "updatedAt": "2025-11-17T11:11:08.433Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 2,
            "title": "This is post title 2",
            "content": "this is post content",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": false,
            "tags": [
                "blog",
                "ph",
                "next",
                "web"
            ],
            "views": 3,
            "authorId": 1,
            "createdAt": "2025-11-12T05:43:05.266Z",
            "updatedAt": "2025-11-17T11:11:12.930Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        },
        {
            "id": 1,
            "title": "This is post title",
            "content": "this is post content",
            "thumbnail": "https://res.cloudinary.com/dt0lsjpjj/image/upload/v1761504108/samples/zoom.avif",
            "isFeatured": true,
            "tags": [
                "blog",
                "ph",
                "next",
                "web"
            ],
            "views": 15,
            "authorId": 1,
            "createdAt": "2025-11-12T05:41:23.898Z",
            "updatedAt": "2025-11-17T11:12:30.600Z",
            "author": {
                "id": 1,
                "name": "Fahim Ahmed",
                "email": "fahim@gmail.com"
            }
        }
    ]

export const GET = async () => {
    return Response.json(blogs)
}

export const POST = async (request: Request) => {
    const blog = await request.json();
    const newBlog = {
        ...blog,
        id: blogs.length + 1,
    };
    blogs.push(newBlog);

    return new NextResponse(JSON.stringify(newBlog), {
        status: 201,
        headers: {
            "Content-Type": "application/json"
        },
    })

}
    