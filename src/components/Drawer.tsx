/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode } from "react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Drawer } from "vaul";

interface DrawerBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | ReactNode;
  content: ReactNode;
}

interface DrawerProps extends DrawerBaseProps {
  nestedDrawer?: DrawerBaseProps[];
}
const titleClassNames =
  "border-b-gray-60 flex flex-col z-40 items-center text-gray-10 fixed px-2 top-0 border-b-[0.5px] w-full bg-gray-100 pt-1 rounded-t-lg pb-1 text-base font-medium mb-4";

const DrawerDemo = ({
  isOpen,
  onClose,
  title,
  content,
  nestedDrawer,
}: DrawerProps) => {
  return (
    <Drawer.Root open={isOpen} onOpenChange={onClose}>
      <Drawer.Overlay className="animate-overlayShow fixed inset-0 z-60 bg-[rgba(9,9,10,0.75)]" />
      <Drawer.Portal>
        {/* <Drawer.Content className="border-gray-60 fixed right-0 bottom-0 left-0 z-70 flex h-fit max-h-[97%] flex-col rounded-t-lg border-[0.5px] bg-gray-100 shadow-[0px_10px_38px_-10px_hsla(206,22%,7%,0.35),0px_10px_20px_-15px_hsla(206,22%,7%,0.2)] outline-none">
          <BaseDrawer
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            content={content}
            nestedDrawer={nestedDrawer}
          />
        </Drawer.Content> */}
        <Drawer.Content className="bg-gray-100 flex flex-col z-80 rounded-t-[10px] mt-24 h-[80%] lg:h-[320px] fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-4 bg-white rounded-t-[10px] flex-1 overflow-y-auto">
            <div className="max-w-md mx-auto space-y-4">
              <div
                aria-hidden
                className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300 mb-8"
              />
              <Drawer.Title className="font-medium mb-4 text-gray-900">
                Ira Glass on Taste
              </Drawer.Title>
              <p className="text-gray-600">
                Nobody tells this to people who are beginners, I wish someone
                told me. All of us who do creative work, we get into it because
                we have good taste.
              </p>
              <p className="text-gray-600">
                But there is this gap. For the first couple years you make
                stuff, it’s just not that good. It’s trying to be good, it has
                potential, but it’s not. But your taste, the thing that got you
                into the game, is still killer. And your taste is why your work
                disappoints you. A lot of people never get past this phase, they
                quit.{" "}
              </p>
              <p className="text-gray-600">
                Most people I know who do interesting, creative work went
                through years of this. We know our work doesn’t have this
                special thing that we want it to have. We all go through this.
                And if you are just starting out or you are still in this phase,
                you gotta know its normal and the most important thing you can
                do is do a lot of work
              </p>
              <p className="text-gray-600">
                Put yourself on a deadline so that every week you will finish
                one story. It is only by going through a volume of work that you
                will close that gap, and your work will be as good as your
                ambitions. And I took longer to figure out how to do this than
                anyone I’ve ever met. It’s gonna take awhile. It’s normal to
                take awhile. You’ve just gotta fight your way through.
              </p>
            </div>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const BaseDrawer = ({ title, content, nestedDrawer, onClose }: DrawerProps) => {
  return (
    <>
      <div className="noScrollbar flex-1 overflow-y-auto rounded-t-[10px]">
        {title ? (
          <Drawer.Title className={titleClassNames}>
            <button
              aria-hidden
              className="bg-gray-40 mx-auto mt-2 mb-2 h-1.5 w-12 flex-shrink-0 rounded-full"
              onClick={onClose}
            />
            <div className="text-center">{title}</div>
          </Drawer.Title>
        ) : (
          <div className={titleClassNames}>
            <div
              aria-hidden
              className="bg-gray-40 mx-auto mt-2 mb-2 h-1.5 w-12 flex-shrink-0 rounded-full"
            />
            <VisuallyHidden asChild>
              <Drawer.Title>{title}</Drawer.Title>
            </VisuallyHidden>
          </div>
        )}
        <div className="relative mt-10 p-2">{content}</div>
      </div>

      {nestedDrawer?.map((nested) => (
        <Drawer.NestedRoot
          key={nested.title?.toString()}
          open={nested.isOpen}
          onOpenChange={nested.onClose}
        >
          <Drawer.Portal>
            <Drawer.Content className="border-gray-60 fixed right-0 bottom-0 left-0 z-70 flex h-fit max-h-[97%] flex-col rounded-t-lg border-[0.5px] bg-gray-100 shadow-[0px_10px_38px_-10px_hsla(206,22%,7%,0.35),0px_10px_20px_-15px_hsla(206,22%,7%,0.2)] outline-none">
              <Drawer.Title className={titleClassNames}>
                <div
                  aria-hidden
                  onClick={nested.onClose}
                  className="bg-gray-40 mx-auto mt-2 mb-2 h-1.5 w-12 flex-shrink-0 rounded-full"
                />
                <div className="text-center">{nested.title}</div>
              </Drawer.Title>
              <div className="relative mt-10 p-2">{nested.content}</div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.NestedRoot>
      ))}
    </>
  );
};

export default DrawerDemo;
