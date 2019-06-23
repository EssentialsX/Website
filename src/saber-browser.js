import Vue from "vue";
import Buefy from "buefy";
import "./style/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core"
import { faSync, faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faSync, faExternalLinkSquareAlt);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: "fas"
});
