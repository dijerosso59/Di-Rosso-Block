<?php
/**
 * Plugin Name:       Di Rosso Block
 * Description:       Les blocks Di Rosso qui font trembler Gutenberg
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           1.0
 * Author:            Di Rosso
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       di-rosso-block
 *
 * @package           create-block
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function create_block_dirosso_init() {
	register_block_type( __DIR__ . '/build/di-rosso-text' );
	register_block_type( __DIR__ . '/build/di-rosso-editable' );

}
add_action( 'init', 'create_block_dirosso_init' );