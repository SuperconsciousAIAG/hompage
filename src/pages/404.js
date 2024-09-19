import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Em, Section, Icon, Strong } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
import { MdHelp } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"404"} />
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
		<Section padding="18px 0 18px 0" quarkly-title="Header">
			<Override slot="SectionContent" justify-content="space-around" flex-direction="row" align-items="center" />
			<Image
				max-height="80px"
				src="https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13:02:03.066Z"
				width="7%"
				height="auto"
				lg-max-width="150px"
				sm-width="50%"
				flex="0 1 auto"
				min-width="24px"
				min-height="24px"
				srcSet="https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=500 500w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=800 800w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?v=2023-05-17T13%3A02%3A03.066Z&quality=85&w=3200 3200w"
				sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
			/>
			<Box
				min-width="100px"
				min-height="100px"
				align-self="baseline"
				display="flex"
				justify-content="center"
				align-items="center"
			>
				<Text margin="0px 18px 0px 18px" font="--headline4">
					Superconscious AI AG
				</Text>
			</Box>
			<Components.QuarklycommunityKitMobileSidePanel width="50%">
				<Override slot="Button Text" lg-display="none" />
				<Override slot="Button Icon" size="32px" />
				<Box display="flex" justify-content="center" align-items="center" md-flex-direction="column">
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="/index#projects"
						text-decoration-line="initial"
						color="--dark"
					>
						Our Projects
					</Link>
					<Link
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						lg-margin="0px 6px 0px 6px"
						href="/index#touch"
					>
						Our Team
					</Link>
					<Link
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						lg-margin="0px 6px 0px 6px"
						href="/resources"
						text-decoration-line="initial"
						color="--dark"
					>
						<Em>
							Resources
						</Em>
					</Link>
					<Link
						lg-margin="0px 6px 0px 6px"
						text-decoration-line="initial"
						color="--dark"
						font="--lead"
						padding="6px 6px 6px 6px"
						margin="0px 18px 0px 18px"
						md-margin="0px 18px 10px 18px"
						href="/index#partners"
					>
						Save on AI!
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section color="--dark">
			<Override slot="SectionContent" />
			<Text as="h2" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Genesis // Our Goals
			</Text>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
				sm-margin="24px 0 0 0"
			>
				<Icon
					position="absolute"
					top="8px"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					Where did Superconscious AG come from?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It all begins with an idea. In 2019 our founders were on a neuroscience hypewave. With experience in BCI and alternate states of consciousness we sought to methodically explore how to grow and escape the mental limitations put on us. We raised a lot of time-series data from EEGs after running VR + EEG experiments in our rooms. COVID broke apart the team, most people graduated. What we were left with was data. So we started generating EEG-based art, which sort of worked. And then DALL-E, GPT-3.5 and Stable Diffusion happened.{" "}
					<br />
					<br />
					And we knew what to do from then on out.
				</Text>
			</Box>
			<Box
				margin="36px 0 0 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
				sm-margin="24px 0 0 0"
			>
				<Icon
					position="absolute"
					top="8px"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What do you want to achieve?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					We want to be an internal accelerator for AI projects launched by students in Hamburg. We lament that Bologna has destroyed the much-cherished free-wheeling explorative study culture and instead led to students being so dialed into their studies they only have 20 minutes per day for memes before they have to race to prepare for the next underwhelming deliverable at uni ...
					<br />
					<br />
					All while the world of technology, human-computer interaction and frankly, all culture is rapidly changing, right in front of our eyes. But the eyes are wide shut.
					<br />
					<br />
					Our express goal is to{" "}
					<br />
					<br />
					- help students from any local university play and work on ML-based projects, be they art, AI agents or simple data science
					<br />
					- when opportune: help transition into a startup format if an idea gains traction
					<br />
					- showcase AI applications that are directly beneficial to the core processes of the university and city
				</Text>
			</Box>
			<Box
				margin="36px 0"
				padding="0 0 0 54px"
				sm-padding="54px 0 0 0"
				position="relative"
				max-width="800px"
				sm-margin="24px 0 36px 0"
			>
				<Icon
					position="absolute"
					top="8px"
					left="0"
					size="36px"
					color="--primary"
					category="md"
					icon={MdHelp}
				/>
				<Text as="h3" font="--headline3" margin="10px 0">
					What is in it for me?
				</Text>
				<Text as="p" font="--lead" margin="10px 0" color="--greyD2">
					It is really simple: education without fun and experimentation leads to worse outcomes. You need a passion. We are a vehicle for all those whose passion lies in{" "}
					<br />
					<br />
					- automating parts of their lives at a high fidelity
					<br />
					- experimenting with state of the art machine learning technology{" "}
					<br />
					- building ML/AI-enabled software to help fellow students
					<br />
					<br />
					and most importantly
					<br />
					<br />
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						- share what you learned.{" "}
						<br />
						<br />
						In the end, you are the master of your fate. The choice is simple:
						<br />
					</Strong>
				</Text>
				<Box min-width="100px" min-height="100px">
					<Text margin="0px 0px 0px 0px" max-width="25vw" text-align="center" font="24px Roboto">
						<br />
						<Link href="https://quarkly.io/preview#/https://en.wikipedia.org/wiki/Homo_Deus:_A_Brief_History_of_Tomorrow">
							Homo Deus
						</Link>
						{" "}or{" "}
						<Link href="https://quarkly.io/preview#/https://en.wikipedia.org/wiki/Herd_behavior#Sheeple">
							Sheeple
						</Link>
						{" "}?
					</Text>
					<Image
						src="https://pbs.twimg.com/media/EewgJk5VoAAQY2I?format=jpg&name=4096x4096"
						display="block"
						object-fit="scale-down"
						className="redbluepill"
						width="50% content-box"
						height="50% content-box"
						max-width="25vw"
						margin="2vw 0px 0px 0px"
						box-shadow="5px 0 25px 1px rgba(214, 18, 171, 0.66)"
						filter="invert(5%) brightness(200%)"
					/>
				</Box>
				<Box min-width="100px" min-height="100px" />
			</Box>
		</Section>
		<Section padding="54px 0 30px 0" quarkly-title="Footer" lg-padding="30px 0 20px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				width="25%"
				md-width="50%"
				sm-margin="0px 0px 16px 0px"
				empty-min-width="64px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				md-align-items="flex-start"
				md-display="flex"
				md-justify-content="center"
				sm-padding="16px 16px 16px 0px"
			>
				<Image
					src="https://uploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png"
					width="248px"
					height="auto"
					max-width="100%"
					srcSet="https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=500 500w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=800 800w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=1080 1080w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=1600 1600w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=2000 2000w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=2600 2600w,https://smartuploads.quarkly.io/6464cddb0343c10023977ea1/images/SVG_SCAG.png?quality=85&w=3200 3200w"
					sizes="(max-width: 576px) 100vw,(max-width: 767px) 100vw,(max-width: 992px) 100vw,100vw"
				/>
			</Box>
			<Box
				width="25%"
				flex-direction="column"
				md-width="50%"
				sm-padding="16px 16px 16px 0px"
				empty-border-style="solid"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				empty-min-width="64px"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					About
				</Text>
				<Link
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="/404"
				>
					Genesis / Our Goals
				</Link>
			</Box>
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-color="LightGray"
				padding="16px 16px 16px 16px"
				display="flex"
				flex-direction="column"
				sm-padding="16px 16px 16px 0px"
				empty-min-width="64px"
				empty-border-style="solid"
				width="25%"
				md-width="50%"
			>
				<Text margin="0px 0px 32px 0px" font="--headline4" color="--dark" lg-font="600 24px/1.3 &quot;Manrope&quot;, sans-serif">
					Contact
				</Text>
				<Link
					href="tel:123456789"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					@superconAI
				</Link>
				<Link
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="mailto:superconscious[at]tuhh.de"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
				>
					superconscious[at]tuhh.de
				</Link>
				<Link
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					href="#"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
				>
					Schlossmühlendamm 32
					<br />
					21075 Hamburg, Germany
				</Link>
			</Box>
		</Section>
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