import React from 'react';
import useEmblaCarousel, { type EmblaCarouselType } from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import type { HeroSectionSliderProps } from '@/app/_components/hero-section-slider/hero-section-slider.types';
import Image from 'next/image';
import {
  DotButton,
  NextButton,
  PrevButton,
} from '@/app/_components/hero-section-slider/embla-carousel-buttons';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export const HeroSectionSlider: React.FC<HeroSectionSliderProps> = props => {
  // Destructure Props
  const { sliderItems }: HeroSectionSliderProps = props;

  // Use Hooks
  const { isMobile } = useMediaQuery();

  // States
  const [prevBtnDisabled, setPrevBtnDisabled] = React.useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  // Config embla
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()]);
  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = React.useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );
  const onInit = React.useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);
  const onSelect = React.useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);
  React.useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  return (
    <div className='relative embla w-full m-auto max-w-[2093px]'>
      <div
        className='embla__viewport'
        ref={emblaRef}>
        <div className='embla__container'>
          {sliderItems.map(({ src, title }, index) => (
            <div
              key={index}
              className='relative embla__slide'>
              <Image
                className='object-cover h-[176px] tablet:h-[200px] laptop:h-[240px] desktop:h-[336px]'
                width={2093}
                height={336}
                src={src}
                alt={title}
              />
              <span className='absolute inset-0 w-full h-full bg-black opacity-50'></span>
            </div>
          ))}
        </div>

        {!isMobile && (
          <React.Fragment>
            <PrevButton
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
            />

            <NextButton
              onClick={scrollNext}
              disabled={nextBtnDisabled}
            />
          </React.Fragment>
        )}

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={(): void => scrollTo(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
