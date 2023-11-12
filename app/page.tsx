import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/image";

async function getData() {
	const res = await fetch('https://www.melivecode.com/api/attractions')
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.
   
	if (!res.ok) {
	  // This will activate the closest `error.js` Error Boundary
	  throw new Error('Failed to fetch data')
	}
   
	return res.json()
}
   

export default async function Home() {
	const data = await getData()
	return (
		<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
			{ data.map((attraction: any) => (
				<div key={ attraction.id }>
					<Image alt={ attraction.name} loading="lazy" src={ attraction.coverimage }/>
				</div>
			))}
		</section>
	);
}
