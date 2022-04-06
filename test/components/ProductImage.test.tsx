import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  
    test('ProductImage debe mostrar el componente con la imagen', () => {
        const wrapper = renderer.create(
            <ProductImage img={product2.img} className="custom-class"/>
        );

        expect(wrapper.toJSON()).toMatchSnapshot()
    });

    test('debe de mostrar el componente con la imagen pero con context', () => {
      
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot()
    })
})