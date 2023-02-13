import { __ } from "@wordpress/i18n";
import { useBlockProps, MediaUpload } from "@wordpress/block-editor";
import { Dashicon } from "@wordpress/components";

import "./editor.scss";

export default function edit(props) {
	const blockProps = useBlockProps();

	const onChangeTitle = (event) => {
		props.setAttributes({ title: event.target.value });
	};

	const onChangeContent = (event) => {
		props.setAttributes({ content: event.target.value });
	};

	const onSelectImage = (media) => {
		props.setAttributes({ image: media.url });
	};

	return (
		<div {...blockProps}>
			{props.isSelected ? (
				<div className="block-content">
					<div className="content">
						<input
							type="text"
							value={props.attributes.title}
							onChange={onChangeTitle}
							placeholder={__("Ton Titre", "di-rosso-block")}
						/>
						<textarea
							type="text"
							value={props.attributes.content}
							onChange={onChangeContent}
							placeholder={__("Ton Texte", "di-rosso-block")}
						/>
					</div>
					<div className="content">
						<figure>
							<img src={props.attributes.image} />
						</figure>
						<MediaUpload
							onSelect={onSelectImage}
							render={({ open }) => (
								<button className="select-image" onClick={open}>
									<Dashicon icon="format-image" />
									{__("Sélectionne une image", "di-rosso-block")}
								</button>
							)}
						/>
					</div>
				</div>
			) : (
				<div className="block-content">
					<div className="content">
						<h1>{props.attributes.title}</h1>
						<p>{props.attributes.content}</p>
					</div>
					<div className="content">
						<figure>
							<img src={props.attributes.image} />
						</figure>
					</div>
				</div>
			)}
		</div>
	);
}
