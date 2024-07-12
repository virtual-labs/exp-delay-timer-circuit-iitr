importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"cd2bcc63369f82702340cbc2281c38d1","url":"assets/js/assessment_v2.js"},{"revision":"0c6c2d6c8bd1ff223774dc9689ee7788","url":"assets/js/assessment.js"},{"revision":"315a02d258e75a35cd6575839161db03","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"2b52b28c77c2d735d105c12c14ec7a79","url":"contributors.html"},{"revision":"0a89d716c3c3ba9abb8a1cd181a36e79","url":"details.json"},{"revision":"e910f9c89fda76c3a8106ce922642028","url":"feedback.html"},{"revision":"97f07a656788c1a669799d9a30aaf6da","url":"images/1.png"},{"revision":"2c6a908467ce713be4bfc7aca33f3c39","url":"images/2.png"},{"revision":"3dc8815be4218a61334eda88a03b7612","url":"images/3.png"},{"revision":"de34fd9479ab50aa584dc3ac310a8ecd","url":"images/4.png"},{"revision":"a81c9aed7630c194e06b2d0e8e283640","url":"images/5.1.jpg"},{"revision":"e675c2379c8ceb19f1fee2af6d71fbc1","url":"images/5.jpg"},{"revision":"ad90d85583a435d9b8942f3d150a6f0c","url":"images/6.1.jpg"},{"revision":"a7d57feed68c200dcbf0d0cc785fb7b8","url":"images/6.jpg"},{"revision":"502bd14062e18a78c03669267f04ec3d","url":"images/board.png"},{"revision":"f94af7e77636dc76a5d9c842813249f2","url":"images/cap.png"},{"revision":"f54b46424765bde39b09b500d1b012d8","url":"images/ic.png"},{"revision":"8a8c924ef32d7aa79fc82b1743e077bc","url":"images/led.png"},{"revision":"5b9627597dd43b74d8a4c5f95c66a0bf","url":"images/logo.png"},{"revision":"060be618b65ec3070e699e7e6aa1c614","url":"images/post test que. 10.png"},{"revision":"7402946782ce9f3f1a14bb1211b97bc4","url":"images/post test que. 7.png"},{"revision":"3f76f9ba4dbc280edab032f5b2b6bf5f","url":"images/posttestques10.png"},{"revision":"942e2454ee22e816045336cb74cf78f9","url":"images/posttestques7.png"},{"revision":"28efe51f2189e1a44219cf9b9e3d3318","url":"images/r1.png"},{"revision":"6e6635adbe0e93e04507b9ae3c7c8945","url":"images/r2.png"},{"revision":"98fb8d387c84381e4460ba8e5e200855","url":"images/supply.png"},{"revision":"9a91ec0717834aafa651265ae4183e6a","url":"images/table.png"},{"revision":"171c4390272fd49575153ba85c0bf009","url":"index.html"},{"revision":"8ceccbeedd6389820fbda8a871919bf8","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"ae2cb501b7eb1af7211c73579547444d","url":"posttest.html"},{"revision":"9c6952d2de1f209240a85186e2ba715f","url":"posttest.json"},{"revision":"a97f2fe4a954549bba078de1eb6fcce9","url":"pretest.html"},{"revision":"f13c4e2d2cd699e1d83c7f6c35f3c3c8","url":"pretest.json"},{"revision":"ca37ae8eb3c45d2b248d30c912bae44e","url":"procedure.html"},{"revision":"c2beb9fc67b45befeaf1b4cf680c6d3c","url":"references.html"},{"revision":"9d726ab92bb7ec41d86f976a2db14fe5","url":"simulation.html"},{"revision":"c17b35434c2a508df8f0da3c237d7bb8","url":"simulation/css/jquery-ui.css"},{"revision":"85377fa919bc9f251b4502a723606ee0","url":"simulation/css/jsplumbtoolkit-defaults.css"},{"revision":"de1a572bafd802c40c71f92200de8a3d","url":"simulation/css/style.css"},{"revision":"fd8c9d28b540c5846a95f412eae37e49","url":"simulation/images/555.png"},{"revision":"bed118dfcf7d71b845ded66426e010b7","url":"simulation/images/board.png"},{"revision":"b7d30dbb0fb42d5e4e50a3ad31290223","url":"simulation/images/capacitor.png"},{"revision":"7d8d80557e83a925f1c53d4914bd1480","url":"simulation/images/desk2.jpg"},{"revision":"5a32c7c13b143c7ac7b836dbb7102993","url":"simulation/images/image002.jpg"},{"revision":"3015f319d79af6e55aa3a864d669d205","url":"simulation/images/image004.jpg"},{"revision":"5bb2b90b3732de5bfbe09424f81e21f8","url":"simulation/images/led0.png"},{"revision":"b65c7956ff3cb41aad0433e0f6c15438","url":"simulation/images/led1.png"},{"revision":"cde7f206d17ec5b7dfd0dfc0237ac885","url":"simulation/images/R470.png"},{"revision":"a3cf54deaae7897eabad715cee2fa160","url":"simulation/images/R47K.png"},{"revision":"199884b05cecf5ae91c4d571ffaceedd","url":"simulation/images/supply.png"},{"revision":"46f12d1cd8d6be6803abc9658e871843","url":"simulation/index.html"},{"revision":"6f74e278dd58d8013cdad24bc9b9399d","url":"simulation/js/graph.js"},{"revision":"c024eece1656daa90cd97d539db6f136","url":"simulation/js/index.js"},{"revision":"b8d64d0bc142b3f670cc0611b0aebcae","url":"simulation/js/jquery-latest.js"},{"revision":"0315d19da36d139861a6f5dca6587786","url":"simulation/js/jquery-ui-latest.js"},{"revision":"23c7c5d2d1317508e807a6c7f777d6ed","url":"simulation/js/jquery.js"},{"revision":"a966826f960e9ccd1450f85ec7b8bfe2","url":"simulation/js/jquery.jsPlumb-1.3.9-all-min.js"},{"revision":"dc5e7f18c8d36ac1d3d4753a87c98d0a","url":"simulation/js/jquery.min.js"},{"revision":"fd69ee6e1f307f7e9f628f02e40e4bfd","url":"simulation/js/jquery.slim.js"},{"revision":"fb8409a092adc6e8be17e87d59e0595e","url":"simulation/js/jquery.slim.min.js"},{"revision":"d33a0534fcb60496b04fe2f61c922d8a","url":"simulation/js/jsplumb.js"},{"revision":"80d2e58aca6ab878f28948e6d7a1f232","url":"simulation/js/jsplumb.min.js"},{"revision":"ec17e4dd5ec211d9366b5cc96271e8c9","url":"simulation/js/right_components.js"},{"revision":"17b4d792d7daef2d91ad97a1afcc2dd1","url":"simulation/js/sizzle.js"},{"revision":"334886649236c65c797a6aa32b398ff6","url":"simulation/js/sizzle.min.js"},{"revision":"376478d52d292c79eb8b81e531debaad","url":"theory.html"},{"revision":"f50dc1731086a3fd204786ffac1a5e70","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );