<template>
  <section class="relative overflow-hidden bg-primary hero">
    <Particles />
    <div class="z-50 max-w-screen-xl mx-auto">
      <div class="relative pb-8 md:pb-12 lg:pb-20">
        <main
          class="max-w-screen-xl px-16 mx-auto mt-8 sm:px-24 md:mt-20 lg:px-40 hero-body"
        >
          <ImageComponent :img-url="coverUrl" responsive="width" />
        </main>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    coverUrl: {
      type: String,
      required: true,
    },
  },
  // async fetch() {
  //   const url = 'http://strapi.acm.mcl-ccis.net/'
  //   this.coverUrl = await this.$cloudinary.image.fetchRemote(url + this.cover, {
  //     client_hints: true,
  //     transformation: [
  //       {
  //         fetchFormat: 'auto',
  //         quality: 'auto',
  //         width: 'auto',
  //         crop: 'scale',
  //       },
  //     ],
  //   })
  // },
}
</script>

<style lang="scss">
.hero {
  width: 100%;
  height: 100%;

  div[id^='particles-instance-'] {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    min-height: 200px;

    @screen md {
      min-height: 303px;
    }

    @screen lg {
      min-height: 374px;
    }

    @screen xl {
      min-height: 452px;
    }
  }
}
</style>
