import MusicVideoIcon from "@mui/icons-material/MusicVideo";
const Header = () => {
  return (
    <div className="bg-cyan-600 p-4 flex  justify-center items-center gap-4 sticky top-0">
      <MusicVideoIcon sx={{ fontSize: "40px", color: "cyan" }} />
      <h1 className="font-semibold text-2xl text-cyan-100">
        Lyrics Search App
      </h1>
    </div>
  );
};

export default Header;
