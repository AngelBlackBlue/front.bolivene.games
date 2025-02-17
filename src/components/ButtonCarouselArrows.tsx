import { useCarousel } from "@/components/ui/carousel";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ButtonCarouselArrows = () => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();

  return (
    <>
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#3a009dd3] border-transparent p-2 rounded-full hover:bg-[#f20038b0] transition ${
          !canScrollPrev ? "hidden" : "" 
        }`}
      >
        <ArrowLeft className="h-6 w-6 text-white" />
        <span className="sr-only">Anterior</span>
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#3a009dd3] border-transparent p-2 rounded-full hover:bg-[#f20038b0] transition ${
          !canScrollNext ? "hidden" : "" 
        }`}
      >
        <ArrowRight className="h-6 w-6 text-white" />
        <span className="sr-only">Siguiente</span>
      </button>
    </>
  );
}

export default ButtonCarouselArrows;