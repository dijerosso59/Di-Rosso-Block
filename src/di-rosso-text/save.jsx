import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";

export default function save() {
	return (
		<section id="test">
			<div className="bg-red-500">
				<p {...useBlockProps.save()}>
					{__("Contenu sauvegardés en base Di Rosso Block", "di-rosso-block")}
				</p>
			</div>
		</section>
	);
}
