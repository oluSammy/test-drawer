"use client";
import { useState } from "react";

import VaulDrawer from "@/components/Drawer";
import TVaulDrawer from "@/components/TDrawer";

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
            magnam natus mollitia exercitationem. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Molestias, ab odio. Autem pariatur
            adipisci dignissimos sit blanditiis quidem sequi? Voluptatum commodi
            molestiae exercitationem dolore accusantium illo itaque nulla a. Aut
            ratione odit, dolores quisquam corrupti saepe qui excepturi tempore
            assumenda commodi ex necessitatibus similique dolore eaque minus,
            praesentium esse iste. Doloribus ut provident vel doloremque
            voluptates perferendis iusto? Numquam voluptatem porro ducimus aut
            non sequi rem placeat. Rerum sunt deleniti consequuntur, temporibus
            repellat minima provident incidunt porro laudantium eos illo et,
            sint, laboriosam facilis natus voluptatibus exercitationem nisi id
            soluta. Nemo exercitationem at ex quia repudiandae in doloremque,
            consequuntur non, asperiores autem cum facilis necessitatibus
            reiciendis eligendi omnis velit aliquid quo eius quibusdam animi
            quam perferendis cumque rerum quis. Molestiae ducimus nostrum ipsam
            possimus delectus facere nemo aut laborum, libero dolore ut impedit
            cumque! Consequuntur quod asperiores, nulla eos labore debitis
            pariatur autem quia commodi facilis, provident mollitia beatae
            accusamus. Doloremque dicta itaque deserunt aliquam commodi quas
            libero officia nam provident, autem nulla voluptate, corrupti
            placeat reiciendis sit quaerat voluptatibus odit quia mollitia
            dolorem? Tempora eum doloribus laudantium rerum dolorem iste, fugiat
            sint molestiae odio beatae necessitatibus adipisci ex quos dolores
            sed distinctio nostrum id omnis magni eaque quidem ipsa! Ex, quasi
            molestiae voluptas harum asperiores explicabo expedita unde nisi cum
            accusantium beatae enim distinctio, culpa ratione aliquam quos
            officiis recusandae minima. Ipsam cumque atque, neque possimus
            recusandae earum minima in velit porro modi nam omnis veniam iusto,
            soluta eius hic impedit natus sit doloremque debitis eos.
            Laboriosam, praesentium magni explicabo doloremque veritatis tenetur
            veniam neque totam nesciunt fuga ea ducimus quasi ab cupiditate sunt
            distinctio omnis molestiae doloribus aliquam similique
            exercitationem, illum, excepturi consectetur? Distinctio explicabo
            id quae, accusantium quaerat cum totam quis deleniti voluptates
            quibusdam! Doloribus accusamus suscipit voluptate sed libero
            consequatur labore ab modi. Architecto veritatis consequuntur dolor
            magni molestiae temporibus? Consectetur doloremque nihil cumque quam
            laudantium, dolore repellat? Blanditiis nulla cumque quae maiores
            veritatis suscipit tempora dignissimos non repudiandae atque, minima
            libero perferendis, quisquam odit! Sint quo eveniet cupiditate dicta
            quia aliquid qui sit maxime, dolorem vero minima eius accusantium
            consequuntur, numquam, doloribus in fugiat aliquam ullam eligendi
            earum rem quasi placeat. Sunt facilis soluta quidem corporis
            reprehenderit quo dicta est consequatur perspiciatis minima suscipit
            sit alias, corrupti distinctio! Est ducimus ipsa unde nemo
            temporibus doloribus deleniti facilis autem corporis. Aspernatur
            facere iure, dolore aliquid voluptatum omnis at expedita quibusdam
            nobis quia alias provident temporibus molestias amet obcaecati
            veritatis. Tempore reprehenderit eius error adipisci voluptas nam
            accusantium ipsa dolorem animi est enim nostrum ducimus, voluptates,
            deserunt magni. Quis temporibus exercitationem architecto! Totam,
            harum soluta esse porro earum consequatur dicta. Suscipit odit
            provident itaque doloribus, quam harum labore quasi iusto omnis
            laboriosam magni, nihil quae! Quo praesentium commodi provident
            obcaecati architecto exercitationem. Sit, velit accusamus ex illum
            molestias, nobis cum reiciendis dolorum neque necessitatibus quod
            incidunt assumenda dicta laboriosam beatae libero vero asperiores
            commodi delectus quo quam aut. Consequuntur saepe tempore fugit
            voluptatum quia commodi vero quaerat eaque minima harum nihil
            aliquid sequi beatae voluptas tempora perferendis, eligendi suscipit
            et corrupti asperiores. Harum consequuntur recusandae ex sequi
            delectus iusto accusamus ab inventore reprehenderit, nisi modi odit
            esse aperiam saepe quae enim quo animi repudiandae ducimus? Animi
            reprehenderit sed aut inventore maxime amet ad ratione, quo
            voluptatibus aliquid cumque quaerat architecto dolore quasi! Quaerat
            iste id consequuntur. Voluptate vitae sunt sit quisquam tenetur
            quaerat dignissimos incidunt fugit voluptatibus animi quae sint
            natus provident reiciendis soluta eveniet voluptas ipsa odit illum
            placeat, fugiat cumque. Voluptas at harum a, accusantium velit
            cupiditate accusamus nisi eius beatae itaque magnam voluptate eaque
            non veniam tempore, cum iste nostrum illo. Explicabo, recusandae
            vel.
          </p>
        }
        title="Test Drawer"
        isOpen={open}
        onClose={() => setOpen(false)}
      />
      ------
      <TVaulDrawer />
    </div>
  );
}
