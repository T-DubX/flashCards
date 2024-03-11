import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input, InputProps } from '.'

export type FormInputProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputProps, 'id' | 'onChange' | 'value'>

export const FormInput = <T extends FieldValues>(props: FormInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <Input {...props} {...field} errorMessage={error?.message} id={props.name} />
}
