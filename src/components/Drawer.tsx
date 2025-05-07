/* eslint-disable @typescript-eslint/no-unused-vars */

import { ReactNode, useRef, useEffect, RefObject } from "react";
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

// Visual Viewport helper hook for iOS devices
// Fixes issues with the drawer content not showing behind the virtual keyboard
const useVisualViewport = (elementRef: RefObject<HTMLDivElement | null>) => {
  useEffect(() => {
    // Skip if not supported or ref not attached
    if (!window.visualViewport || !elementRef.current) return;

    const OFFSET = 40; // Offset from the top of the viewport
    const visualViewport = window.visualViewport; // Store reference for TypeScript

    function onVisualViewportChange() {
      if (!elementRef.current || !visualViewport) return;

      const visualViewportHeight = visualViewport.height;

      // Difference between window height and height excluding the keyboard
      const diffFromInitial = window.innerHeight - visualViewportHeight;

      // Update drawer position to stay above the keyboard
      elementRef.current.style.height = `${visualViewportHeight - OFFSET}px`;
      elementRef.current.style.bottom = `${Math.max(diffFromInitial, 0)}px`;
    }

    // Add event listener for visual viewport changes
    visualViewport.addEventListener("resize", onVisualViewportChange);

    // Clean up
    return () => {
      if (visualViewport) {
        visualViewport.removeEventListener("resize", onVisualViewportChange);
      }
    };
  }, [elementRef]);
};

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
        <Drawer.Content className="border-gray-60 fixed right-0 bottom-0 left-0 z-70 flex h-fit max-h-[97%] flex-col rounded-t-lg border-[0.5px] bg-gray-100 shadow-[0px_10px_38px_-10px_hsla(206,22%,7%,0.35),0px_10px_20px_-15px_hsla(206,22%,7%,0.2)] outline-none">
          <BaseDrawer
            isOpen={isOpen}
            onClose={onClose}
            title={title}
            content={content}
            nestedDrawer={nestedDrawer}
          />
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

const BaseDrawer = ({ title, content, nestedDrawer, onClose }: DrawerProps) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Apply visual viewport handling
  useVisualViewport(drawerRef);

  return (
    <>
      <div
        className="noScrollbar flex-1 overflow-y-auto rounded-t-[10px]"
        ref={drawerRef}
      >
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
              <NestedDrawerContent
                title={nested.title}
                content={nested.content}
                onClose={nested.onClose}
              />
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.NestedRoot>
      ))}
    </>
  );
};

// Separate component for nested drawer content to apply the same iOS fixes
const NestedDrawerContent = ({
  title,
  content,
  onClose,
}: {
  title: string | ReactNode;
  content: ReactNode;
  onClose: () => void;
}) => {
  const nestedDrawerRef = useRef<HTMLDivElement>(null);

  // Apply same visual viewport handling to nested drawers
  useVisualViewport(nestedDrawerRef);

  return (
    <div
      className="noScrollbar flex-1 overflow-y-auto rounded-t-[10px]"
      ref={nestedDrawerRef}
    >
      <Drawer.Title className={titleClassNames}>
        <div
          aria-hidden
          onClick={onClose}
          className="bg-gray-40 mx-auto mt-2 mb-2 h-1.5 w-12 flex-shrink-0 rounded-full"
        />
        <div className="text-center">{title}</div>
      </Drawer.Title>
      <div className="relative mt-10 p-2">{content}</div>
    </div>
  );
};

export default DrawerDemo;
