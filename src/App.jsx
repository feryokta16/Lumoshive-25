import React, { useEffect, useState, useRef } from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Card from "./Card";
import Image from "./image";
import Footer from "./Footer";

const App = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);
  const topRef = useRef(null); // Membuat ref untuk elemen atas

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: "smooth", // Menambahkan efek smooth scroll
      });
    }
  };
  return (
    <div ref={topRef}>
      <Navbar />
      <Logo />
      <Image />
      <div className="container mx-auto">
        <div className="flex justify-between">
          <div>
            <button className="bg-green-500 text-sm mb-0">Sieera Pers</button>
          </div>
          <div className="flex text-gray-500 text-xs">
            <p className="mx-2">Founder letter</p>
            <p>Milestone</p>
          </div>
        </div>
        <hr className="border-t-2 border-green-500 mb-2" />
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4  w-full max-w-screen-lg container mx-auto">
          {posts &&
            posts
              .slice(7, 10)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-2">
          <div>
            <button className="bg-green-500 text-sm mb-0 mt-0">
              Behind the Scene
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-green-500 mb-2 mt-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  w-full max-w-screen-lg container mx-auto">
          {posts &&
            posts
              .slice(0, 3)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-2">
          <div>
            <button className="bg-green-500 text-sm mb-0 mt-0">
              Social Impact
            </button>
          </div>
        </div>
        <hr className="border-t-2 border-green-500 mb-2 mt-0" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4  w-full max-w-screen-lg container mx-auto">
          {posts &&
            posts
              .slice(4, 7)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>

      <div className="container mx-auto my-2 font-bold">
        <h1 className="text-green-800">Top List</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-lg">
          {posts &&
            posts
              .slice(11, 16)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <div className="container mx-auto my-2 font-bold">
        <h1 className="text-green-800">Kesehatan</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-lg">
          {posts &&
            posts
              .slice(17, 22)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <div className="container mx-auto my-2 font-bold">
        <h1 className="text-green-800">Kecantikan</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-lg">
          {posts &&
            posts
              .slice(23, 28)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <div className="container mx-auto my-2 font-bold">
        <h1 className="text-green-800">kids and Parenting</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-lg">
          {posts &&
            posts
              .slice(29, 34)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <div className="container mx-auto my-2 font-bold">
        <h1 className="text-green-800">Home and Living</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-screen-lg">
          {posts &&
            posts
              .slice(35, 40)
              .map((post) => <Card key={post.id} title={post.title} />)}
        </div>
      </div>
      <button
        className="fixed bottom-0 left-2 bg-blue-100 text-black hover:bg-white text-blue-600"
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up"></i>
      </button>
      <Footer />
    </div>
  );
};

export default App;
