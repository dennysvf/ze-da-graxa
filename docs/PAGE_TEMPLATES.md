# Templates de Página - Zé da Graxa

## Índice
1. [Home Page](#1-home-page)
2. [Página de Categoria](#2-página-de-categoria)
3. [Página de Produto](#3-página-de-produto)
4. [Carrinho](#4-carrinho)
5. [Checkout](#5-checkout)
6. [Área do Cliente](#6-área-do-cliente)
7. [Boas Práticas](#7-boas-práticas)

## 1. Home Page

### 1.1 Estrutura Base
```tsx
<PublicLayout>
  <Head>
    <title>Zé da Graxa - Autopeças e Acessórios</title>
    <meta name="description" content="Encontre as melhores autopeças e acessórios para seu veículo" />
  </Head>

  <HeroSection>
    <VehicleSearch />
    <CategoryHighlights />
  </HeroSection>
  
  <FeaturedProducts 
    title="Mais Vendidos"
    products={bestSellers}
    viewAllLink="/produtos/mais-vendidos"
  />
  
  <CategoryShowcase 
    categories={mainCategories}
    layout="grid"
  />
  
  <PromotionBanner />
  
  <BrandsShowcase 
    brands={brands}
    variant="carousel"
  />

  <NewsletterSection />
</PublicLayout>
```

### 1.2 Componentes Principais
```typescript
interface HeroSectionProps {
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
}

interface VehicleSearchProps {
  onSearch: (params: VehicleSearchParams) => void;
  recentSearches?: VehicleSearch[];
  loading?: boolean;
}

interface CategoryShowcaseProps {
  categories: Category[];
  layout: 'grid' | 'list' | 'carousel';
  maxItems?: number;
  showViewAll?: boolean;
}
```

## 2. Página de Categoria

### 2.1 Estrutura Base
```tsx
<PublicLayout>
  <Head>
    <title>{category.name} - Zé da Graxa</title>
    <meta name="description" content={category.description} />
  </Head>

  <Breadcrumb items={breadcrumbItems} />
  
  <CategoryHeader
    title={category.name}
    description={category.description}
    image={category.image}
  />
  
  <div className={styles.categoryLayout}>
    <aside className={styles.filters}>
      <ProductFilters 
        filters={filters}
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange}
        loading={filtersLoading}
      />
    </aside>
    
    <main className={styles.products}>
      <ProductListHeader>
        <ResultCount count={totalProducts} />
        <SortSelect 
          value={sortBy}
          onChange={handleSortChange}
        />
      </ProductListHeader>

      <ProductGrid 
        products={products}
        loading={loading}
        columns={{ sm: 2, md: 3, lg: 4 }}
      />

      <Pagination 
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </main>
  </div>
</PublicLayout>
```

## 3. Página de Produto

### 3.1 Estrutura Base
```tsx
<PublicLayout>
  <Head>
    <title>{product.name} - Zé da Graxa</title>
    <meta name="description" content={product.description} />
    <meta property="og:image" content={product.images[0]} />
  </Head>

  <Breadcrumb items={breadcrumbItems} />
  
  <div className={styles.productLayout}>
    <ProductGallery 
      images={product.images}
      variant="zoom"
    />
    
    <div className={styles.productInfo}>
      <ProductHeader>
        <Typography variant="h1">{product.name}</Typography>
        <ProductCode code={product.code} />
        <ProductRating rating={product.rating} reviews={product.reviews} />
      </ProductHeader>
      
      <PriceSection>
        <Price 
          value={product.price}
          discount={product.discount}
        />
        <Installments 
          price={product.price}
          maxInstallments={12}
        />
      </PriceSection>
      
      <AddToCartSection>
        <QuantitySelector
          value={quantity}
          onChange={setQuantity}
          max={product.stock}
        />
        <AddToCartButton
          onClick={handleAddToCart}
          loading={addingToCart}
        />
        <WishlistButton
          productId={product.id}
          variant="outline"
        />
      </AddToCartSection>

      <ProductTabs>
        <Tab label="Descrição">
          <ProductDescription content={product.description} />
        </Tab>
        <Tab label="Especificações">
          <SpecificationList items={product.specifications} />
        </Tab>
        <Tab label="Avaliações">
          <ReviewList reviews={product.reviews} />
        </Tab>
      </ProductTabs>
    </div>

    <RelatedProducts
      products={relatedProducts}
      title="Produtos Relacionados"
    />
  </div>
</PublicLayout>
```

## 4. Carrinho

### 4.1 Estrutura Base
```tsx
<PublicLayout hideFooter>
  <Head>
    <title>Carrinho - Zé da Graxa</title>
  </Head>

  <div className={styles.cartLayout}>
    <main className={styles.items}>
      <CartHeader itemCount={items.length} />
      
      <CartItemList>
        {items.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            onRemove={handleRemove}
          />
        ))}
      </CartItemList>

      <CartActions>
        <ContinueShopping />
        <ClearCart onClick={handleClear} />
      </CartActions>
    </main>

    <aside className={styles.summary}>
      <CartSummary
        subtotal={subtotal}
        shipping={shipping}
        discount={discount}
        total={total}
      />
      
      <ShippingCalculator
        onCalculate={handleCalculateShipping}
        loading={calculatingShipping}
      />

      <CheckoutButton
        onClick={handleCheckout}
        disabled={items.length === 0}
      />
    </aside>
  </div>
</PublicLayout>
```

## 5. Checkout

### 5.1 Estrutura Base
```tsx
<CheckoutLayout step={currentStep}>
  <Head>
    <title>Checkout - Zé da Graxa</title>
  </Head>

  <CheckoutProgress currentStep={currentStep} />

  <div className={styles.checkoutLayout}>
    <main className={styles.content}>
      {currentStep === 'address' && (
        <AddressStep
          addresses={addresses}
          selectedAddress={selectedAddress}
          onAddressSelect={handleAddressSelect}
          onAddAddress={handleAddAddress}
        />
      )}

      {currentStep === 'shipping' && (
        <ShippingStep
          methods={shippingMethods}
          selected={selectedShipping}
          onSelect={handleShippingSelect}
        />
      )}

      {currentStep === 'payment' && (
        <PaymentStep
          methods={paymentMethods}
          selected={selectedPayment}
          onSelect={handlePaymentSelect}
          installments={availableInstallments}
        />
      )}

      {currentStep === 'confirmation' && (
        <ConfirmationStep
          order={order}
          address={selectedAddress}
          shipping={selectedShipping}
          payment={selectedPayment}
        />
      )}
    </main>

    <aside className={styles.summary}>
      <OrderSummary
        items={items}
        shipping={shipping}
        payment={payment}
        total={total}
      />
    </aside>
  </div>

  <CheckoutActions>
    <BackButton onClick={handleBack} />
    <NextButton 
      onClick={handleNext}
      loading={processing}
    />
  </CheckoutActions>
</CheckoutLayout>
```

## 6. Área do Cliente

### 6.1 Estrutura Base
```tsx
<CustomerLayout activeMenu={activeMenu}>
  <Head>
    <title>Minha Conta - Zé da Graxa</title>
  </Head>

  <CustomerHeader
    user={user}
    notifications={notifications}
  />

  {activeMenu === 'profile' && (
    <ProfileSection>
      <PersonalInfo user={user} onUpdate={handleUpdateProfile} />
      <ChangePassword onSubmit={handlePasswordChange} />
    </ProfileSection>
  )}

  {activeMenu === 'orders' && (
    <OrdersSection>
      <OrderFilters
        status={filterStatus}
        date={filterDate}
        onChange={handleFilterChange}
      />
      <OrderList
        orders={orders}
        loading={loadingOrders}
        onPageChange={handlePageChange}
      />
    </OrdersSection>
  )}

  {activeMenu === 'addresses' && (
    <AddressSection>
      <AddressList
        addresses={addresses}
        onEdit={handleEditAddress}
        onDelete={handleDeleteAddress}
      />
      <AddAddressButton onClick={handleAddAddress} />
    </AddressSection>
  )}

  {activeMenu === 'wishlist' && (
    <WishlistSection>
      <ProductGrid
        products={wishlistItems}
        onRemove={handleRemoveFromWishlist}
      />
    </WishlistSection>
  )}
</CustomerLayout>
```

## 7. Boas Práticas

### 7.1 Performance
- Usar Next.js Image para otimização de imagens
- Implementar lazy loading para componentes pesados
- Manter bundle size controlado
- Usar SSR/SSG quando apropriado

### 7.2 SEO
- Incluir meta tags apropriadas
- Usar estrutura semântica
- Implementar Schema.org
- Otimizar para web vitals

### 7.3 Acessibilidade
- Seguir WCAG 2.1
- Implementar navegação por teclado
- Usar ARIA labels
- Manter contraste adequado

### 7.4 Responsividade
- Design mobile-first
- Breakpoints consistentes
- Layouts adaptáveis
- Touch-friendly

### 7.5 Estado e Cache
- Usar React Query para cache
- Implementar loading states
- Tratar erros adequadamente
- Feedback visual claro

### 7.6 Formulários
- Validação client-side
- Feedback em tempo real
- Tratamento de erros
- Auto-save quando apropriado
