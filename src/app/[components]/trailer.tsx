import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import YouTube from "react-youtube";
import Autoplay from "embla-carousel-autoplay";
// import { Props } from "next/script";
type Props = {
  open: boolean;
  onopenChange: (open: boolean) => void;
  videoId: string | null;
};

export default function Trailer({ open, onopenChange, videoId }: Props) {
  return (
    <div>
      <Dialog open={open} onOpenChange={onopenChange}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {videoId && (
            <YouTube
              videoId={videoId}
              opts={{
                width: "100%",
                heigth: "520",
                playerVars: {
                  autoplay: 1,
                },
              }}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
