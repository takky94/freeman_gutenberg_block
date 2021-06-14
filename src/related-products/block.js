const { registerBlockType } = wp.blocks;
const { InnerBlocks, useBlockProps } = wp.blockEditor;

registerBlockType("freeman-block/related-products", {
	title: "関連商品",
	icon: (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="20"
			height="20"
			viewBox="0 0 50 50"
		>
			<g fill="#1a1311">
				<path d="M23.262 21.635v1.432h17.764v-2.186h-17.01a.735.735 0 00-.754.754zM23.264 34.746l-.007 7.306h17.769v-7.306z" />
				<path d="M10.673 22.417a13.9 13.9 0 0113.8-13.968h16.551V0H0v42.056h10.673z" />
			</g>
			<path
				d="M24.475 9.628a12.728 12.728 0 00-12.637 12.789v19.641h10.257l.007-8.487h18.932V24.25H22.095v-2.615a1.9 1.9 0 011.92-1.928h17.009V9.628z"
				fill="#1a1311"
			/>
			<path
				d="M39.971 10.807h-15.5a11.54 11.54 0 00-11.472 11.61v18.554h7.925l.007-8.581h19.041v-6.962h-19.04v-3.794a3.083 3.083 0 013.085-3.107h15.954z"
				fill="#dc0016"
				stroke="#dc0016"
				strokeMiterlimit="2"
				strokeWidth=".75"
			/>
		</svg>
	),
	category: "design",
	example: {},

	edit: () => {
		const template = [
			["core/heading", { content: "関連商品一覧", level: 4 }],
			["core/shortcode", { text: '[the_products id="1" layout="column" /]' }],
		];

		const blockProps = useBlockProps();

		return (
			<div {...blockProps} className="single-related">
				<InnerBlocks
					className="products"
					template={template}
					templateLock="all"
				/>
			</div>
		);
	},
	save: () => {
		const blockProps = useBlockProps.save();

		return (
			<div {...blockProps} className="single-related">
				<InnerBlocks.Content className="products" />
			</div>
		);
	},
});
