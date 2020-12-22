<template>
  <cld-image
    type="fetch"
    fetchFormat="auto"
    quality="auto"
    :public-id="coverUrl"
    loading="lazy"
    :responsive="responsive"
  >
    <cld-transformation
      :height="height"
      :width="height"
      :gravity="gravity"
      :crop="crop"
      :aspectRatio="aspectRatio"
      :radius="radius"
    ></cld-transformation>
    <cld-placeholder type="blur"></cld-placeholder>
  </cld-image>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true,
    },
    height: {
      type: String,
    },
    width: {
      type: String,
    },
    responsive: {
      type: String,
    },
    gravity: {
      type: String,
    },
    crop: {
      type: String,
      default: 'scale',
    },
    aspectRatio: {
      type: String,
    },
    radius: {
      type: String,
    },
  },

  computed: {
    coverUrl() {
      return 'http://strapi.acm.mcl-ccis.net' + this.imgUrl
    },
  },
}
</script>
