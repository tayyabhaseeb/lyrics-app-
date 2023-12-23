import Song from "./Song";

function SongCont() {
  return (
    <div>
      <h2 className="text-center text-4xl mt-6 mb-6 text-gray-500">
        Top Trending Song in India
      </h2>
      <div className="flex flex-wrap gap-4 justify-center">
        <Song />
        <Song />
        <Song />
        <Song />
      </div>
    </div>
  );
}

export default SongCont;
