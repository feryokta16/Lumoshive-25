import React from "react";

const Image = () => {
  return (
    <div className="flex flex-col md:flex-row gap-2 my-2 container mx-auto ">
      {/* Gambar Pertama */}
      <div className="flex-1 relative w-100 hover:scale-105 transition-transform duration-300">
        <img
          src="https://via.placeholder.com/800x400"
          alt="random"
          className="w-full h-auto rounded-sm"
        />
        <div className="absolute bottom-0 left-0 w-full bg-none text-white text-center p-2">
          <h2 className="text-lg">Judul Gambar Pertama</h2>
        </div>
      </div>

      {/* Gambar Kedua */}
      <div className="flex-1 flex flex-col relative">
        <img
          src="https://via.placeholder.com/800x200"
          alt="random"
          className="w-full h-auto rounded-sm hover:scale-105"
        />
        <div className="absolute my-16 mt-6 left-0 w-full bg-none text-white text-center">
          <h2 className="text-lg">Judul Gambar Kedua</h2>
        </div>
        <div className="flex gap-1">
          {/* Gambar Kecil Pertama */}
          <div className="relative w-1/2">
            <img
              src="https://via.placeholder.com/252x120"
              alt="random"
              className="w-full h-auto rounded-sm my-1 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-none text-white text-center">
              <h3 className="text-sm">Judul Gambar Kecil 1</h3>
            </div>
          </div>
          {/* Gambar Kecil Kedua */}
          <div className="relative w-1/2">
            <img
              src="https://via.placeholder.com/252x120"
              alt="random"
              className="w-full h-auto rounded-sm my-1 hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-none text-white text-center p-1">
              <h3 className="text-sm">Judul Gambar Kecil 2</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
