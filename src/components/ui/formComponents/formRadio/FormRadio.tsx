import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioProps } from '.'

type Props<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioProps, 'onValueChange' | 'value'>

export const FormRadioGroup = <T extends FieldValues>({ control, name, ...rest }: Props<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
  })

  return <RadioGroup name={name} onValueChange={onChange} value={value} {...rest} />
}
