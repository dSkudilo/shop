import { useField } from 'vee-validate'
import * as yup from 'yup'
export function useProductFields () {
  const { value: name, errorMessage: nError, handleBlur: nBlur } = useField(
    'name',
    yup
      .string()
      .trim()
      .required('Укажите название !')
  )
  const { value: price, errorMessage: pError, handleBlur: pBlur } = useField(
    'price',
    yup
      .string()
      .trim()
      .required('Укажите цену !')
  )
  const { value: number, errorMessage: numberError, handleBlur: numberBlur } = useField(
    'number',
    yup
      .string()
      .trim()
      .required('Укажите кол-во !')
  )
  const { value: category, errorMessage: catError } = useField(
    'category',
    yup
      .string()
      .trim()
      .required('Нужно выбрать категорию !')
  )
  const { value: brand, errorMessage: bError } = useField(
    'brand',
    yup
      .string()
      .trim()
      .required('Нужно выбрать бренд !')
  )
  const { value: size, errorMessage: sError } = useField(
    'size',
    yup
      .array()
      .min(1)
      .required('Укажите размеры !')
  )
  const { value: colors, errorMessage: cError } = useField(
    'colors',
    yup
      .array()
      .min(1)
      .required('Укажите цвета !')
  )
  return {
    name,
    nError,
    nBlur,
    price,
    pError,
    pBlur,
    number,
    numberError,
    numberBlur,
    category,
    catError,
    brand,
    bError,
    size,
    sError,
    colors,
    cError
  }
}
