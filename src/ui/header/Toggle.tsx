import { RiCloseLargeFill } from 'react-icons/ri'
import { RiMenu3Fill } from 'react-icons/ri'
export default function Toggle() {
	return (
		<label className="[grid-area:toggle] md:hidden">
			<input id="header-open" type="checkbox" hidden />

			<span className="flex h-7 w-7 items-center justify-center border border-gray-500 header-open:hidden">
				<RiMenu3Fill className="text-gray-700" />
			</span>
			<span className="flex h-7 w-7 items-center justify-center border border-gray-500 header-closed:hidden">
				<RiCloseLargeFill className="text-gray-700" />
			</span>
		</label>
	)
}
