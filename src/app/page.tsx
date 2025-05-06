"use client";
import { useState } from "react";

import VaulDrawer from "@/components/Drawer";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(true)}>Trigerrr</button>
      <VaulDrawer
        content={
          <p className="text-black">
            Hello Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem, corrupti, dolor ut dolorem laborum unde praesentium
            sapiente temporibus modi consectetur repudiandae, quod
            necessitatibus! Exercitationem, accusantium id consequuntur neque
            maxime officiis adipisci commodi in beatae dolor eum. Corporis quis
            veritatis doloribus, dolorem quisquam atque quidem adipisci ipsam,
            magnam natus mollitia exercitationem.{" "}
          </p>
        }
        title="Test Drawer"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
