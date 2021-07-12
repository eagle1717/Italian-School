module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/" : "/",
  lintOnSave: false,
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `@import "~@/assets/scss/_includes.scss";`
      }
    }
  }
};