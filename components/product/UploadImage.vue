<template>
  <div class="">
    <label class="product-image" for="">choose pic</label>
    <input
      id="product-image"
      required
      type="file"
      name=""
      accept="image/png, image/jpeg"
      @change="getPreview($event)"
    />
    <div v-if="imageUrl && !sucess">
      <img class="w-48 h-48 m-4 rounded shadow" :src="imageUrl" alt="loading" />
      <div>
        <button
          type="button"
          @click="uploadImage"
          class="bg-blue-900 px-2 py-1 text-white rounded-lg"
        >
          Upload
        </button>
        <button
          type="button"
          @click="cancleImage($event)"
          class="bg-blue-900 px-2 py-1 text-white rounded-lg"
        >
          cancel
        </button>
      </div>
    </div>
    <div v-show="sucess">image upload sucessful!!!</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '',
      file: '',
      fireImage: '',
      sucess: false,
    }
  },

  methods: {
    cancleImage() {
      document.querySelector('#product-image').value = ''
      this.imageUrl = ''
      this.file = ''
    },
    getPreview(e) {
      this.sucess = ''
      this.file = e.target.files[0]
      if (this.file) {
        const reader = new FileReader()
        reader.onload = () => {
          this.imageUrl = reader.result
        }
        reader.readAsDataURL(this.file)
      }
    },
    async uploadImage() {
      document.querySelector('#product-image')

      if (this.file && this.file.type.match('image/*')) {
        const storageRef = this.$fire.storage
          .ref()
          .child(`products/${this.file.name}`)
        await storageRef
          .put(this.file)
          .then((res) => {
            res.ref.getDownloadURL().then((url) => {
              this.sucess = true
              this.$emit('sucess', url)
            })
          })
          .catch((e) => {
            console.log('err', e)
          })
      }
    },
  },
}
</script>

<style></style>
