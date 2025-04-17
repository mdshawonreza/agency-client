import React from 'react';
import logos from '../../assets/7-types-of-logos.avif'
import logo1 from '../../assets/nasa.avif'
import logo2 from '../../assets/ibm.avif'
import logo3 from '../../assets/hbo.avif'
import logo4 from '../../assets/visa.avif'
import logo5 from '../../assets/coca-cola.avif'
import logo6 from '../../assets/google.avif'
import logo7 from '../../assets/apple.avif'
import logo8 from '../../assets/twitter.avif'
import logo9 from '../../assets/target.avif'
import logo10 from '../../assets/bp.avif'
import logo11 from '../../assets/pepsi.avif'
import logo12 from '../../assets/adidas.avif'
import logo13 from '../../assets/kool-aid.avif'
import logo14 from '../../assets/kfc.avif'
import logo15 from '../../assets/mr-peanut.avif'
import logo16 from '../../assets/doritos.avif'
import logo17 from '../../assets/burger-king.avif'
import logo18 from '../../assets/lacoste.avif'
import logo19 from '../../assets/harvard.avif'
import logo20 from '../../assets/starbucks.avif'
import logo21 from '../../assets/harley.avif'

const FeaturedBlog = () => {
	return (
		<div>
			<div className="  perspective-[10px] bg-black">
				{/* Hero Section */}
				<div className="relative h-[calc(55vh-60px)] md:h-[calc(80vh-60px)] flex items-center justify-center overflow-hidden ">
					<img
						src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/225363/sterling-davis-4iXagiKXn3Y-unsplash-min.jpg"
						alt="Photo of city during a sunset by Sterling Davis"
						className="absolute top-0 left-0 w-full h-[100%] object-cover z-10 scale-[1.1]"
					/>
					<div className="relative z-10 text-white text-center scale-110 -translate-z-[2px] mt-20">
						<h1 className="text-3xl md:text-[40px] font-semibold italic md:leading-tight">
							The 7 types of logos <br /> (and how to use them)
						</h1>

					</div>
				</div>

			</div>
			
			<div className="px-4 pt-16   mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-20">
				<div className="grid gap-10 md:gap-16 row-gap-8 lg:grid-cols-5">
					<div className="lg:col-span-3">
						
						
						<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal md:text-2xl">
							<span className='text-5xl font-semibold text-[#064BA7]'>A</span> logo is an image that symbolizes your business. But did you know there are 7 different types of logos?
							Though they’re all a combination of typography and images, each type of logo gives your brand a different feel. And since your logo is the first thing new customers will see, you want to make sure you get it right.
						</p>

					</div>
					<div className="flex flex-col space-y-8 lg:col-span-2">
						<div>
							
							<div className="mb-3">

								<p className="font-sans text-xl font-extrabold leading-none tracking-tight lg:text-2xl text-[#064BA7]">
									Here are the 7 types of logos you need to know about:
								</p>

							</div>
							<ol className="mb-4  text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
								<a href="#mono"><li>1. Monogram (or lettermark) logos</li></a>
								<a href="#word"><li>2. Wordmark logos</li> </a>
								<a href="#pict"><li>3. Pictorial mark logos</li></a>
								<a href="#abst"><li>4. Abstract logo marks</li></a>
								<a href="#masc"><li>5. Mascot logos</li></a>
								<a href="#comb"><li>6.The combination mark</li></a>
								<a href="#embl"><li>7.The emblem</li></a>

							</ol>
							
						</div>
						
					</div>
				</div>
				<div className='flex justify-center items-center mt-8'>
					<img src={logos} alt="" />
				</div>
			</div>
			<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
				<div className="mb-10 border-t border-b divide-y">
					<div className="grid py-8 sm:grid-cols-4">
						
						<div id='mono' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href=""
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									1. Monogram logos (or lettermarks)
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							Monogram logos or lettermarks are logos that consist of letters, usually brand initials. IBM, CNN, HP, HBO… Noticing a pattern, yes? They’re the initialisms of a few famous businesses with rather lengthy names. With 2 or 3 words to remember, they’ve each turned to using their initials for brand-identification purposes. So it makes perfect sense for them to use monograms—sometimes called lettermark logos—to represent their organizations.
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							A lettermark is a typography-based logo that’s comprised of a few letters, usually a company’s initials. The lettermark is all about simplicity. By utilizing just a few letters lettermark logos are effective at streamlining any company brand if they have a long name. For example, how much easier is it to say—and remember—NASA versus the National Aeronautics and Space Administration?
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							Because the focus is on initials, the font you choose (or create) is very important to make sure your logo is not only on-theme with what your company does, but also legible when you print on business cards. Also, if you’re not an established business already you may want to add your full business name below the logo so people can begin to learn who you are right away.
							</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo1} alt="" />
								 </div>
							     <div >
									<img src={logo2} alt="" />
								 </div>
							     <div >
									<img src={logo3} alt="" />
								 </div>
							</div>
						</div>
					</div>
					<div className="grid py-8 sm:grid-cols-4">
						
						<div id='word' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href="/"
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									2. Wordmarks (or logotypes)
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							Similar to a lettermark, a wordmark or logotype is a font-based logo that focuses on a business’ name alone. Think Visa and Coca-Cola. Wordmark logos work really well when a company has a succinct and distinct name. Google’s logo is a great example of this. The name itself is catchy and memorable so, when combined with strong typography, the logo helps create strong brand recognition.
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">Also, like with a lettermark logo, typography will be an important decision. Since the focus will be on your name, you’ll want to pick a font—or create a font—that captures the essence of what your business does. For example, fashion labels tend to use clean, elegant fonts that feel high-end, while legal or government agencies almost always stick to traditional, “heavier” text that feels secure.</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo4} alt="" />
								 </div>
							     <div >
									<img src={logo5} alt="" />
								 </div>
							     <div >
									<img src={logo6} alt="" />
								 </div>
							</div>

						</div>
					</div>
					<div className="grid py-8 sm:grid-cols-4">
						
						<div id='pict' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href="/"
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									3. Pictorial marks (or logo symbols)
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							A pictorial mark (sometimes called brand mark or logo symbol) is an icon—or graphic-based logo. It’s probably the image that comes to mind when you think “logo”: the iconic Apple logo, the Twitter bird, the Target bullseye. Each of these companies’ logos is so emblematic, and each brand so established, that the mark alone is instantly recognizable. A true brand mark is only an image. Because of this, it can be a tricky logo type for new companies, or those without strong brand recognition, to use.
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							The biggest thing to consider when deciding to go with a pictorial mark is what image to choose. This is something that will stick with your company its entire existence. You need to think about the broader implications of the image you choose: do you want to play on your name (like John Deere does with their deer logo)? Or are you looking to create deeper meaning (think how the Snapchat ghost tells us what the product does)? Or do you want to evoke an emotion (as the World Wildlife foundation does with their stylized image of a panda—an adorable and endangered species)?
							</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo7} alt="" />
								 </div>
							     <div >
									<img src={logo8} alt="" />
								 </div>
							     <div >
									<img src={logo9} alt="" />
								 </div>
							</div>
						</div>
					</div>
					<div className="grid py-8 sm:grid-cols-4">
						
						<div id='abst' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href="/"
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									4. Abstract logo marks
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							An abstract mark is a specific type of pictorial logo. Instead of being a recognizable image—like an apple or a bird—it’s an abstract geometric form that represents your business. A few famous examples include the BP starburst-y logo, the Pepsi divided circle and the strip-y Adidas flower. Like all logo symbols, abstract marks work really well because they condense your brand into a single image. However, instead of being restricted to a picture of something recognizable, abstract logos allow you to create something truly unique to represent your brand.
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							The benefit of an abstract mark is that you’re able to convey what your company does symbolically, without relying on the cultural implications of a specific image. Through color and form, you can attribute meaning and cultivate emotion around your brand. (As an example, think about how the Nike swoosh implies movement and freedom).
							</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo10} alt="" />
								 </div>
							     <div >
									<img src={logo11} alt="" />
								 </div>
							     <div >
									<img src={logo12} alt="" />
								 </div>
							</div>

						</div>
					</div>
					<div className="grid py-8 sm:grid-cols-4">
						
						<div id='masc' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href="/"
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									5. Mascots
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							Mascot logos are logos that involve an illustrated character. Often colorful, sometimes cartoonish, and most always fun, the mascot logo is a great way to create your very own brand spokesperson—er, spokes-character(?).
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							A mascot is simply an illustrated character that represents your company. Think of them as the ambassador for your business. Famous mascots include the Kool-Aid Man, KFC’s Colonel and Planter’s Mr. Peanut.
							Mascots are great for companies that want to create a wholesome atmosphere by appealing to families and children. Think of all those mascots at sporting events and the great dynamic they create by getting involved with the audience!
							</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo13} alt="" />
								 </div>
							     <div >
									<img src={logo14} alt="" />
								 </div>
							     <div >
									<img src={logo15} alt="" />
								 </div>
							</div>

						</div>
					</div>
					<div className="grid py-8 sm:grid-cols-4">
						
						<div id='comb' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href="/"
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									6. The combination mark
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							A combination mark is a logo comprised of a combined wordmark or lettermark and a pictorial mark, abstract mark, or mascot. The picture and text can be laid out side-by-side, stacked on top of each other, or integrated together to create an image. Some well-known combination mark logos include Doritos, Burger King and Lacoste.
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							Because a name is associated with the image, a combination mark is a versatile choice, with both the text and icon or mascot working together to reinforce your brand. With a combination mark, people will also begin to associate your name with your pictorial mark or mascot right away! In the future, you may be able to rely exclusively on a logo symbol, and not have to always include your name. Also, because the combination of a symbol and text creates a distinct image together, this type of logo is usually easier to trademark than a pictorial mark alone.
							</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo16} alt="" />
								 </div>
							     <div >
									<img src={logo17} alt="" />
								 </div>
							     <div >
									<img src={logo18} alt="" />
								 </div>
							</div>

						</div>
					</div>
					<div className="grid py-8 sm:grid-cols-4">
						<div className="mb-4 sm:mb-0">
							
						</div>
						<div id='embl' className="sm:col-span-3 lg:col-span-4">
							<div className="mb-3">
								<a
									href="/"
									aria-label="Article"
									className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
								>
									<p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl text-[#064BA7]">
									7. The emblem
									</p>
								</a>
							</div>
							<p className=" text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							An emblem logo consists of font inside a symbol or an icon; think badges, seals and crests. These logos tend to have a traditional appearance about them that can make a striking impact, thus they are often the go-to choice for many schools, organizations or government agencies. The auto industry is also very fond of emblem logos. While they have a classic style, some companies have effectively modernized the traditional emblem look with logo designs fit for the 21st century (think of Starbucks’ iconic mermaid emblem, or Harley-Davidson’s famous crest).
							</p>
							<p className="mt-4 text-xl font-medium text-[#3F3F3F] font-Poppins leading-normal">
							But because of their lean towards higher detail, and the fact that the name and symbol are rigidly entwined, they can be less versatile than the aforementioned types of logos. An intricate emblem design won’t be easy to replicate across all branding. For business cards, a busy emblem may shrink so small before it becomes too difficult to read. Also, if you plan on embroidering this type of logo on hats or shirts, then you’ll really have to create a design that is on the simple side or it just won’t be possible. So as a rule keep your design uncomplicated and you’ll walk away with a strong, bold look that’ll make you look like the consummate professional.
							</p>
							<div className='flex my-10 justify-center items-center gap-10'>
							     <div >
									<img src={logo19} alt="" />
								 </div>
							     <div >
									<img src={logo20} alt="" />
								 </div>
							     <div >
									<img src={logo21} alt="" />
								 </div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<a
						href="/"
						aria-label=""
						className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
					>
						See all articles
						<svg
							className="inline-block w-3 ml-2"
							fill="currentColor"
							viewBox="0 0 12 12"
						>
							<path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
						</svg>
					</a>
				</div>
			</div>

		</div>
	);
};

export default FeaturedBlog;