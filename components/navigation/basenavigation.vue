<template>
  <div
    class="hidden text-white text-xl lg:flex lg:flex-row lg:justify-between lg:items-center"
  >
    <nuxt-link to="/"> Home </nuxt-link>
    <nuxt-link to="/blog"> Blog </nuxt-link>
    <navigationitem
      iconClasses="text-white text-xl"
      linkClasses="text-white text-xl"
      :mainmenu="{ name: 'Product', path: '' }"
    >
      <div slot="submenu" class="">
        <div>Product1</div>
        <div>Product2</div>
        <div>Product3</div>
        <div>Product4</div>
      </div>
    </navigationitem>
    <nuxt-link to="/design"> Design </nuxt-link>
    <navigationitem
      iconClasses="text-white text-xl"
      linkClasses="text-white text-xl"
      :mainmenu="{ name: 'Join Us', path: '' }"
    >
      <div slot="submenu" class="">
        <div>zara</div>
        <div>zaha</div>
        <div>zahanara</div>
        <div>zan</div>
      </div>
    </navigationitem>
  </div>
</template>

<script>
import navigationitem from '@/components/navigation/navigationitem'

export default {
  components: {
    navigationitem,
  },
}
</script>

<style></style>
