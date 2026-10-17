import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { heroSlides } from '../../data/slides.js'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

/**
 * Герой-слайдер главной страницы (Swiper)
 *
 * @param {Object} props
 * @param {Array} [props.slides] - Слайды с изображением, заголовком и описанием
 * @param {Function} [props.onDetailsClick] - Коллбек кнопки «Узнать подробнее»
 * @param {string} [props.className] - Дополнительные CSS-классы
 */
export default function HeroSlider({
  slides = heroSlides,
  onDetailsClick,
  className = '',
}) {
  return (
    <section className={`relative overflow-hidden rounded-3xl bg-slate-200 dark:bg-slate-800 ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        loop
        observer
        observeParents
        watchOverflow={false}
        speed={700}
        slidesPerView={1}
        navigation={{
          prevEl: '.hero-swiper-prev',
          nextEl: '.hero-swiper-next',
        }}
        pagination={{
          el: '.hero-swiper-pagination',
          clickable: true,
        }}
        className="hero-swiper h-[420px] sm:h-[480px] lg:h-[540px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <article className="relative h-full w-full">
              <img
                src={slide.image}
                alt={slide.imageAlt}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-r from-slate-900/55 via-slate-900/25 to-transparent" />

              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl px-8 sm:px-14 lg:px-20">
                  <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-4 max-w-md text-sm sm:text-base font-normal text-white/90 leading-relaxed">
                    {slide.description}
                  </p>
                  <button
                    type="button"
                    onClick={() => onDetailsClick?.(slide)}
                    className="mt-7 inline-flex items-center justify-center rounded-full bg-rose-500 hover:bg-rose-600 active:bg-rose-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}

        <div
          slot="container-end"
          className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex items-center justify-center gap-4"
        >
          <button
            type="button"
            aria-label="Предыдущий слайд"
            className="hero-swiper-prev pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-slate-900/80 dark:hover:bg-slate-900 dark:text-slate-100 dark:hover:text-white dark:focus-visible:ring-slate-200"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          <div className="hero-swiper-pagination pointer-events-auto" />

          <button
            type="button"
            aria-label="Следующий слайд"
            className="hero-swiper-next pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900 dark:bg-slate-900/80 dark:hover:bg-slate-900 dark:text-slate-100 dark:hover:text-white dark:focus-visible:ring-slate-200"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </Swiper>
    </section>
  )
}
