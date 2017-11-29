/*
 * Copyright © 2017 Divante, Inc. All rights reserved.
 * See LICENSE for license details.
 */

require([
    'oroui/js/app/controllers/base/controller'
], function (BaseController) {
    'use strict';

    BaseController.loadBeforeAction([
        'jquery',
        'divantecookieconsent/js/app/components/cookie-consent-component'
    ], function ($, CookieConsentComponent) {
        /* add composition to reuse between controller actions */
        $('.cookie-consent[data-page-component-options]').each(function (i, elem) {
            var $sourceElement = $(elem);
            var options = $sourceElement.data('pageComponentOptions');
            $sourceElement.removeAttr('data-page-component-options');
            options._sourceElement = $sourceElement;
            BaseController.addToReuse('cookieConsentComponent', CookieConsentComponent, options);
        });
    });
});
