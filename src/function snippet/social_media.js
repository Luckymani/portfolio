export default function navigator(val) {
	const instagram = "https://www.instagram.com/code_addict21/";
	const linkedin = "https://www.linkedin.com/in/sai-manikanta-mamidi-989a08231/";
	const github = "https://github.com/Luckymani";
	const youtube = "https://www.youtube.com/channel/UC__Lf9FVRGUqYpSpjWQ8Vpg";
	const whatsapp = "https://wa.link/kxwou3";

	function navigate(url) {
		const link = document.createElement("a");
		link.target = "_blank";
		link.href = url;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}

	switch (val) {
		case "instagram":
			return navigate(instagram);
		case "linkedin":
			return navigate(linkedin);
		case "github":
			return navigate(github);
		case "youtube":
			return navigate(youtube);
		case "whatsapp":
			return navigate(whatsapp);
		default:
			return null;
	}
}
