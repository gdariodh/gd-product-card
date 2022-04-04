import React,{ CSSProperties, useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  activeBtnClass?: string;
  style?: CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  const { counter, increaseBy, maxCount } = useContext(ProductContext);

  // devuelve true o false, comprobamos si existe maxCount, y si es igual al counter
  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  // TODO: NOTA -> !! sirve para negar es decir si es undefined le aplica el !! y lo vuelve false
  // y asi lo mantenemos true o false

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
