import s from './select.module.scss'

import { SelectRadix } from '.'

export const Select = () => {
  return (
    <SelectRadix.Root>
      <SelectRadix.Trigger className={s.trigger}>
        <SelectRadix.Value className={s.value} />
        <SelectRadix.Icon className={s.icon} />
      </SelectRadix.Trigger>

      <SelectRadix.Portal>
        <SelectRadix.Content className={s.content}>
          <SelectRadix.ScrollUpButton className={s.upIcon} />
          <SelectRadix.Viewport className={s.viewport}>
            <SelectRadix.Item className={s.item} value={'hello'}>
              <SelectRadix.ItemText className={s.itemText} />
              <SelectRadix.ItemIndicator className={s.itemIndicator} />
            </SelectRadix.Item>

            <SelectRadix.Group className={s.group}>
              <SelectRadix.Label className={s.label} />
              <SelectRadix.Item className={s.item} value={'hello'}>
                <SelectRadix.ItemText className={s.itemText} />
                <SelectRadix.ItemIndicator className={s.itemIndicator} />
              </SelectRadix.Item>
            </SelectRadix.Group>

            <SelectRadix.Separator className={s.separator} />
          </SelectRadix.Viewport>
          <SelectRadix.ScrollDownButton className={s.iconDown} />
          <SelectRadix.Arrow className={s.arrow} />
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
  )
}
