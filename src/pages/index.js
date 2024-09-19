import React from "react";
import theme from "theme";
import { Theme, Link, Image, Text, Box, Em, Section, Span, Strong, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { FaSith, FaHornbill, FaReact } from "react-icons/fa";
import { MdCheckCircle } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
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
						href="#projects"
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
						href="#touch"
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
						href="#partners"
					>
						Save on AI!
					</Link>
				</Box>
			</Components.QuarklycommunityKitMobileSidePanel>
		</Section>
		<Section padding="60px 0 20px 0" quarkly-title="HeroBlock" align-content="normal">
			<Section min-height="100vh" padding="0 0 0 0">
				<Override
					slot="SectionContent"
					flex-direction="row"
					flex-wrap="wrap"
					max-width="none"
					width="100%"
					sm-padding="72px 0px 0px 0px"
				/>
				<Box
					display="flex"
					width="40%"
					flex-direction="column"
					justify-content="center"
					align-items="flex-start"
					lg-width="100%"
					lg-align-items="center"
					sm-margin="0px 0px 50px 0px"
					margin="40px 5% 40px 5%"
					lg-padding="24px 60px 24px 60px"
					sm-padding="0px 20px 0px 20px"
					padding="24px 0px 24px 0px"
				>
					<Text
						margin="0px 0px 24px 0px"
						color="--dark"
						font="--headline2"
						lg-text-align="center"
						sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
						md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						<Span
							color="--purple"
							font="--headline4"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							user-select="auto"
							pointer-events="auto"
						>
							We are
						</Span>
						{" "}
						<br />
						Superconscious AI AG
					</Text>
					<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
						We are a small, independent team of students and alumni researching and testing applied AI use cases at the Hamburg University of Technology. Our independence enables us to pursue applications free from political or departmental leanings.{" "}
						<Strong>
							Join us!
						</Strong>
					</Text>
					<Box
						display="flex"
						sm-flex-direction="column"
						sm-width="100%"
						sm-text-align="center"
						justify-content="flex-start"
						align-items="center"
					>
						<Link
							href="mailto:superconscious[at]tuhh.de"
							padding="12px 24px 12px 24px"
							color="--light"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							transition="background-color 0.2s ease-in-out 0s"
							sm-margin="0px 0px 16px 0px"
							sm-text-align="center"
							background="--color-purple"
							hover-background="--color-white"
							hover-transition="background-color 0.2s ease-in-out 0s"
							hover-color="#1b1919"
							hover-border-width="1px"
						>
							Reach out!
						</Link>
						<Link
							href="https://trello.com/b/NeoOMCKM/superconscious-knowledge-base"
							padding="10px 24px 10px 24px"
							color="--darkL1"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							border-width="2px"
							border-style="solid"
							border-color="--color-darkL1"
							transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
							sm-margin="0px 0px 0px 0px"
							sm-text-align="center"
							hover-background="--color-purple"
							lg-margin="0px 0px 0px 0px"
							hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
							hover-color="--lightD2"
							hover-border-color="--color-dark"
						>
							Check our Knowledge Base
						</Link>
						<Link
							href="https://trello.com/b/NeoOMCKM/superconscious-knowledge-base"
							padding="10px 24px 10px 24px"
							color="--darkL1"
							text-decoration-line="initial"
							font="--lead"
							border-radius="8px"
							margin="0px 16px 0px 0px"
							border-width="2px"
							border-style="solid"
							border-color="--color-darkL1"
							transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
							sm-margin="0px 0px 0px 0px"
							sm-text-align="center"
							hover-background="--color-purple"
							lg-margin="0px 0px 0px 0px"
							hover-transition="color 0.2s ease-in-out 0s,border 0.2s ease-in-out 0s"
							hover-color="--lightD2"
							hover-border-color="--color-dark"
						>
							Check our{" "}
							<Strong>
								Kanban board
							</Strong>
						</Link>
					</Box>
				</Box>
				<Box
					display="flex"
					width="50%"
					justify-content="center"
					overflow-y="hidden"
					overflow-x="hidden"
					lg-width="100%"
					background="#FFFFFF url(https://assets.t3n.de/cms-red/cms-red/qr_code_many_houses_ff141952bb/qr_code_many_houses_ff141952bb.jpeg?class=gallery-square) center center/cover no-repeat scroll padding-box"
					lg-min-height="400px"
					lg-background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) 100% 75%/cover no-repeat scroll padding-box"
					md-background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) 100% 100%/cover no-repeat scroll padding-box"
					sm-background="#FFFFFF url(https://media.licdn.com/dms/image/D5612AQFT6RKs3F3piA/article-cover_image-shrink_720_1280/0/1680603082911?e=2147483647&v=beta&t=bhKFJyq1jD-hRTz1nVur83vK30DR9VEqqq-i95eC5Ic) 50% 100%/cover no-repeat scroll padding-box"
				/>
			</Section>
		</Section>
		<Section padding="28px 0 74px 0" md-padding="28px 0 28px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				empty-border-color="LightGray"
				width="40%"
				display="flex"
				md-width="100%"
				empty-min-width="64px"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					lg-font="normal 700 28px/1.2 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 700 22px/1.2 &quot;Manrope&quot;, sans-serif"
				>
					What We{" "}
					<Span
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						color="--purple"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						user-select="auto"
						pointer-events="auto"
						border-color="#6f1b6f"
						id="what-do"
					>
						Do
					</Span>
				</Text>
			</Box>
			<Box
				md-width="100%"
				empty-min-height="64px"
				empty-border-color="LightGray"
				padding="0px 0px 0px 10%"
				width="60%"
				display="flex"
				md-padding="0px 0px 0px 0px"
				md-margin="32px 0px 0px 0px"
				empty-min-width="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Text
					margin="0px 0px 0px 0px"
					font="--lead"
					color="--dark"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
					sm-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
					md-font="normal 400 14px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Our time is devoted to Generative AI: we work on low-resource-cost LLM applications (software engineering aka.  as well as generative AI for image generation.{" "}
					<br />
					<br />
					As a student-driven research group our main interest lies in learning and testing at a low - and represent and underrepresented demographic in the public discourse around AI systems.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box min-width="100px" min-height="100px">
				<Text margin="0px 0px 0px 0px" font="--headline2">
					Our{" "}
					<Span
						color="--purple"
						font="--headline2"
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
						id="projects"
					>
						Projects
					</Span>
				</Text>
			</Box>
			<Box display="grid" grid-template-columns="repeat(3, 1fr)" grid-gap="24px 4%" md-grid-template-columns="1fr">
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					{"  "}
					<Box justify-content="flex-start" flex-direction="column" display="flex">
						<Icon
							category="fa"
							icon={FaSith}
							margin="0px 0px 16px 0px"
							color="--dark"
							size="48px"
							padding="6px 6px 6px 6px"
						/>
						<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
							MLOps
						</Text>
						{"  "}
					</Box>
					{"  "}
					<Text font="--headline4">
						{"    "}Learning to operate AI models with productive use in mind{" "}
					</Text>
					{"  "}
					<Box min-width="100px" min-height="100px">
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"      "}Running on-premise LLMs (smol one){"\n    "}
						</Text>
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"      "}Working with and on image generation models{"\n    "}
						</Text>
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"      "}Fine-tuning models for specific use cases - and filling our KB{"\n    "}
						</Text>
						{"  "}
					</Box>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaHornbill}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						AI Assistants
					</Text>
					<Text font="--headline4">
						Not just for student use cases. This is our proof-of-concept factory.
					</Text>
					<Box min-width="100px" min-height="100px">
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{" "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"      "}Discord-based Q&A bot for video lectures (Youtube only ATM)
						</Text>
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"  "}Absorbing paper-based student knowledge repos into a chatLLM{"     "}
						</Text>
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"      "}Can we run our own coursology.io ?{" "}
						</Text>
						{"  "}
					</Box>
				</Box>
				<Box justify-content="flex-start" flex-direction="column" display="flex">
					<Icon
						category="fa"
						icon={FaReact}
						margin="0px 0px 16px 0px"
						color="--dark"
						size="48px"
						padding="6px 6px 6px 6px"
					/>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						The Fun Garage
					</Text>
					<Text font="--headline4">
						Machine Learning for fun - what could possibly go wrong?
					</Text>
					<Box min-width="100px" min-height="100px">
						{"    "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"      "}What Automated trolling on /r/TU_HH{" "}
						</Text>
						{"        "}
						<Text
							margin="0px 0px 0px 0px"
							color="--greyD3"
							font="--lead"
							lg-text-align="left"
							display="flex"
							align-items="center"
						>
							{"      "}
							<Icon
								category="md"
								icon={MdCheckCircle}
								size="24px"
								color="--purple"
								margin="0px 8px 0px 0px"
							/>
							{"    "}Your project here!{"    "}
						</Text>
						{"  "}
					</Box>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0">
			<Box align-items="center" display="flex" justify-content="center" flex-direction="column">
				<Text
					margin="0px 0px 0px 0px"
					font="--headline2"
					color="--dark"
					sm-font="normal 700 52px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					text-align="center"
				>
					Partners
				</Text>
				<Text
					margin="25px 0px 0px 0px"
					font="--lead"
					display="block"
					text-align="center"
					color="--darkL2"
					lg-width="100%"
					width="60%"
				>
					Our partners are a key part in making hands-on education accessible to our students! We are very grateful for the support received by:
				</Text>
			</Box>
			<Box margin="40px 0px 0px 0px" display="flex" flex-direction="row" flex-wrap="wrap">
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				/>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				/>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Link href="https://www.theoriq.ai/litepaper">
						<Image src="https://cdn.prod.website-files.com/66e9164649f92a8503081c8b/66e9164649f92a8503081cac_A_Logotype.svg" border-radius="16px" max-width="100%" />
					</Link>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				>
					<Link href="https://browse.ai/?via=daniel-baran">
						<Image src="data:image/png;base64,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" border-radius="16px" max-width="100%" />
					</Link>
				</Box>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				/>
				<Box
					position="relative"
					display="flex"
					flex-direction="column"
					margin="0px 0px 0px 0px"
					lg-margin="0px 0px 0px 0px"
					sm-width="calc(100% / 2)"
					sm-margin="0px 0px 0px 0px"
					width="calc(100% / 6)"
					md-width="calc(100% / 3)"
				/>
			</Box>
		</Section>
		<Section padding="74px 0 24px 0">
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				empty-border-style="solid"
				empty-border-color="LightGray"
				margin="0px 0px 16px 0px"
				width="100%"
				padding="16px 16px 16px 16px"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
			>
				<Text
					font="--headline3"
					color="--dark"
					lg-font="normal 600 24px/1.2 &quot;Manrope&quot;, sans-serif"
					margin="0px 0px 0px 0px"
					id="touch"
				>
					Get In Touch With Us!
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="33%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				{" "}
				<Box
					width="300px"
					height="300px"
					border-radius="50%"
					overflow="hidden"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Image
						width="100%"
						min-height="300px"
						object-fit="contain"
						object-position="80% 0%"
						lg-min-height="200px"
						id="l2l"
						src="https://d2kq0urxkarztv.cloudfront.net/6459474038d4c8003c807e83/4253715/image-0c3efc74-1fdc-4477-8c91-784b2df700ce.png?w=248&e=webp&nll=true"
					/>
				</Box>
				<Box
					display="flex"
					flex-direction="row"
					align-items="center"
					md-width="100%"
					md-align-items="baseline"
					md-justify-content="space-between"
				>
					{"  "}
					<Box display="flex" alignItems="center">
						{"    "}
						<Text lg-font="600 16px/3 &quot;Manrope&quot;, sans-serif" margin="16px 8px 13px 0px" font="--headline4" color="--dark">
							{"      "}Dawid Golebiewski
						</Text>
						<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" linked-in="https://linkedin.com/in/dhoracy">
							{"          "}
						</SocialMedia>
						{"  "}
					</Box>
					{"  "}
					<Box margin="8px 0px 0px 0px">
						{"      "}
					</Box>
				</Box>
				<Text margin="0px" font="--lead">
					TUHH Alumnus (IIW M.Sc), Volunteer Instructor
					<br />
					LLM & Applied AI Nerd
				</Text>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="33%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					width="300px"
					height="300px"
					border-radius="50%"
					overflow="hidden"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Image
						src="https://d2kq0urxkarztv.cloudfront.net/6459474038d4c8003c807e83/4253715/image-c048180c-ccf4-42ac-b005-ca5e7483f78f.png?w=254&e=webp&nll=true"
						width="100%"
						min-height="400px"
						object-fit="cover"
						object-position="80% 0%"
						lg-min-height="200px"
					/>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Stephan Fischer
					</Text>
					<Text margin="0px 0px 0px 0px" font="--lead">
						B.Sc. Mechatronics, Resident AI-Artist
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="33%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
			>
				<Box
					width="300px"
					height="300px"
					border-radius="50%"
					overflow="hidden"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Image
						src="https://pbs.twimg.com/profile_images/1614730592389668868/DrmacvHo_400x400.jpg"
						width="100%"
						min-height="400px"
						object-fit="cover"
						object-position="80% 0%"
						lg-min-height="200px"
					/>
				</Box>
				<Box
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
					md-justify-content="space-between"
				>
					<Text margin="16px 0px 13px 0px" font="--headline4" color="--dark" lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif">
						Some of our members prefer not to be public on the web :)
					</Text>
					<SocialMedia margin="0px 0px 0px -3px" justify-content="flex-start" twitter="https://twitter.com/hvbris_">
						{"          "}
					</SocialMedia>
					<Text margin="0px 0px 0px 0px" font="--lead">
						CS B.Sc. and M.Sc. Students
					</Text>
				</Box>
			</Box>
			<Box
				empty-border-color="LightGray"
				width="33%"
				padding="16px 16px 16px 16px"
				md-width="100%"
				empty-min-width="64px"
				empty-min-height="64px"
				empty-border-width="1px"
				empty-border-style="solid"
				max-width="max-content"
			>
				<Box
					width="300px"
					height="300px"
					border-radius="50%"
					overflow="hidden"
					display="flex"
					justify-content="center"
					align-items="center"
				>
					<Image
						lg-min-height="200px"
						src="https://d2kq0urxkarztv.cloudfront.net/6459474038d4c8003c807e83/4253715/image-ca30170d-72d7-4c40-a8e3-c5c1e2b1fac2.jpg?w=248&e=webp&cX=0&cY=0&cW=688&cH=704"
						width="100%"
						min-height="400px"
						object-fit="cover"
						object-position="80% 0%"
					/>
				</Box>
				<Box
					md-justify-content="space-between"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-flex-direction="row"
					md-align-items="center"
				>
					<Text
						font="--headline4"
						color="--dark"
						lg-font="600 16px/1.3 &quot;Manrope&quot;, sans-serif"
						margin="16px 0px 13px 0px"
						text-align="center"
					>
						What about you?
					</Text>
				</Box>
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
					href="/404"
					text-decoration-line="initial"
					color="--dark"
					font="--lead"
					margin="0px 0px 16px 0px"
					lg-font="normal 400 16px/1.5 &quot;Manrope&quot;, sans-serif"
				>
					Genesis // Our goals
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
					href="mailto:superconscious[att]tuhh.de"
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