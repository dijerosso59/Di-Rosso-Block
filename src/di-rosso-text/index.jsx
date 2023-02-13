import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

import edit from './edit';
import save from './save';

registerBlockType('di-rosso-block/di-rosso-text', {
	edit,
	save,
});
