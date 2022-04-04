import { useEffect, useRef, useState } from "react";
import { InitialValues, onChangeArgs, Product } from "../interfaces/interfaces";

interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = (args: useProductArgs) => {
  const { onChange, product, value = 0, initialValues } = args;

  // hacer seguimiento cuando el hook o component es montado con useRef
  const isMounted = useRef(false);

  // el comodin ? pregunta si viene lo ulitiza el .count o sino usa el otro ||
  const [counter, setCounter] = useState<number>(initialValues?.count || value);

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);

    // limitar agregar carrito
    if (initialValues?.maxCount) {
      newValue = Math.min(newValue, initialValues.maxCount);
    }

    setCounter(newValue);

    onChange && onChange({ count: newValue, product });
  };

  const reset = () => {
    setCounter(initialValues?.count || value)
  }


  useEffect(() => {
    // solo ejecutar el setCounter cuando este montado el component o hook
    if (!isMounted.current) return;

    setCounter(value);
  }, [value]);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return {
    counter,
    maxCount: initialValues?.maxCount,
    // regresa un boolean
    isMaxCountReached:
      !!initialValues?.count && initialValues.maxCount === counter,
    increaseBy,
    reset
  };
};
