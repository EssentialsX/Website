import Vue from "vue";
import Buefy from "buefy";

import "./style/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core"
import { faSync, faExternalLinkSquareAlt, faDownload, faChevronDown, faChevronUp, faUsers, faCheckCircle, faTools, faSun, faMoon, faArrowUp, faArrowDown, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord, faPatreon } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import KonamiCode from "vue-konami-code";

import hljs from 'highlight.js/lib/core';
import yaml from 'highlight.js/lib/languages/yaml';
import hljsVuePlugin from "@highlightjs/vue-plugin";
import 'highlight.js/styles/stackoverflow-dark.css'

hljs.registerLanguage('yaml', yaml);

import ExternalData from "./mixins/external-data";

library.add(faSync, faUsers, faExternalLinkSquareAlt, faChevronDown, faChevronUp, faGithub, faDiscord, faDownload, faPatreon, faCheckCircle, faTools, faSun, faMoon, faArrowUp, faArrowDown, faAngleRight);
Vue.component('fa-icon', FontAwesomeIcon);

Vue.use(Buefy, {
    defaultIconComponent: 'fa-icon',
    defaultIconPack: "fas"
});

Vue.use(hljsVuePlugin);

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

Vue.mixin(ExternalData);

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
