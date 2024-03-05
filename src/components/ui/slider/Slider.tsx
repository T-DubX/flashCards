import * as SliderRadix from '@radix-ui/react-slider'

import s from './slider.module.scss'

import { Typography } from '.'

export type Props = {
  max: number
  min: number
  onValueChange: (value: number[]) => void
  value: number[]
}

export const Slider = (props: Props) => {
  const { max, min, onValueChange, value } = props

  return (
    <div className={s.wrapperSlider}>
      <Typography as={'span'} className={s.sliderValue}>
        {value[0]}
      </Typography>
      <SliderRadix.Root
        className={s.SliderRoot}
        defaultValue={[10, 90]}
        max={max}
        min={min}
        minStepsBetweenThumbs={1}
        onValueChange={onValueChange}
        step={1}
        value={value}
      >
        <SliderRadix.Track className={s.SliderTrack}>
          <SliderRadix.Range className={s.SliderRange} />
        </SliderRadix.Track>
        <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
        <SliderRadix.Thumb aria-label={'Volume'} className={s.SliderThumb} />
      </SliderRadix.Root>

      <Typography as={'span'} className={s.sliderValue}>
        {value[1]}
      </Typography>
    </div>
  )
}
