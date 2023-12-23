import { Button, Card } from "flowbite-react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import AlbumIcon from "@mui/icons-material/Album";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const Song = () => {
  return (
    <Card className="w-full m-2 md:w-[48%]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Arijit Singh
      </h5>
      <div className="flex items-center  ">
        <PlayCircleIcon />
        <p className="ml-2 font-bold">Song</p>
        <p>: Shella</p>
      </div>
      <div className="flex  items-center ">
        <AlbumIcon />
        <p className="ml-2 font-bold">Album</p>
        <p>: Shella</p>
      </div>
      <Button>
        <ArrowForwardIosIcon />
        View Lyrics
      </Button>
    </Card>
  );
};

export default Song;
