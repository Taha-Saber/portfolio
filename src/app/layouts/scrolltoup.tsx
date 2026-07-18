import { ScrollToTop } from "@/shared/components/scroll";
import { ArrowUpToLine } from "lucide-react";

export default function Scroll() {
  return (
    <ScrollToTop
      minHeight={500} 
      scrollTo={0}
      className="fixed right-4 bottom-4
       z-50 bg-[#ff7a00] hover:bg-white text-white
        hover:text-[#ff7a00] border hover:border-[#ff7a00] shadow-lg p-2 rounded-full"
    >
      <ArrowUpToLine className="w-10 h-10" />
    </ScrollToTop>
  );
}
