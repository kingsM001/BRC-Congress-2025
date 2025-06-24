import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import BadgeCreator from "./components/BadgeCreator";

export default function App() {
  const [countdown, setCountdown] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  const [liveNow, setLiveNow] = useState(false);

  useEffect(() => {
    const target = new Date("2025-08-21T08:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference <= 0) {
        setLiveNow(true);
        clearInterval(interval);
        return;
      }

      const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0");
      const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0");
      const minutes = String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0");
      const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, "0");

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="relative h-[90vh] overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-center bg-no-repeat bg-cover scale-110 blur-sm"
            style={{ backgroundImage: `url('/images/event-flyer.jpg')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center text-white h-full px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              2nd Lagos Archdiocesan BRC Congress
            </h1>
            <p className="text-xl font-medium italic mb-2">
              "To the Throne of Grace" – Hebrews 4:16
            </p>
            <p className="text-sm">
              August 21–23, 2025 • Christ the King Catholic Church, Akowonjo
            </p>

            {liveNow ? (
              <div className="bg-red-600 text-white px-6 py-2 rounded-full font-bold mt-6 animate-pulse">
                🔴 LIVE NOW
              </div>
            ) : (
              <div className="flex gap-4 justify-center text-yellow-300 font-mono text-sm md:text-lg font-bold mt-6">
                <div className="flex flex-col items-center">
                  <span>{countdown.days}</span>
                  <small className="text-white text-xs">Days</small>
                </div>
                <div className="flex flex-col items-center">
                  <span>{countdown.hours}</span>
                  <small className="text-white text-xs">Hours</small>
                </div>
                <div className="flex flex-col items-center">
                  <span>{countdown.minutes}</span>
                  <small className="text-white text-xs">Minutes</small>
                </div>
                <div className="flex flex-col items-center">
                  <span>{countdown.seconds}</span>
                  <small className="text-white text-xs">Seconds</small>
                </div>
              </div>
            )}

            <a
              href="#badge"
              className="mt-6 inline-block bg-yellow-400 text-purple-900 px-6 py-3 rounded-full font-semibold shadow hover:bg-yellow-500"
            >
              Create Your Badge
            </a>
          </motion.div>
        </div>
      </header>

      {/* About & Schedule Section */}
      <section className="py-20 px-6 md:px-32 bg-white text-gray-800 text-center space-y-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-4xl font-extrabold text-purple-700 mb-6">
            The Lagos Archdiocesan Block Rosary Crusade <br /> Congress is back!!!
          </h2>
          <p className="leading-relaxed text-lg max-w-3xl mx-auto">
            This time, Ipaja 2025 promises a spiritual explosion like never before — bringing together all deaneries in Lagos in a joyful, vibrant, prayerful congress. 
            With rich activities like Rosary Procession, Talk Shows, Confession, Holy Mass and Night Vigil with Our Mother Mary.
            <br />Every moment will ignite your faith and create lasting memories.
          </p>

          <div className="py-14 px-6 rounded-2xl bg-gradient-to-br from-purple-100 via-white to-purple-50 shadow-inner">
            <h2 className="text-3xl font-bold text-purple-800 mb-4">PROGRAM SCHEDULE</h2>
            <p className="text-center max-w-xl mx-auto mb-10 text-purple-700">
              Join us for three days of prayer, fellowship, and spiritual growth at the 2nd Lagos Archdiocesan Congress.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* DAY 1 */}
              <div className="bg-white border-l-4 border-purple-700 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2 text-purple-800">DAY 1: AUGUST 21, 2025</h3>
                <ul className="space-y-3 text-left text-sm">
                  <li><strong className="text-purple-700">8:00 AM - 9:30 AM</strong>: Registration & Welcome</li>
                  <li><strong className="text-purple-700">10:00 AM - 12:00 PM</strong>: Opening Mass</li>
                  <li><strong className="text-purple-700">1:00 PM - 3:00 PM</strong>: Keynote Address</li>
                </ul>
              </div>

              {/* DAY 2 */}
              <div className="bg-white border-l-4 border-yellow-500 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2 text-yellow-700">DAY 2: AUGUST 22, 2025</h3>
                <ul className="space-y-3 text-left text-sm">
                  <li><strong className="text-yellow-700">9:00 AM - 11:00 AM</strong>: Workshop & Talk Show</li>
                  <li><strong className="text-yellow-700">2:00 PM - 4:00 PM</strong>: Rosary Procession</li>
                  <li><strong className="text-yellow-700">10:00 PM - 5:00 AM</strong>: Night Vigil Mass</li>
                </ul>
              </div>

              {/* DAY 3 */}
              <div className="bg-white border-l-4 border-green-600 p-6 rounded-xl shadow">
                <h3 className="text-xl font-bold mb-2 text-green-700">DAY 3: AUGUST 23, 2025</h3>
                <ul className="space-y-3 text-left text-sm">
                  <li><strong className="text-green-700">9:00 AM - 11:00 AM</strong>: Thanksgiving Mass</li>
                  <li><strong className="text-green-700">12:00 PM - 2:00 PM</strong>: Closing Ceremony</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Badge Creator */}
      <BadgeCreator />

      {/* Special Announcement */}
      <section className="py-20 px-6 md:px-32 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-yellow-600 mb-10 text-center">📢 Advertise in Our Congress Brochure</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[
              { title: "Full Page", price: "₦25,000", image: "/images/full-page.png" },
              { title: "Half Page", price: "₦15,000", image: "/images/half-page.png" },
              { title: "Quarter Page", price: "₦10,000", image: "/images/quarter-page.png" },
              { title: "Inside Back Cover", price: "₦50,000", image: "/images/inside-back.png" },
              { title: "Outside Back Cover", price: "Highest Bidder", image: "/images/outside-back.png" },
              { title: "Inside Front Cover", price: "₦60,000", image: "/images/inside-front.png" },
              { title: "Front Strip", price: "₦70,000", image: "/images/front-strip.png" },
            ].map((slot, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
                <img src={slot.image} alt={slot.title} className="w-full h-40 object-cover" />
                <div className="p-4 text-center">
                  <h4 className="font-bold text-purple-700">{slot.title}</h4>
                  <p className="text-yellow-700 font-semibold">{slot.price}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center text-sm text-gray-700 space-y-2">
          <p><em>Good will messages</em> — <strong>Compulsory for all deaneries</strong></p>
          <p>📸 Sponsorship of pictures - 2,000</p>
          <p>💳 Pay to: <strong>Block Rosary Crusade Catholic Archdiocese of Lagos</strong>, Fidelity Bank <strong>6220040881</strong></p>
          <p>📤 Send materials to <strong>me@francisOkaformbah.com</strong></p>
          <p>📲 Send proof of payment to <strong>08026017571</strong> on WhatsApp</p>
          <p className="text-red-600 font-bold">⏰ Deadline: Sunday, July 20th, 2025</p>
        </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white text-center py-16 px-6">
        <h2 className="text-2xl font-bold mb-4">Congress Prayer</h2>
        <p className="max-w-3xl mx-auto italic">
          "O Blessed Virgin Mary, Queen of the Most Holy Rosary, guide us as we gather for this Congress.
          Lead us to the throne of grace, where we may receive mercy and find grace to help in time of need.
          Through your intercession, may this gathering bear abundant spiritual fruit in our lives and in our communities.
          We ask this through Christ our Lord. Amen."
        </p>
        <div className="mt-6 text-sm text-purple-300">
          Designed with ❤️ by <a href="https://wa.me/message/SG3TFAT2AT6OM1" target="_blank" className="underline text-white">Bro. Martins Samuel</a>
        </div>
      </footer>
    </div>
  );
}
