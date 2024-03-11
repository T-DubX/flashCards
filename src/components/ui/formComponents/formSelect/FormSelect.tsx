import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Props, Select } from '.'

export type FormSelectProps<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>
  name: FieldPath<TFieldValues>
} & Omit<Props, 'onValueChange' | 'value'>

export const FormSelect = <TFieldValues extends FieldValues>(
  props: FormSelectProps<TFieldValues>
) => {
  const {
    field: { onChange, value, ...field },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <Select {...props} {...field} onValueChange={onChange} value={value} />
}
