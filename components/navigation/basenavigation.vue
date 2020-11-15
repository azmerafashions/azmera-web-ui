<template>
  <div
    class="hidden text-white text-2xl lg:flex lg:flex-row lg:justify-between lg:items-center"
  >
    <nuxt-link to="/"> Home </nuxt-link>
    <nuxt-link to="/blog"> Blog </nuxt-link>
    <navigationitem
      iconClasses="text-white text-2xl"
      linkClasses="text-white text-2xl"
      :mainmenu="{ name: 'Product', path: '' }"
    ></navigationitem>
    <nuxt-link to="/design"> Design </nuxt-link>
    <navigationitem
      iconClasses="text-white text-2xl"
      linkClasses="text-white text-2xl"
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
