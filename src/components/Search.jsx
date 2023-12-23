import { Card, Button } from "flowbite-react";
const Search = () => {
  return (
    <Card className="bg-white">
      <p className="text-6xl font-light text-center text-gray-600">
        Search for a Song
      </p>
      <p className="text-red text-center text-md text-gray-400">
        Get the lyrics for any song !
      </p>
      <input
        type="text"
        className="w-full border-solid border-2 border-gray-400 mt-6 rounded outline-none"
        placeholder="Song Title..."
      />
      <Button color="blue">Search</Button>
    </Card>
  );
};

export default Search;
