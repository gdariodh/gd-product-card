# GD-product-card

Este es un paquete de pruebas de despliegue en NPM

## Gabriel Diaz

## Ejemplo

```
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "gd-product-card";
```

```
<ProductCard
        product={product}
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {({ reset, increaseBy, isMaxCountReached, count, maxCount }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
</ProductCard>
```
