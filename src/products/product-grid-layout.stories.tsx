import type { Meta, StoryObj } from "@storybook/react";
import { ProductGridLayout } from "#tp-kit/components/products/product-grid-layout";
import { ProductCardLayout } from "#tp-kit/components/products/product-card-layout";
import { PRODUCTS_CATEGORY_DATA } from "#tp-kit/data";
import { Button } from "#tp-kit/components/button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Products/ProductGridLayout",
  component: ProductGridLayout,
  tags: ["autodocs"],
  args: {
    products: PRODUCTS_CATEGORY_DATA[0].products.slice(1, 4),
  }
} satisfies Meta<typeof ProductGridLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (product) => <>{product.name}</>,
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "La grille en elle-même n'apporte pas grand chose, elle sert juste à disposer de manière responsive les composants qui lui sont passés.",
      },
      // Customize the code snippet shown in the "Show Code" section
      source: {
        code: `<ProductGridLayout products={products}>
  {(product) => <>{product.name}</>}
</ProductGridLayout>`,
        language: 'jsx',
        type: 'auto',
      },
    },
  }
}

export const WithCards: Story = {
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Vous pouvez utiliser n'importe quel composant pour l'affichage du produit. Ici, nous utilisons des `<ProductCardLayout />`",
      },
      // Customize the code snippet shown in the "Show Code" section
      source: {
        code: `<ProductGridLayout products={products}>
  {(product) => <ProductCardLayout
    product={product}
    button={
      <Button variant={"ghost"} fullWidth>
        Ajouter au panier
      </Button>
    }
  />}
</ProductGridLayout>`,
        language: 'jsx',
        type: 'auto',
      },
    },
  },
  args: {
    children: (product) => (
      <ProductCardLayout
        product={product}
        button={
          <Button variant={"ghost"} fullWidth>
            Ajouter au panier
          </Button>
        }
      />
    ),
  },
};
