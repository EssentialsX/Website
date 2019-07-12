import Vue from "vue";
import Buefy from "buefy";
import "./style/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core"
import { faSync, faExternalLinkSquareAlt, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import KonamiCode from "vue-konami-code";

library.add(faSync, faExternalLinkSquareAlt, faGithub, faDiscord, faDownload, faPatreon);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: "fas"
});

// build process workaround
if (typeof document !== "undefined") {
    Vue.use(KonamiCode, {
        callback: function () {
            if (document.body.classList.contains("konami")) {
                document.body.classList.remove("konami");
            } else {
                document.body.classList.add("konami");
            }
        }
    });
}

export default ({ setHead }) => {
  setHead({
    meta: [
        {
            name: "description",
            content: "The essential plugin for Spigot servers."
        }
    ]
  });
}
