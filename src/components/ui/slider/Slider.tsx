import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '.'

export type Props = {
  max?: number | undefined
  min?: number | undefined
  onValueChange: (value: number[]) => void
  value: number[]
}

export const Slider = (props: Props) => {
  const { max = 10, min, onValueChange, value } = props

  return (
    <div className={s.wrapperSlider}>
      <Typography as={'span'} className={s.sliderValue}>
        {value[0]}
      </Typography>
      <SliderRadix.Root
        className={s.sliderRoot}
        max={max}
        min={min}
        minStepsBetweenThumbs={1}
        onValueChange={onValueChange}
        step={1}
        value={value}
      >
        <SliderRadix.Track className={s.sliderTrack}>
          <SliderRadix.Range className={s.sliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={s.sliderThumb} />
        <SliderRadix.Thumb aria-label={'Volume'} className={s.sliderThumb} />
      </SliderRadix.Root>

      <Typography as={'span'} className={s.sliderValue}>
        {value[1]}
      </Typography>
    </div>
  )
}
