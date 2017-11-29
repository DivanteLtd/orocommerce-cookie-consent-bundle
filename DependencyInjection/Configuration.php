<?php
/**
 * Copyright © 2017 Divante, Inc. All rights reserved.
 * See LICENSE for license details.
 */

namespace Divante\Bundle\CookieConsentBundle\DependencyInjection;

use Oro\Bundle\ConfigBundle\DependencyInjection\SettingsBuilder;
use Symfony\Component\Config\Definition\Builder\TreeBuilder;
use Symfony\Component\Config\Definition\ConfigurationInterface;

/**
 * Class Configuration
 */
class Configuration implements ConfigurationInterface
{
    const NAME = 'divante_cookie_consent';

    /**
     * {@inheritdoc}
     */
    public function getConfigTreeBuilder()
    {
        $treeBuilder = new TreeBuilder();

        $rootNode = $treeBuilder->root(self::NAME);

        SettingsBuilder::append(
            $rootNode,
            [
                'background_color' => ['value' => '#000000'],
                'button_color' => ['value' => '#f1d600'],
                'message_text' => [
                    'value' => 'This website uses cookies to ensure you get the best experience on our website.'
                ],
                'dismiss_text' => ['value' => 'Got it'],
                'learn_more_text' => ['value' => 'Learn more'],
                'learn_more_url' => ['value' => null],
            ]
        );

        return $treeBuilder;
    }
}
