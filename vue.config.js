// module.exports = {
//   publicPath:
//     process.env.NODE_ENV === "production"
//       ? "/vue-test-2020/" // vue-test-2020 為 repo 名稱
//       : "./dist/",
// };

const config = {
  filenameHashing: false,
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-test-2020/" // vue-test-2020 為 repo 名稱
      : "/",
};

module.exports = config;
