"use client";

import { Drawer } from "vaul";

export default function VaulDrawer() {
  return (
    <Drawer.Root>
      <Drawer.Trigger>Open Drawer</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 h-fit fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque aut
            unde modi accusantium deserunt quisquam dolores cumque aspernatur
            repudiandae voluptates quibusdam commodi animi itaque rem soluta
            laborum necessitatibus, accusamus perferendis omnis, harum nesciunt
            fugit? Deserunt distinctio vitae molestiae, pariatur, reiciendis
            praesentium assumenda quas libero aut maxime quasi! Deleniti nostrum
            explicabo numquam odit, est sint. Modi rem pariatur, non, excepturi
            sit nihil quisquam in ipsa unde magnam aspernatur aliquam eius harum
            sed sunt tempora illo totam quidem aperiam quis tenetur quam, ad
            corporis repellat? In omnis, officia soluta labore repudiandae
            assumenda minus ducimus, tempore id incidunt dolorum. Nemo totam
            nisi velit vel a? Maxime reiciendis optio rerum libero voluptatibus
            eos amet facere, nam nostrum et illum nisi beatae eum. Quam nemo
            porro repellendus dolorem magni accusamus tempore, adipisci fugit,
            ipsa commodi dicta! Magnam laboriosam repudiandae totam. Nihil,
            impedit? Blanditiis minima nisi vel provident in cumque, ratione
            facere perspiciatis officiis aut deleniti dolores recusandae ullam
            suscipit soluta ipsam fugit veritatis et neque vero minus amet!
            Dignissimos ratione dicta quasi porro nesciunt iusto placeat ipsa
            quisquam voluptatem, at modi minus neque iste quia sapiente magnam
            odio natus voluptas assumenda praesentium quam tempora aperiam
            officiis numquam. Maiores quam labore, atque sapiente eum blanditiis
            praesentium.
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
