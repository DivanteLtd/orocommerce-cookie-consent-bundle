/*
 * Copyright © 2017 Divante, Inc. All rights reserved.
 * See LICENSE for license details.
 */

define(function (require) {
    'use strict';

    var CookieConsentComponent,
        BaseComponent = require('oroui/js/app/components/base/component'),
        cookieconsent = require('cookieconsent');

    CookieConsentComponent = BaseComponent.extend({
        initialize: function (options) {
            var preparedOptions = {
                "palette": {
                    "popup": {
                        "background": options.background_color
                    },
                    "button": {
                        "background": "#0094f0"
                    }
                },
                "content": {
                    "message": options.message_text,
                    "dismiss": options.dismiss_text,
                    "link": options.learn_more_text,
                    "href": "/polityka-prywatnosci"
                }
            };
            cookieconsent.initialise(preparedOptions);
        }
    });

    return CookieConsentComponent;
});
