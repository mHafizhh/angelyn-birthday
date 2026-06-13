import wallpaper from "../assets/images/Background.png";

export default function Background() {
  return (
    <div
      className="fixed inset-0 -z-50"
      style={{
        backgroundImage: `url(${wallpaper})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    />
  );
}