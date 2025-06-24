import { useRef, useState, useEffect } from "react";

export default function BadgeCreator() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [name, setName] = useState("YOUR NAME");
  const [photo, setPhoto] = useState<HTMLImageElement | null>(null);
  const logo = useRef(new Image());

  useEffect(() => {
    logo.current.src = "/images/event-logo.png";
    logo.current.onload = draw;
  }, []);

  useEffect(() => {
    draw();
  }, [name, photo]);

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#0b2a64";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(logo.current, 20, 20, 50, 50);

    ctx.fillStyle = "#6b21a8";
    ctx.fillRect(100, 30, 200, 28);
    ctx.fillStyle = "#fff";
    ctx.font = "bold 14px sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("I WILL BE GOING", 200, 48);

    if (photo) {
      ctx.save();
      ctx.beginPath();
      ctx.arc(200, 110, 50, 0, Math.PI * 2);
      ctx.clip();
      ctx.drawImage(photo, 150, 60, 100, 100);
      ctx.restore();

      ctx.strokeStyle = "#facc15";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(200, 110, 50, 0, Math.PI * 2);
      ctx.stroke();
    } else {
      ctx.strokeStyle = "#facc15";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.arc(200, 110, 50, 0, Math.PI * 2);
      ctx.stroke();

      ctx.fillStyle = "#ccc";
      ctx.font = "12px sans-serif";
      ctx.fillText("Your Photo", 200, 115);
    }

    ctx.fillStyle = "#fff";
    ctx.font = "bold 24px sans-serif";
    ctx.fillText(name.toUpperCase(), 200, 190);

    ctx.fillStyle = "#fff";
    ctx.font = "italic 14px sans-serif";
    ctx.fillText("for the", 200, 215);

    ctx.fillStyle = "#facc15";
    ctx.font = "bold 18px sans-serif";
    ctx.fillText("2ND LAGOS", 200, 240);

    ctx.fillStyle = "#fff";
    ctx.font = "bold 16px sans-serif";
    ctx.fillText("ARCHDIOCESAN", 200, 265);

    ctx.fillStyle = "#c084fc";
    ctx.font = "italic 16px sans-serif";
    ctx.fillText("Congress", 200, 290);

    ctx.fillStyle = "#dc2626";
    ctx.fillRect(160, 305, 80, 24);
    ctx.fillStyle = "#facc15";
    ctx.font = "bold 14px sans-serif";
    ctx.fillText("IPAJA 2025", 200, 322);

    ctx.fillStyle = "#fff";
    ctx.font = "italic 12px sans-serif";
    ctx.fillText('"To the Throne of Grace"', 200, 350);

    ctx.font = "10px sans-serif";
    ctx.fillText("Hebrews 4:16", 200, 365);

    ctx.fillText("Christ the King Catholic Church, Akowonjo, Ipaja, Lagos State.", 200, 385);
    ctx.fillText("August 21st – 23rd, 2025", 200, 400);

    ctx.fillStyle = "#facc15";
    ctx.font = "10px sans-serif";
    ctx.fillText("#Ipaja2025  #BlockRosaryCongress", 200, 415);
  };

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const img = new Image();
    img.onload = () => setPhoto(img);
    img.src = URL.createObjectURL(file);
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${name}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <section id="badge" className="py-20 px-6 md:px-32 bg-purple-50 text-center">
      <h2 className="text-4xl font-extrabold text-purple-700 mb-10">🎫 Create Your Badge</h2>
      
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <canvas
          ref={canvasRef}
          width={400}
          height={450}
          className="border-4 border-purple-300 rounded-xl shadow-lg max-w-full"
        />

        <div className="w-full max-w-md flex flex-col gap-4">
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
          />
          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 shadow-sm"
          />
          <button
            onClick={download}
            className="bg-purple-700 text-white font-semibold py-2 rounded-lg shadow hover:bg-purple-800 transition"
          >
            Download Badge
          </button>
        </div>
      </div>
    </section>
  );
}
