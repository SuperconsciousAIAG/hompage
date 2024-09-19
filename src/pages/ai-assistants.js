import React from "react";
import theme from "theme";
import { Theme, Link } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"ai-assistants"} />
		<Helmet>
			<title>
				Superconscious AI AG
			</title>
			<meta name={"description"} content={"Independent applied AI research group \" TUHH, Germany"} />
			<meta property={"og:title"} content={"Superconscious AI AG"} />
			<meta property={"og:description"} content={"Independent applied AI research group \" TUHH, Germany"} />
			<meta property={"og:image"} content={"https://images.unsplash.com/photo-1577791355984-9279a5530c90?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&h=2000"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} type={"image/x-icon"} />
			<link rel={"apple-touch-icon"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<link rel={"apple-touch-icon"} sizes={"76x76"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<link rel={"apple-touch-icon"} sizes={"152x152"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<link rel={"apple-touch-startup-image"} href={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<meta name={"msapplication-TileImage"} content={"https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"} />
			<meta name={"msapplication-TileColor"} content={"#f72cf0"} />
		</Helmet>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"614ce40335c5c8001f7746de"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});