'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "1e42ef5a72c7057a1aca67829e1250f8",
"index.html": "daf03cec24b8133ab61296d99eca55c2",
"/": "3b35f0411adb2bca79ab837fca30b23c",
"main.dart.js": "5643687e8049d985bf2e7364feb49fcd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "161bc6f27cd0ddacc6348d0cef9521a0",
".git/config": "c750a473d7d804200eadce4d8333ea1a",
".git/objects/0d/530a7255ecc637aca1233037115c7c93541904": "9b1b218a5058ecf474e29db9ab59865b",
".git/objects/95/92fbb4f51348b593bb960e79c7b6ba615054eb": "de64d91519f87f768c1f9489e232b26d",
".git/objects/59/5c518e1cd3e47d71f5a971573f5a3aced249b4": "3a5f9b6300da96955ad70ec305e603d3",
".git/objects/50/a6b9d07004f17c6ea211fee9c40f7801313475": "f24ce15c293e2ec3b450b2bee682c2ee",
".git/objects/3b/88019599e84e5a41d67b0c630c544638d3090f": "805386d41034f5152f87e8da0c89fac8",
".git/objects/6f/d2c29e2d18ab32ebe17d1cb4a90c67dbb4fe3b": "01ea6f553865ebc0c21a444a85060814",
".git/objects/6a/faade966a04b5bbc5f39c524861c6f8615a282": "3e94d66b9194f008b62959b0d49cf0a7",
".git/objects/69/ef38ee40850d34ae33631563794cede3346c88": "06dcfed8155d19885f776c3c995861d5",
".git/objects/0b/8b891c19b70304d17651a2d0487b731bef2480": "64a3c21679b19546cc591956a6bb652c",
".git/objects/94/b48b2b7ddba0ea315fec571579140532c0cab0": "1ce2ca2f92e494a523a24cffee00d572",
".git/objects/34/0da41225435dd3d1095255ef5aa5e48775aee4": "29f4381da6de032e5d95328dcfc3a7dd",
".git/objects/5a/d4f16ef1169dde382d87f0cba66db4817ca114": "4a740285999d309b3932c2e77e235c7c",
".git/objects/33/f8b81b87b5aea824b218fc34d558e3ce5e5267": "aab8d7b49d2523960c9392ce634c148e",
".git/objects/05/8c1ed871193e094c953fdc0c251cceb13bdb5d": "1997eba738c6b8ccb4a0e05cb6585216",
".git/objects/05/f19933761da616e280d242d41f6132206cc5f6": "291c02fb27c99559ac961c37c86efff9",
".git/objects/ad/d895c0e433af563e8a415b96e4b54ef2e7ea07": "8e20901c020f4892f079e2869aa57708",
".git/objects/bd/da7d911fd1aaec4ef93290085681b674536b09": "724fa774c05b9a05da2f401e7779d744",
".git/objects/d6/9fb2977fbd4edc2d8af5db1284cc5970852d49": "6d44f35ccef297c28d5c5493d02ae5ee",
".git/objects/ab/ba2788f5de487917210ed5b1f71d7ad3c15a42": "c8c2ab34bc74d4bd0ebb8c4a5a43cff0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f3/be82451e413c13e434faec0cce72696b290f7e": "c4e5f4f5d1b877daaaf253ca6624c77d",
".git/objects/c9/d9d11ba1a374bfe982f216126c5d0bcf6aebb6": "87dad4b6bf49c3ae47c39e070c5eaab6",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/18/f1c72ab5c0afab508ecd461f5e1f9dbbcfcc1f": "c765f38105beaef53af7162b0475a32a",
".git/objects/16/500cf249621100f00752776e9b1331ad549113": "c1534119467f13521f8014c5b347d9b6",
".git/objects/1a/c5a47335e778aac502d820234157732ee78fe6": "f190966886221d62307b42fc825b6586",
".git/objects/8a/2e1202f16a25dec9101dd9a7bd185af536889f": "07802688f5a8249ef09d9857dd5161c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/21233abbd46abe63a12aec0ff52ade0331580e": "235d5336135780604a88f5546e2be13c",
".git/objects/10/c6b6a29fd81995db56497d356aa4976efbd973": "6d304cf30d61666ada2748bd58d8d978",
".git/objects/43/5521bb184c520008959806767111d1aa85e71c": "83e965273de6f0b07a6935f81c7740ab",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/07/7a12ec6efc3609e661fcafabc0e629f5972ad3": "dd10335bd2c070e57b78d038dfed6002",
".git/objects/09/5c030fa71456a9f78d90c650efe18e2003326f": "45baab28d13718a516fcae3ee29023c6",
".git/objects/09/5056163535bea6a216696077b8f00fd821a140": "379fb3d279914b29a42a47892b97adbb",
".git/objects/91/d7c0032524ae5541a1a13073f89526da405a27": "81e706a28fc54bec4dd04fc31f9aad3c",
".git/objects/53/804003ab7382f68153c0e653a949720ec82a72": "a0ec46404df5a489cd860b8bd074cbf8",
".git/objects/3f/0b3bd3fcdf360249a4c4e560acb1b6cd7e053f": "f5f3e61fbd2e1bf2b64dd7af4a49bc1d",
".git/objects/08/3f006d163ef1f5e05d0f8574d0ceb82a08a9d9": "607566fe4df0d05533001ab20501e3e1",
".git/objects/6d/0b78f437394547150625d44c1358384710843a": "31db2b4515cd0df927ed0dabea6f9daf",
".git/objects/6c/ed71eb9e64be337c34822f2adabfaf0369daf4": "dfbafc348964316718452b99c414905b",
".git/objects/39/02c024ec05702112d276607dfb4baa8edf79c1": "7b14f8df111b3a6260bcd5834fe934bc",
".git/objects/39/c0496e95b86be6ed68174411b06231eed65580": "91ce4f8f9f495ef154fb446ae783f908",
".git/objects/55/8c20da19116a398e4fff64db263c13df32dd9c": "76681069314e98189c78da52115602b9",
".git/objects/0f/df2f93525d731454265d80b4405bfb644ccca6": "16e322c31e39b982924fcd9a8ab09737",
".git/objects/64/73e346c6ea711370e80409cec9b58708187f41": "18787576b20d56e45a95cc61ae5131d1",
".git/objects/64/2f1b9a243e6e0a8d4cb4c236fd7fd177f54ed2": "34d0da1801f48b302eb094af165d70ce",
".git/objects/bf/ce52475d3d5e9fa5a7b53a5bef1f54ebde3f0e": "8625a99d1426e83f359094e28b854cfe",
".git/objects/a7/06d919732ed8c82c6232e2a78935fd021d024a": "ebfa052ee7c1dd99820a85d528577de9",
".git/objects/dd/5fe0c693f57df5fd9e024a99b875eaeffa5eb9": "930365474e8a585efc95ff7fffac2832",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/2befc485b407d7c8e17e91974745f10c8338c7": "32492587c1c9022c8ccdc6fe0ad4d4c9",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a6/a4f34a94371c89ce6c9d503813d2625777330b": "f1bba7056ba65207bb458d9ce8b8e421",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/82d4ad4020530f62b87d46b695fedb899efaaf": "0657e5ac5afd3f471f99e8984364b5ae",
".git/objects/f9/12e7b50180fb605afb6b1ca57178f23f097cfa": "ac5bab206e71637bf0a3cc3344a76965",
".git/objects/f9/abca8eb44311126fd6db0d4a0ecea2203d7dcc": "86c3e4297440a04e0e4497d59df5b49d",
".git/objects/fa/673567fa578de847af0b34e724f68e50e485b5": "a838c653a90c0ea96b91cfac0fc7cccc",
".git/objects/c5/52d35c7f9247a5ec0c9c56c910c5a18c475210": "bc225bca89587f12bdaeea30e54eb97b",
".git/objects/f6/d4d83fe58b10b177fe5303e628c4817055cca0": "916a79916d8105c1674ca7872814f8e8",
".git/objects/cb/226fa48c89f664102209d732335267bf1a2f9f": "a85bd75092c096f8e3f210fa09d5c6c9",
".git/objects/f8/73388463bc2ae305159adc380a5c244fcb23ad": "3be666caa4cd8ba27988670c827e7518",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/a20f735278e4c2e22bcd19f1303f280b5f5899": "7dcc77fbef143975aca2f179111e4769",
".git/objects/41/a35364929c001036288244f2d5d6e122ad822c": "d47516be369cb690d7d31450ae7ccb9a",
".git/objects/70/234ca9d851593c1d354bbf588a061ded39d2ab": "644e57df1028e2502db7ba7bfd75634d",
".git/objects/70/d8025fdef8dfd1d1725207c20ad0e249600638": "eb3d04e95c72e6a15f2ad2ebf4406108",
".git/objects/24/bb6bd7dc7f20274a122b97cff3c8dbb5af7c6f": "ced0873eac81642f00a4301058a37797",
".git/objects/15/2e9b8db18a88ea91ff199e67edec1758090843": "0218d32a1bdb9d705450df63a5973ef8",
".git/objects/15/a6a6905560df29c70e4fe826266cbce6d0a461": "5b2ca4a18e78c56dafd9c38bd69906b6",
".git/objects/12/3b6c5ac737a863ed6135a2bd8c8721fec7660a": "3b729973e8408dc88ac4dc09c0f94547",
".git/objects/8c/3e09876dc136361c76aecfac6af97af903012a": "324740c2f4dcc71a86b7cf3d8ed6d31c",
".git/objects/85/7ed65a9768ec6e67f611521beb3902c2519be8": "0714b73d7f48c6f78889589d85f7ca52",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/7f/7a92f3a687823afec2267d3aa020ae144460e1": "568d72001d3522d7f9acab1ec96d37a2",
".git/objects/22/27cb472fa64ec80da0dec8b37dfff4e0d910b4": "9a0222fd12dfcc8e247c53f34afa489f",
".git/objects/25/d2297c7b94e1b5907770a25131ba534e748ecd": "d1a5d4e38a1ae0c1dd3f17eb7dee5c87",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a38be9d1aed853daccb01fd33f1b8937",
".git/logs/refs/heads/master": "a38be9d1aed853daccb01fd33f1b8937",
".git/logs/refs/remotes/origin/master": "3c4b727d6b47bbbff0714b37607d1717",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "45b072df3e49b88ef54b1378436b70ba",
".git/refs/remotes/origin/master": "74a27dea6f0c0d4b3f8925c50295d174",
".git/index": "aa75661ad4b63e5c5456e875ff0d5de3",
".git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
".git/FETCH_HEAD": "69dc6c0356beece4a124ad3f98ab7ccf",
"assets/AssetManifest.json": "5c2883f4aa99df8d00d8d14de8a217de",
"assets/NOTICES": "da9f8d51670caf1930bbfbab705e52a1",
"assets/FontManifest.json": "0b776b880bac01658f90795873d89013",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/ic_aarogya_sedentary.png": "8d3a643a15e2c382a9d05f8711f439c0",
"assets/assets/images/weight_scale.png": "8161b48468b529d18e7c4b543fe8166d",
"assets/assets/images/fruits.png": "cfa0d376c2c2d6d6fc5f8baa522e7593",
"assets/assets/images/pillow.png": "8c55f2df5886569e1f54afd2937863d6",
"assets/assets/images/diabetes.png": "207a768c650118276b9edc5863bb03f6",
"assets/assets/images/ruler.png": "70f13ae4f8b7faad9f7c2b79e8f598d0",
"assets/assets/images/thyroid.psd": "bcf69531fb85b312cdee681e075ffec2",
"assets/assets/images/arrow_right.png": "0786e8e9fe8da7425c699f97880ea5e2",
"assets/assets/images/cake.png": "af2562839182c7585a2e08373ae8fd58",
"assets/assets/images/twitter_logo.svg": "922d9097b264fe48bf8975361fed3d01",
"assets/assets/images/gender_boy.png": "e3e3f7a825be930b3f26972d90f83189",
"assets/assets/images/protien_indicator.png": "22176871051a13189877ea35e5f2c58a",
"assets/assets/images/girl_gender.png": "226e49e77b293696e8580ad0968ff9e4",
"assets/assets/images/Thyroid%2520copy.psd": "74b3efafc595115b3ed91510074b025a",
"assets/assets/images/thyroid.png": "e62f66a633c421dc6f569f195ccf4517",
"assets/assets/images/ic_aarogya_hectic.png": "047fb35bfaf64270edb222cf5b8b4cf0",
"assets/assets/images/about_me_background.png": "f91888539be0065ead88514dac56729a",
"assets/assets/images/weight_page_indicator.png": "3d01942c31f1d340b44aa8253ca54b73",
"assets/assets/images/yoga_review.png": "99a6ec101c44d336d7767691b18dd6c9",
"assets/assets/images/doctor_manas.png": "73a5311a3a7897e54cec91e59ac9b599",
"assets/assets/images/facebook_logo.svg": "fde37ea3b8435ac02cd832f9cbb4ed48",
"assets/assets/images/apple_logo.svg": "d26cc692bf5bc793d0dead7da4e205b1",
"assets/assets/images/aarogya_vrukasana.png": "131b32852338ad3e855657c185cc0cd6",
"assets/assets/images/about_you.png": "66ec9ef146f5a8d7d2ec16e8acf7bd6e",
"assets/assets/images/cholestrol_indicator.png": "41f2945e1fafc906c100cb2f720cd36d",
"assets/assets/images/yoga_review_aarogya.png": "8b8b4582a7be75646255851507e2e1a9",
"assets/assets/images/carbohydrate_indicator.png": "6d0b6ea944e26f2c51b23f47ed91890d",
"assets/assets/images/_Group_.psd": "3973f946d1a1cfedc721a6e0315b21c7",
"assets/assets/images/calorie_indicator.png": "713723ed6aa130e8436d12b8c1479a9a",
"assets/assets/images/arrow_right.svg": "04fc05bd27a3127c8348313abb90299b",
"assets/assets/images/microsoft_logo.svg": "7c81ec38b5d0c5695a28dd3e83b0c634",
"assets/assets/images/fat_indicator.png": "0b017ec872e497f231e59721f11700bf",
"assets/assets/images/activity_page_indicator.png": "e64167933d0201e9fb1ebd3bb1bd1cd4",
"assets/assets/images/ic_aarogya_hectic_flip.png": "f4c2eacf92bf9468444fe53aeec2040e",
"assets/assets/images/New%2520Project.png": "bcece0fb8ea7adda379e12aa5141c254",
"assets/assets/images/doctor_aarogya.png": "ef221bcc6ced64676407cbe9ac572056",
"assets/assets/images/ic_aarogya_height.png": "dc22b677b126c3d86049856e0c92dda8",
"assets/assets/images/login_screen_background.png": "ab29a67541f2efac1fc0ce3575818d69",
"assets/assets/images/age_page_indicator.png": "00ebc4161c003310c7bc28b9449139be",
"assets/assets/images/water_glass.png": "5042a61c7b58da20806eb6125f6823c6",
"assets/assets/images/im_all_well.png": "f315f6b35383191a289df85151d2ef09",
"assets/assets/images/ic_drop_down.svg": "968baa23ae79bcb26f5c7f624a55a78f",
"assets/assets/images/aarogya_meditation.png": "4cb594afb79973892a1561c1d983749d",
"assets/assets/images/ic_aarogya_weight.png": "418de0a1e31a952beb01087b63971f75",
"assets/assets/images/health_page_indicator.png": "0c5f0557644d7dd2cbfc9e0fe1b20b4b",
"assets/assets/images/login_card.png": "a348988a4f1f09e9bb7cfa2d182342bd",
"assets/assets/images/ic_aarogya_active.png": "fb1fb1e04ef55442e6406e424ca6b86c",
"assets/assets/images/fibre_indicator.png": "8ac44bcdfa224287e4e2222bd2c924cf",
"assets/assets/images/image.psd": "fd90263c47f6fa1bbc1d0449bf90763e",
"assets/assets/images/google_logo.svg": "b7727941c0e8a117b6cfd8f06a1cb7ed",
"assets/assets/images/aarogya_meditation_land.png": "838659c766a5f4bea1ff9d9a349ef1cd",
"assets/assets/images/bottom_clip_next_button.svg": "d16f8374108a91a0bab4c1e3178d9bdb",
"assets/assets/images/height_page_indicator.png": "32821e36339d7cfc8e3754b4bcce5184",
"assets/assets/images/add_profile_pic.png": "6638369fdb2adff4cbac517919d22796",
"assets/assets/images/gender_page_indicator.png": "59599f311592e4b0bc992b1ca1dc031a",
"assets/assets/images/sofa_background.png": "5a8bad983220c182918f3a565dcd0866",
"AhamSvastha/version.json": "1e42ef5a72c7057a1aca67829e1250f8",
"AhamSvastha/index.html": "3b35f0411adb2bca79ab837fca30b23c",
"AhamSvastha/main.dart.js": "5643687e8049d985bf2e7364feb49fcd",
"AhamSvastha/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"AhamSvastha/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"AhamSvastha/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"AhamSvastha/manifest.json": "161bc6f27cd0ddacc6348d0cef9521a0",
"AhamSvastha/.git/config": "c750a473d7d804200eadce4d8333ea1a",
"AhamSvastha/.git/objects/61/4530c8056d9ba8196ee833ba39ca4d89f30ef1": "c90fcb6a943f94ce16f37b67aad746c1",
"AhamSvastha/.git/objects/0d/4de93e756de39a7b1d1abe7e24f68e859e50d1": "dcf7a721aff84bd46b9733ff300707dd",
"AhamSvastha/.git/objects/50/f51af4b146e58698b1b29fb11005b69309459d": "f7be2dd45b2eb26ff7639b28654af173",
"AhamSvastha/.git/objects/57/b2a11b01a41c0ef571d225b058d29049ac152e": "02442f6d90f6b75b37f80c2e08857772",
"AhamSvastha/.git/objects/57/5f74fb87e051db6eca4f2f22f3fd74a9741d75": "26ebdd41818d15b1716ebe4037971c14",
"AhamSvastha/.git/objects/03/b03f8473c87eeb9524eaac0ab0e685e0ea7811": "e074329f22adad81916edc67c3b0a04e",
"AhamSvastha/.git/objects/9e/2859056f2b87f80bd0ea5c0ed17edc7f08ad66": "349023cf5ca0da4c5e6a8aae9fcc2cdf",
"AhamSvastha/.git/objects/04/42ae2c2e68fa2dd6d11a0fff416817662068be": "c3bf93eeca0910b6fa155477203a833e",
"AhamSvastha/.git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
"AhamSvastha/.git/objects/32/f64fae4fc3ee9d14e888d6ab065a5ee1c941da": "0a9a34c685f92e735585300a124b2f19",
"AhamSvastha/.git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
"AhamSvastha/.git/objects/60/ce62853e150fb6da2bb9f09b83c7f99a05924f": "a0aa8a44e0128f989b920594d99fd497",
"AhamSvastha/.git/objects/34/0da41225435dd3d1095255ef5aa5e48775aee4": "29f4381da6de032e5d95328dcfc3a7dd",
"AhamSvastha/.git/objects/5a/33afb44621a8646bcc6dd3524c98cd434c9042": "4e07e9bac204d1bb31609d6041edd715",
"AhamSvastha/.git/objects/5a/0621dfd0dce6e0abd5a7937ebf81f31558fc37": "52b02631cf9fefec883b933dd6fb1f15",
"AhamSvastha/.git/objects/9d/0c2325f5ec066f069f259125907e18a2379d17": "050b71104161b0f514562899aed316fb",
"AhamSvastha/.git/objects/a4/b3615d66ff93713b4518fa171c573457d41fe0": "87f9de8d84722a9f9a71aaa480e60a88",
"AhamSvastha/.git/objects/b2/80a9d9befab777a91d2492c4792aa92f076d4d": "447020db74c2fc55e997689f2966dfeb",
"AhamSvastha/.git/objects/ac/ebe4d264e8ceae784da7dc9773d43c4d34b801": "94a520570e68bcd03f65170795df0f25",
"AhamSvastha/.git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
"AhamSvastha/.git/objects/bb/3fd27ceb35c7e765c77a1591f6561e9d8f960a": "345e0cea926d272971946c76bf3c7fad",
"AhamSvastha/.git/objects/b3/1b276a52a85bdd02e9f42e102cc9336c935051": "6116fa99595da3ed33976f61f07861dc",
"AhamSvastha/.git/objects/b3/ab05b78a6526f09098d9e3913dfd02cf7ec66f": "69b300115347ff35a363de5647ee5951",
"AhamSvastha/.git/objects/d8/9cd01908a422c0dc1650b8b7440323f7e2c005": "a81735bbe742c6d45ea747b2aa8a49de",
"AhamSvastha/.git/objects/ab/b5ad2eb4ff91c5430de459c66a7e607e78328d": "4e99f19d7f391a933eb68bbbbc545661",
"AhamSvastha/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"AhamSvastha/.git/objects/eb/3ba076ef9e24e0b0cd8445f333504faf9b9f9b": "91eeacecf2721069908539bf00bb547d",
"AhamSvastha/.git/objects/e3/aeca494e750bc88af107baac7b85cdfc06fdec": "0156792975cf03dacaf3cbbdc745bb94",
"AhamSvastha/.git/objects/cf/c919bc2cadd691c5c92e02224cb3f629b95f05": "68520024f89a53caa8ff131877d8e97a",
"AhamSvastha/.git/objects/cf/842e6003be3b42ba8b9261abde767f05d7f464": "2570f2933f0b0bededb7f7f379e5d9a8",
"AhamSvastha/.git/objects/cf/bc10c9b39282a15a8bdea517cf09dfe3230336": "0f00d42304f6cc03ebc0d07fcf0c494e",
"AhamSvastha/.git/objects/fe/6bef9cf5023f0715f1403701ebd2a26ceab986": "b46207a615af3e614b18c69936dd22fd",
"AhamSvastha/.git/objects/ed/fa93f21b477d39cb6f1715d998fd306879b5f9": "e350b2bb4f61d3815f8a85efb368377f",
"AhamSvastha/.git/objects/c1/19b76d4d190bc1c622b336cc9aeee04e9e6baf": "cb3cff91b17cc81ef51036946d5cb07b",
"AhamSvastha/.git/objects/c6/52a5a18a6de8ac6beb77d6ded965be0e01f918": "eeb2d2f0e533b806abc6e8d937e3e7d8",
"AhamSvastha/.git/objects/20/6bf2d56daf1d546afdf88ff074b81ae669b51c": "55aa6357c91f0efa366abb281ec7ff85",
"AhamSvastha/.git/objects/20/44dafd1ce8671f100de96b19851619f27540e3": "71fab46e4239874b8cb8111ac5dd3467",
"AhamSvastha/.git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
"AhamSvastha/.git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
"AhamSvastha/.git/objects/11/ae012cbd0aad0c55da4c89b81a5cc7003bdd5f": "204b2235ea43e6042b2d009a9efd1a70",
"AhamSvastha/.git/objects/11/f8a7c4a2023ec7771a7c3f6c529c0bdc983149": "94af3cd426d4cca16b5734de85a3edb6",
"AhamSvastha/.git/objects/7d/391633641de3edfc88d02221d6cd9c34d3748a": "f97c304bdea734640e32b0522a3c72eb",
"AhamSvastha/.git/objects/42/ef072667312bdca2bf348d5ff6b17d20a68e0b": "56712cd7e8a7a3f8eb9eb5302abf9f15",
"AhamSvastha/.git/objects/87/b847f24e2b2fc42bcb2089d805eaa32d92670b": "61b77468544db3f0cbe91992cea42db5",
"AhamSvastha/.git/objects/7b/7daa0863f73c782510f3b7cf3fb90a9bdf8a2b": "33452b9f4ebf6901314bdcbbdf066eec",
"AhamSvastha/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"AhamSvastha/.git/objects/7e/adfad2fa6d8f258c865a843ee1754d80e8b317": "1b458b4ab1fd237bc5c08f10aaad3742",
"AhamSvastha/.git/objects/21/e520be292e76bb3e376fba89355eda1cc38637": "0c012d4c476e776629d9a464505b765a",
"AhamSvastha/.git/objects/75/8895fbe178bb380c2f1ebba7c89765e3a62734": "6617e3121b8477c667f180dc389412b6",
"AhamSvastha/.git/objects/88/526e11e383cfdcf3781464be3d8b1f4c61a47c": "d8ded2713db1992f7938268f7d3dc742",
"AhamSvastha/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"AhamSvastha/.git/objects/38/90d9377ea75755c277e3a4d889dc9ba3d58faf": "2a38788f657d4ab4567248984251ddb6",
"AhamSvastha/.git/objects/36/f357ad40caa8745491f7fafe4c3637d00a000f": "8a47fe011c4b8424ae6c14f02b6e4b64",
"AhamSvastha/.git/objects/5c/17c9e25bda6b86307cfbc8e2dd571d25e4187d": "99d468819bcaf9c9d2b562706b2bf9b4",
"AhamSvastha/.git/objects/5d/f4ddb801142740b96caceb1d78d54852abaf9c": "e3c132a0f21311a0db17cef45d0f7965",
"AhamSvastha/.git/objects/65/b384c04ef7ee9fb9b7582b77377280c5d64cd5": "88422bbb2bc42436f8f242eb59c23af7",
"AhamSvastha/.git/objects/54/79506a1be59e1b18cf6d164a1d699808f4eeac": "b7adc1998fbd5ad9e9267b9694d0e2fc",
"AhamSvastha/.git/objects/5e/bacb609c6a85f7562d67fe25e1e92e5c8fb092": "d18c27885a192e58cf06630787ba63be",
"AhamSvastha/.git/objects/08/59983132f4694ce31d0787638518f81288a2f3": "4b174eb8a0e67e200fa60e573e519d57",
"AhamSvastha/.git/objects/08/5f7c0bd8da10dd05fbe1eb6aa7081347380803": "79099a85b3875c720ce7ca8cb16e8b4a",
"AhamSvastha/.git/objects/06/bcd52c2634037293b13c52c2882d81e52b261c": "17f5b62abeb437313ca2888020c7cdd2",
"AhamSvastha/.git/objects/39/13b81db3c60f72342e9b64f2fcc7c10be6906f": "796a2e7829476f9bf8e1f0578070a4b6",
"AhamSvastha/.git/objects/0a/15c34cd5ff498fe2a06ce4a200ec3c6aa64d6a": "ae69eb398d709bf6b34097fda6061689",
"AhamSvastha/.git/objects/64/5590ff8495b2226db44239c11115967728ed2e": "70c0d69ef1f64c05a6f6a86b85f1c8b8",
"AhamSvastha/.git/objects/ba/7a8d9054abc94ffea85ea1fa9ce19913567720": "abe31eb0a7a4a7e1e8a1c856804f8438",
"AhamSvastha/.git/objects/b8/8df037e5180e048990da761b1d7369850bba05": "5b89f6d40801abfec0e0180857efd938",
"AhamSvastha/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"AhamSvastha/.git/objects/de/e861f04cdbc724f8f9b79f93149f389abfda45": "87cff206cc6b4dfa786b3a5d6a8cfbf8",
"AhamSvastha/.git/objects/b0/7bea2da57616724092348ba5ddb2988840da1a": "20cd7fbfe2e78d745d31987ac15f3b1f",
"AhamSvastha/.git/objects/b9/e3ff952421b860d93e26e948896383f8ead217": "6b82a975cacf4028cfe5490372e84270",
"AhamSvastha/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"AhamSvastha/.git/objects/cd/60ccdfd7a7b3a09df466cdc070fe0e4a619b94": "06151254a250d2903bee752bc8f8f08e",
"AhamSvastha/.git/objects/f6/c9fe75bd4c2f6f39b0a07c322684d9b1b6f55e": "affdea83d93d1e994b78555f4a068694",
"AhamSvastha/.git/objects/f6/7376715595d37dcb0e3875a703612c789effa2": "e6f4a68e706b78c6dab5d7d5096a744e",
"AhamSvastha/.git/objects/e9/b10f6765c9006b3285060162d5f59d87af79f7": "723b706c83cc3c41aa64cfe861d6e04c",
"AhamSvastha/.git/objects/e9/3f0c8b58500764b6f6503a0212940e9a2b81f8": "4e1aaeff8c1acb8df22ba1fc3384cd61",
"AhamSvastha/.git/objects/e7/58eadb98872b02ed8faf4921db8ac181f9dbde": "a3c19701fabf9fc39a433d604d36ed71",
"AhamSvastha/.git/objects/cb/1596d5bc27f958c098dd04959cf9af5b0e2ed8": "a47633f4d8dca913793172c1b5499240",
"AhamSvastha/.git/objects/ce/04669bd69162f9c7e9fbf404d45e6be9947a47": "2f1d14c1d7f9a2a3b802453d0a2ef591",
"AhamSvastha/.git/objects/e0/4567daa96d6d870a75bdeb908f9396614a9b47": "58d01340d02db723adbfed65c328e60b",
"AhamSvastha/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"AhamSvastha/.git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
"AhamSvastha/.git/objects/2d/1088294749718c3aa958cda35e21e8a1f32dac": "65d4432144c0da981ca921aef7effeac",
"AhamSvastha/.git/objects/41/46d04951d5d38f4d5d1a05bb2c2b43328ec537": "bc225b55a2afc7c41bec80231b4a840e",
"AhamSvastha/.git/objects/41/def9ddd62a32ea8fa3afa8604c3a6b92863af8": "ec9af386c6f83fd450fc947d592dba1d",
"AhamSvastha/.git/objects/77/5ef723fea7a529e46cce4ea6fb0781860f7cfd": "c85492afb4dfa5941d07f014ca13c4bd",
"AhamSvastha/.git/objects/70/c0cee84f0729f8794d8463549601172c19c31d": "ee817156a2a5d3aaff16b554ad364e92",
"AhamSvastha/.git/objects/8d/11b84b3f36dd329d1c75a516fe720177f9c8d8": "3e36f600f953e83156c652784987f827",
"AhamSvastha/.git/objects/2e/92187f8953c2fcbbbf30cadf46c2ac27a8e29e": "456042553dbf8edbc7dfa29c364a014c",
"AhamSvastha/.git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"AhamSvastha/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"AhamSvastha/.git/logs/HEAD": "1f25e6132e70967496f8f76736d27d1a",
"AhamSvastha/.git/logs/refs/heads/master": "1f25e6132e70967496f8f76736d27d1a",
"AhamSvastha/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"AhamSvastha/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"AhamSvastha/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"AhamSvastha/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"AhamSvastha/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"AhamSvastha/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"AhamSvastha/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"AhamSvastha/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"AhamSvastha/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"AhamSvastha/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"AhamSvastha/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"AhamSvastha/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"AhamSvastha/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"AhamSvastha/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"AhamSvastha/.git/refs/heads/master": "0f1709403943ba0658612cda59109d5e",
"AhamSvastha/.git/index": "021197885c0f4596c4fdd29ac986ca9b",
"AhamSvastha/.git/COMMIT_EDITMSG": "c085f9acd3be1296f727b0ea4e7dda0d",
"AhamSvastha/assets/AssetManifest.json": "5c2883f4aa99df8d00d8d14de8a217de",
"AhamSvastha/assets/NOTICES": "da9f8d51670caf1930bbfbab705e52a1",
"AhamSvastha/assets/FontManifest.json": "0b776b880bac01658f90795873d89013",
"AhamSvastha/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"AhamSvastha/assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"AhamSvastha/assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"AhamSvastha/assets/fonts/Quicksand-Bold.ttf": "0738679df4cf4e566f60343830da7bfa",
"AhamSvastha/assets/fonts/Quicksand-Medium.ttf": "865b25e449878b6b4d1f9e098ff2f510",
"AhamSvastha/assets/fonts/Quicksand-Regular.ttf": "216d43ee8707910af457af569eda1dec",
"AhamSvastha/assets/fonts/Quicksand-SemiBold.ttf": "c82b184bf7450e14adccb7b0d6117474",
"AhamSvastha/assets/fonts/Quicksand-Light.ttf": "188ca708e4cbbbe3837c3d904b8eeb61",
"AhamSvastha/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"AhamSvastha/assets/assets/images/ic_aarogya_sedentary.png": "8d3a643a15e2c382a9d05f8711f439c0",
"AhamSvastha/assets/assets/images/weight_scale.png": "8161b48468b529d18e7c4b543fe8166d",
"AhamSvastha/assets/assets/images/fruits.png": "cfa0d376c2c2d6d6fc5f8baa522e7593",
"AhamSvastha/assets/assets/images/pillow.png": "8c55f2df5886569e1f54afd2937863d6",
"AhamSvastha/assets/assets/images/diabetes.png": "207a768c650118276b9edc5863bb03f6",
"AhamSvastha/assets/assets/images/ruler.png": "70f13ae4f8b7faad9f7c2b79e8f598d0",
"AhamSvastha/assets/assets/images/thyroid.psd": "bcf69531fb85b312cdee681e075ffec2",
"AhamSvastha/assets/assets/images/arrow_right.png": "0786e8e9fe8da7425c699f97880ea5e2",
"AhamSvastha/assets/assets/images/cake.png": "af2562839182c7585a2e08373ae8fd58",
"AhamSvastha/assets/assets/images/twitter_logo.svg": "922d9097b264fe48bf8975361fed3d01",
"AhamSvastha/assets/assets/images/gender_boy.png": "e3e3f7a825be930b3f26972d90f83189",
"AhamSvastha/assets/assets/images/protien_indicator.png": "22176871051a13189877ea35e5f2c58a",
"AhamSvastha/assets/assets/images/girl_gender.png": "226e49e77b293696e8580ad0968ff9e4",
"AhamSvastha/assets/assets/images/Thyroid%2520copy.psd": "74b3efafc595115b3ed91510074b025a",
"AhamSvastha/assets/assets/images/thyroid.png": "e62f66a633c421dc6f569f195ccf4517",
"AhamSvastha/assets/assets/images/ic_aarogya_hectic.png": "047fb35bfaf64270edb222cf5b8b4cf0",
"AhamSvastha/assets/assets/images/about_me_background.png": "f91888539be0065ead88514dac56729a",
"AhamSvastha/assets/assets/images/weight_page_indicator.png": "3d01942c31f1d340b44aa8253ca54b73",
"AhamSvastha/assets/assets/images/yoga_review.png": "99a6ec101c44d336d7767691b18dd6c9",
"AhamSvastha/assets/assets/images/doctor_manas.png": "73a5311a3a7897e54cec91e59ac9b599",
"AhamSvastha/assets/assets/images/facebook_logo.svg": "fde37ea3b8435ac02cd832f9cbb4ed48",
"AhamSvastha/assets/assets/images/apple_logo.svg": "d26cc692bf5bc793d0dead7da4e205b1",
"AhamSvastha/assets/assets/images/aarogya_vrukasana.png": "131b32852338ad3e855657c185cc0cd6",
"AhamSvastha/assets/assets/images/about_you.png": "66ec9ef146f5a8d7d2ec16e8acf7bd6e",
"AhamSvastha/assets/assets/images/cholestrol_indicator.png": "41f2945e1fafc906c100cb2f720cd36d",
"AhamSvastha/assets/assets/images/yoga_review_aarogya.png": "8b8b4582a7be75646255851507e2e1a9",
"AhamSvastha/assets/assets/images/carbohydrate_indicator.png": "6d0b6ea944e26f2c51b23f47ed91890d",
"AhamSvastha/assets/assets/images/_Group_.psd": "3973f946d1a1cfedc721a6e0315b21c7",
"AhamSvastha/assets/assets/images/calorie_indicator.png": "713723ed6aa130e8436d12b8c1479a9a",
"AhamSvastha/assets/assets/images/arrow_right.svg": "04fc05bd27a3127c8348313abb90299b",
"AhamSvastha/assets/assets/images/microsoft_logo.svg": "7c81ec38b5d0c5695a28dd3e83b0c634",
"AhamSvastha/assets/assets/images/fat_indicator.png": "0b017ec872e497f231e59721f11700bf",
"AhamSvastha/assets/assets/images/activity_page_indicator.png": "e64167933d0201e9fb1ebd3bb1bd1cd4",
"AhamSvastha/assets/assets/images/ic_aarogya_hectic_flip.png": "f4c2eacf92bf9468444fe53aeec2040e",
"AhamSvastha/assets/assets/images/New%2520Project.png": "bcece0fb8ea7adda379e12aa5141c254",
"AhamSvastha/assets/assets/images/doctor_aarogya.png": "ef221bcc6ced64676407cbe9ac572056",
"AhamSvastha/assets/assets/images/ic_aarogya_height.png": "dc22b677b126c3d86049856e0c92dda8",
"AhamSvastha/assets/assets/images/login_screen_background.png": "ab29a67541f2efac1fc0ce3575818d69",
"AhamSvastha/assets/assets/images/age_page_indicator.png": "00ebc4161c003310c7bc28b9449139be",
"AhamSvastha/assets/assets/images/water_glass.png": "5042a61c7b58da20806eb6125f6823c6",
"AhamSvastha/assets/assets/images/im_all_well.png": "f315f6b35383191a289df85151d2ef09",
"AhamSvastha/assets/assets/images/ic_drop_down.svg": "968baa23ae79bcb26f5c7f624a55a78f",
"AhamSvastha/assets/assets/images/aarogya_meditation.png": "4cb594afb79973892a1561c1d983749d",
"AhamSvastha/assets/assets/images/ic_aarogya_weight.png": "418de0a1e31a952beb01087b63971f75",
"AhamSvastha/assets/assets/images/health_page_indicator.png": "0c5f0557644d7dd2cbfc9e0fe1b20b4b",
"AhamSvastha/assets/assets/images/login_card.png": "a348988a4f1f09e9bb7cfa2d182342bd",
"AhamSvastha/assets/assets/images/ic_aarogya_active.png": "fb1fb1e04ef55442e6406e424ca6b86c",
"AhamSvastha/assets/assets/images/fibre_indicator.png": "8ac44bcdfa224287e4e2222bd2c924cf",
"AhamSvastha/assets/assets/images/image.psd": "fd90263c47f6fa1bbc1d0449bf90763e",
"AhamSvastha/assets/assets/images/google_logo.svg": "b7727941c0e8a117b6cfd8f06a1cb7ed",
"AhamSvastha/assets/assets/images/aarogya_meditation_land.png": "838659c766a5f4bea1ff9d9a349ef1cd",
"AhamSvastha/assets/assets/images/bottom_clip_next_button.svg": "d16f8374108a91a0bab4c1e3178d9bdb",
"AhamSvastha/assets/assets/images/height_page_indicator.png": "32821e36339d7cfc8e3754b4bcce5184",
"AhamSvastha/assets/assets/images/add_profile_pic.png": "6638369fdb2adff4cbac517919d22796",
"AhamSvastha/assets/assets/images/gender_page_indicator.png": "59599f311592e4b0bc992b1ca1dc031a",
"AhamSvastha/assets/assets/images/sofa_background.png": "5a8bad983220c182918f3a565dcd0866"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
